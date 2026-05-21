import { TrendingUp, Wallet, BadgeCheck, ArrowRight } from 'lucide-react'

const benefits = [
  {
    icon: TrendingUp,
    title: 'Mayor visibilidad',
    desc: 'Llega a cientos de petlovers en Arequipa que están buscando profesionales de confianza para sus mascotas.',
  },
  {
    icon: Wallet,
    title: 'Ingresos estables',
    desc: 'Profesionaliza tus servicios con agenda digital, pagos automatizados y demanda recurrente todo el mes.',
  },
  {
    icon: BadgeCheck,
    title: 'Reputación digital',
    desc: 'Sistema de validación y reseñas auténticas que potencia tu marca personal y atrae nuevos clientes.',
  },
]

export default function BenefitsProviders() {
  return (
    <section id="proveedores" className="relative py-24 lg:py-32 bg-brand-900 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-brand-500/20 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-warm-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <span className="inline-block rounded-full bg-warm-500/15 text-warm-300 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider border border-warm-500/20">
              Para proveedores
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Haz crecer tu negocio con la red de mascotas más activa de Arequipa
            </h2>
            <p className="mt-6 text-lg text-brand-100/80 leading-relaxed">
              Si eres veterinario, cuidador o paseador, MimoPet te conecta con
              clientes calificados, te ayuda a organizar tu agenda y proyecta tu
              marca profesional.
            </p>
            <a
              href="#formulario"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-warm-500 hover:bg-warm-600 text-white font-semibold px-6 py-3.5 shadow-lg shadow-warm-600/30 transition-all hover:-translate-y-0.5"
            >
              Quiero ofrecer mis servicios <ArrowRight size={18} />
            </a>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {benefits.map(({ icon: Icon, title, desc }, i) => (
              <article
                key={title}
                className={`rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 p-7 hover:bg-white/10 hover:border-warm-400/40 transition-all ${
                  i === 0 ? 'sm:translate-y-6' : ''
                } ${i === 2 ? 'sm:col-span-2 sm:max-w-md sm:mx-auto' : ''}`}
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-warm-500/20 text-warm-300 ring-1 ring-warm-500/30">
                  <Icon size={22} strokeWidth={2.2} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-white">{title}</h3>
                <p className="mt-2 text-sm text-brand-100/70 leading-relaxed">
                  {desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
