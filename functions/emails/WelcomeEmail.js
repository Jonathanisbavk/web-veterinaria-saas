const React = require('react')
const {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Row,
  Column,
  Text,
  Heading,
  Button,
  Hr,
  Link,
} = require('@react-email/components')

const h = React.createElement

const colors = {
  brand: '#1fa17a',
  brandDark: '#0c5141',
  brandDeep: '#0a4337',
  warm: '#ff994a',
  warmSoft: '#ffd6a8',
  bg: '#fafdfb',
  card: '#ffffff',
  muted: '#5c7b73',
  border: '#d8f4e6',
  text: '#0c2c24',
}

const styles = {
  body: {
    backgroundColor: colors.bg,
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    margin: 0,
    padding: '32px 0',
  },
  container: {
    maxWidth: '560px',
    margin: '0 auto',
    backgroundColor: colors.card,
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(12, 81, 65, 0.08)',
    border: `1px solid ${colors.border}`,
  },
  header: {
    backgroundColor: colors.brand,
    backgroundImage: `linear-gradient(135deg, ${colors.brand} 0%, ${colors.brandDark} 100%)`,
    padding: '40px 32px 56px',
    textAlign: 'center',
  },
  logoBadge: {
    display: 'inline-block',
    backgroundColor: 'rgba(255,255,255,0.15)',
    color: '#ffffff',
    fontSize: '32px',
    width: '64px',
    height: '64px',
    lineHeight: '64px',
    borderRadius: '20px',
    margin: '0 auto 16px',
  },
  brandName: {
    color: '#ffffff',
    fontSize: '22px',
    fontWeight: 700,
    margin: 0,
    letterSpacing: '-0.4px',
  },
  headerSub: {
    color: 'rgba(255,255,255,0.85)',
    fontSize: '13px',
    margin: '6px 0 0',
    letterSpacing: '0.4px',
    textTransform: 'uppercase',
    fontWeight: 600,
  },
  content: {
    padding: '40px 32px 16px',
  },
  greeting: {
    color: colors.text,
    fontSize: '24px',
    fontWeight: 800,
    margin: '0 0 16px',
    lineHeight: 1.25,
    letterSpacing: '-0.5px',
  },
  paragraph: {
    color: colors.text,
    fontSize: '16px',
    lineHeight: 1.6,
    margin: '0 0 16px',
  },
  highlight: {
    backgroundColor: colors.warmSoft,
    color: colors.brandDeep,
    padding: '2px 6px',
    borderRadius: '4px',
    fontWeight: 600,
  },
  ctaWrapper: {
    textAlign: 'center',
    padding: '24px 0 8px',
  },
  cta: {
    backgroundColor: colors.brand,
    color: '#ffffff',
    fontSize: '15px',
    fontWeight: 700,
    padding: '14px 28px',
    borderRadius: '999px',
    textDecoration: 'none',
    display: 'inline-block',
  },
  benefitsBox: {
    backgroundColor: '#effbf6',
    border: `1px solid ${colors.border}`,
    borderRadius: '14px',
    padding: '20px',
    margin: '8px 0 24px',
  },
  benefitItem: {
    color: colors.text,
    fontSize: '14px',
    lineHeight: 1.5,
    margin: '0 0 8px',
    paddingLeft: '8px',
  },
  footer: {
    padding: '24px 32px 32px',
    textAlign: 'center',
  },
  footerText: {
    color: colors.muted,
    fontSize: '12px',
    lineHeight: 1.5,
    margin: '4px 0',
  },
  hr: {
    borderColor: colors.border,
    margin: '24px 0',
  },
}

function WelcomeEmail({ name = 'petlover', role = 'owner' } = {}) {
  const firstName = String(name).split(' ')[0]
  const isProvider = role === 'provider'

  const headlineCopy = isProvider
    ? `¡Bienvenido a MimoPet, ${firstName}!`
    : `¡Bienvenido a la manada, ${firstName}!`

  const introCopy = isProvider
    ? 'Nos emociona saber que quieres ofrecer tus servicios profesionales en MimoPet. Pronto te contactaremos para validar tu perfil y darte acceso prioritario a la plataforma.'
    : 'Eres parte del primer grupo de petlovers que probará MimoPet en Arequipa. Te avisaremos en cuanto abramos las puertas para que reserves servicios para tu mascota antes que nadie.'

  const benefits = isProvider
    ? [
        '🎯 Llegarás a cientos de petlovers en Arequipa.',
        '🗓️  Agenda y pagos digitales sin papeleo.',
        '⭐  Reseñas verificadas que potencian tu marca.',
      ]
    : [
        '🛡️  Cuidadores 100% verificados y de confianza.',
        '📍  Paseo, guardería y veterinaria en una sola app.',
        '🔔  Recordatorios automáticos de vacunas y paseos.',
      ]

  return h(
    Html,
    { lang: 'es' },
    h(Head, null),
    h(
      Preview,
      null,
      `Tu lugar en la lista de espera de MimoPet está confirmado, ${firstName}. 🐾`
    ),
    h(
      Body,
      { style: styles.body },
      h(
        Container,
        { style: styles.container },

        h(
          Section,
          { style: styles.header },
          h('div', { style: styles.logoBadge }, '🐾'),
          h(Heading, { as: 'h1', style: styles.brandName }, 'MimoPet'),
          h(Text, { style: styles.headerSub }, 'Cuidado con cariño · Arequipa')
        ),

        h(
          Section,
          { style: styles.content },
          h(Heading, { as: 'h2', style: styles.greeting }, headlineCopy),
          h(Text, { style: styles.paragraph }, introCopy),

          h(
            Text,
            { style: styles.paragraph },
            'Esto es lo que viene para ti:'
          ),

          h(
            Section,
            { style: styles.benefitsBox },
            benefits.map((b, i) =>
              h(Text, { key: i, style: styles.benefitItem }, b)
            )
          ),

          h(
            Text,
            { style: styles.paragraph },
            'Mientras esperamos el lanzamiento, ',
            h(
              'span',
              { style: styles.highlight },
              'cuéntale a tus amigos petlovers'
            ),
            ' y síguenos para no perderte ninguna novedad.'
          ),

          h(
            Section,
            { style: styles.ctaWrapper },
            h(
              Button,
              { href: 'https://mimopet.pe', style: styles.cta },
              'Conocer más sobre MimoPet'
            )
          )
        ),

        h(
          Section,
          { style: styles.footer },
          h(Hr, { style: styles.hr }),
          h(
            Text,
            { style: styles.footerText },
            'Recibes este correo porque te suscribiste a la lista de espera de MimoPet.'
          ),
          h(
            Text,
            { style: styles.footerText },
            '© ',
            String(new Date().getFullYear()),
            ' MimoPet · Hecho con cariño en Arequipa, Perú.'
          ),
          h(
            Text,
            { style: styles.footerText },
            h(
              Link,
              {
                href: 'mailto:hola@mimopet.pe',
                style: { color: colors.brand, textDecoration: 'none' },
              },
              'hola@mimopet.pe'
            )
          )
        )
      )
    )
  )
}

module.exports = WelcomeEmail
module.exports.default = WelcomeEmail
