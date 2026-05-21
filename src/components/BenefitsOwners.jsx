import { ShieldCheck, LayoutGrid, BellRing } from 'lucide-react'

const benefits = [
  {
    icon: ShieldCheck,
    title: 'Seguridad garantizada',
    desc: 'Cuidadores con un riguroso filtro de verificación de identidad, antecedentes y experiencia comprobada.',
    accent: 'from-brand-500 to-brand-700',
  },
  {
    icon: LayoutGrid,
    title: 'Todo en un solo lugar',
    desc: 'Paseo, guardería y veterinaria en una sola app. Encuentra el servicio ideal sin salir de MimoPet.',
    accent: 'from-brand-400 to-brand-600',
  },
  {
    icon: BellRing,
    title: 'Gestión inteligente',
    desc: 'Recordatorios automáticos de vacunas, paseos y citas. Mantén la salud de tu mascota al día sin esfuerzo.',
    accent: 'from-warm-400 to-warm-600',
  },
]

export default function BenefitsOwners() {
  return (
    <section id="beneficios" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block rounded-full bg-brand-100 text-brand-700 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
            Para petlovers
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-900 tracking-tight">
            Tranquilidad en cada paso de la rutina de tu mascota
          </h2>
          <p className="mt-4 text-lg text-brand-900/70">
            Diseñamos cada función para que solo te preocupes por lo importante:
            disfrutar el tiempo con tu mejor amigo.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map(({ icon: Icon, title, desc, accent }) => (
            <article
              key={title}
              className="group relative rounded-3xl bg-white p-8 border border-brand-100 hover:border-brand-300 hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-2xl hover:shadow-brand-500/15"
            >
              <div
                className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${accent} text-white shadow-lg`}
              >
                <Icon size={26} strokeWidth={2.2} />
              </div>
              <h3 className="mt-6 text-xl font-bold text-brand-900">{title}</h3>
              <p className="mt-3 text-brand-900/70 leading-relaxed">{desc}</p>

              <div className="absolute inset-x-8 bottom-0 h-1 rounded-t-full bg-gradient-to-r from-transparent via-brand-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
