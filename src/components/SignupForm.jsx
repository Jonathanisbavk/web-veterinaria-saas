import { useState } from 'react'
import { CheckCircle2, Loader2, Mail, User, PawPrint, Briefcase, AlertCircle } from 'lucide-react'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../lib/firebase'

const initialForm = { name: '', email: '', role: 'owner' }

export default function SignupForm() {
  const [formData, setFormData] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | success

  const validate = (data) => {
    const next = {}
    if (!data.name.trim() || data.name.trim().length < 2) {
      next.name = 'Ingresa tu nombre completo.'
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      next.email = 'Ingresa un correo electrónico válido.'
    }
    if (!data.role) {
      next.role = 'Selecciona una opción.'
    }
    return next
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const nextErrors = validate(formData)
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      return
    }

    setStatus('loading')
    try {
      await addDoc(collection(db, 'waitlist'), {
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        role: formData.role,
        source: 'landing',
        emailSent: false,
        createdAt: serverTimestamp(),
      })
      setStatus('success')
    } catch (err) {
      console.error('[MimoPet] addDoc failed', err)
      setStatus('idle')
      setErrors({ submit: 'No pudimos guardar tu suscripción. Inténtalo de nuevo.' })
    }
  }

  const reset = () => {
    setFormData(initialForm)
    setErrors({})
    setStatus('idle')
  }

  return (
    <section id="formulario" className="relative py-24 lg:py-32 bg-gradient-to-b from-white to-brand-50">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <div className="relative rounded-3xl bg-white p-8 sm:p-12 shadow-2xl shadow-brand-900/10 border border-brand-100">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-lg shadow-brand-600/40">
            <PawPrint size={22} />
          </div>

          {status === 'success' ? (
            <div className="text-center py-8">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                <CheckCircle2 size={36} strokeWidth={2} />
              </div>
              <h3 className="mt-6 text-2xl sm:text-3xl font-extrabold text-brand-900">
                ¡Bienvenido a la manada, {formData.name.split(' ')[0]}!
              </h3>
              <p className="mt-3 text-brand-900/70 max-w-md mx-auto">
                Recibirás un correo en <strong>{formData.email}</strong> tan pronto
                lancemos MimoPet en Arequipa. Gracias por confiar en nosotros.
              </p>
              <button
                type="button"
                onClick={reset}
                className="mt-8 inline-flex items-center justify-center rounded-full border-2 border-brand-200 hover:border-brand-400 text-brand-700 font-semibold px-6 py-3 transition-colors"
              >
                Registrar otra persona
              </button>
            </div>
          ) : (
            <>
              <div className="text-center">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-900 tracking-tight">
                  ¡Sé de los primeros en probar <span className="text-brand-600">MimoPet</span>!
                </h2>
                <p className="mt-3 text-brand-900/70">
                  Déjanos tu correo y selecciona cómo te gustaría participar en
                  nuestra comunidad.
                </p>
              </div>

              <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-brand-900 mb-2">
                    Nombre completo
                  </label>
                  <div className="relative">
                    <User
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-400"
                    />
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Camila Rivas"
                      className={`w-full rounded-xl border bg-white pl-11 pr-4 py-3.5 text-brand-900 placeholder:text-brand-900/30 focus:outline-none focus:ring-4 transition-all ${
                        errors.name
                          ? 'border-red-300 focus:border-red-500 focus:ring-red-100'
                          : 'border-brand-200 focus:border-brand-500 focus:ring-brand-100'
                      }`}
                    />
                  </div>
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-red-600">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-brand-900 mb-2">
                    Correo electrónico
                  </label>
                  <div className="relative">
                    <Mail
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-400"
                    />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="camila@correo.com"
                      className={`w-full rounded-xl border bg-white pl-11 pr-4 py-3.5 text-brand-900 placeholder:text-brand-900/30 focus:outline-none focus:ring-4 transition-all ${
                        errors.email
                          ? 'border-red-300 focus:border-red-500 focus:ring-red-100'
                          : 'border-brand-200 focus:border-brand-500 focus:ring-brand-100'
                      }`}
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-600">{errors.email}</p>
                  )}
                </div>

                <fieldset>
                  <legend className="block text-sm font-semibold text-brand-900 mb-2">
                    ¿Cómo quieres participar?
                  </legend>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <RoleOption
                      icon={PawPrint}
                      value="owner"
                      label="Quiero contratar servicios para mi mascota"
                      checked={formData.role === 'owner'}
                      onChange={handleChange}
                    />
                    <RoleOption
                      icon={Briefcase}
                      value="provider"
                      label="Quiero ofrecer mis servicios profesionales"
                      checked={formData.role === 'provider'}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.role && (
                    <p className="mt-1.5 text-xs text-red-600">{errors.role}</p>
                  )}
                </fieldset>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 hover:bg-brand-700 disabled:opacity-70 disabled:cursor-not-allowed text-white font-semibold py-4 shadow-lg shadow-brand-600/30 transition-all hover:-translate-y-0.5"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={18} className="animate-spin" /> Enviando…
                    </>
                  ) : (
                    'Suscribirme ahora'
                  )}
                </button>

                {errors.submit && (
                  <div className="flex items-start gap-2 rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
                    <AlertCircle size={18} className="shrink-0 mt-0.5" />
                    <span>{errors.submit}</span>
                  </div>
                )}

                <p className="text-xs text-center text-brand-900/50">
                  No compartiremos tu correo. Cero spam. Solo novedades de MimoPet.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  )
}

function RoleOption({ icon: Icon, value, label, checked, onChange }) {
  return (
    <label
      className={`relative flex items-start gap-3 rounded-xl border-2 p-4 cursor-pointer transition-all ${
        checked
          ? 'border-brand-500 bg-brand-50 shadow-sm'
          : 'border-brand-100 hover:border-brand-300 bg-white'
      }`}
    >
      <input
        type="radio"
        name="role"
        value={value}
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      <span
        className={`mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
          checked ? 'bg-brand-600 text-white' : 'bg-brand-100 text-brand-600'
        }`}
      >
        <Icon size={18} />
      </span>
      <span className="text-sm font-medium text-brand-900 leading-snug">
        {label}
      </span>
      <span
        className={`absolute top-3 right-3 h-4 w-4 rounded-full border-2 ${
          checked ? 'border-brand-600 bg-brand-600' : 'border-brand-300 bg-white'
        }`}
      >
        {checked && <span className="block h-1.5 w-1.5 rounded-full bg-white mx-auto mt-[3px]" />}
      </span>
    </label>
  )
}
