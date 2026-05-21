const { onDocumentCreated } = require('firebase-functions/v2/firestore')
const { defineSecret } = require('firebase-functions/params')
const { setGlobalOptions } = require('firebase-functions/v2')
const logger = require('firebase-functions/logger')
const { initializeApp } = require('firebase-admin/app')
const { getFirestore, FieldValue } = require('firebase-admin/firestore')
const { Resend } = require('resend')
const { render } = require('@react-email/render')
const React = require('react')
const WelcomeEmail = require('./emails/WelcomeEmail')

initializeApp()
setGlobalOptions({ region: 'southamerica-east1', maxInstances: 10 })

const RESEND_API_KEY = defineSecret('RESEND_API_KEY')

// Cambia esto cuando verifiques tu dominio en Resend:
// from: 'MimoPet <hola@mimopet.pe>'
const FROM_ADDRESS = 'MimoPet <onboarding@resend.dev>'

exports.sendWelcomeEmail = onDocumentCreated(
  {
    document: 'waitlist/{id}',
    secrets: [RESEND_API_KEY],
  },
  async (event) => {
    const snap = event.data
    if (!snap) {
      logger.warn('No snapshot in event')
      return
    }

    const data = snap.data()
    const docId = event.params.id

    if (data.emailSent) {
      logger.info(`waitlist/${docId} already sent, skipping`)
      return
    }

    const resend = new Resend(RESEND_API_KEY.value())

    try {
      const html = await render(
        React.createElement(WelcomeEmail, {
          name: data.name,
          role: data.role,
        })
      )

      const result = await resend.emails.send({
        from: FROM_ADDRESS,
        to: data.email,
        subject: '¡Bienvenido a la manada MimoPet! 🐾',
        html,
      })

      if (result.error) {
        logger.error('Resend rejected the email', { docId, error: result.error })
        await getFirestore().doc(`waitlist/${docId}`).update({
          emailError: result.error.message || 'resend_error',
          emailErrorAt: FieldValue.serverTimestamp(),
        })
        return
      }

      await getFirestore().doc(`waitlist/${docId}`).update({
        emailSent: true,
        emailSentAt: FieldValue.serverTimestamp(),
        resendId: result.data?.id ?? null,
      })

      logger.info(`Welcome email sent`, { docId, email: data.email })
    } catch (err) {
      logger.error('sendWelcomeEmail failed', { docId, err })
      throw err
    }
  }
)
