import {
  PawPrint,
  Sparkles,
  ShieldCheck,
  MapPin,
  Bell,
  Calendar,
  Heart,
  Star,
} from 'lucide-react'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
      <div className="absolute -top-32 -right-24 h-96 w-96 rounded-full bg-brand-300/40 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-warm-300/40 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-16 lg:pt-24 pb-20 lg:pb-32 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-100 text-brand-700 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
            <Sparkles size={14} /> Próximamente en Arequipa
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-900 leading-[1.05]">
            El cuidado que tu mascota{' '}
            <span className="relative inline-block">
              <span className="relative z-10">merece</span>
              <span className="absolute inset-x-0 bottom-1 h-3 bg-warm-300/70 -z-0 rounded" />
            </span>
            , con la confianza que <span className="text-brand-600">tú necesitas</span>.
          </h1>

          <p className="mt-6 text-lg lg:text-xl text-brand-900/70 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Únete a <strong className="text-brand-700">MimoPet</strong>, la primera
            plataforma digital en Arequipa que conecta a petlovers con cuidadores,
            paseadores y veterinarias 100% verificados.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#formulario"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 hover:bg-brand-700 text-white font-semibold px-7 py-4 shadow-xl shadow-brand-600/30 hover:shadow-brand-700/40 transition-all hover:-translate-y-0.5"
            >
              <PawPrint size={18} /> Únete a la lista de espera
            </a>
            <a
              href="#beneficios"
              className="inline-flex items-center justify-center rounded-full border-2 border-brand-200 hover:border-brand-400 text-brand-700 font-semibold px-7 py-4 transition-colors"
            >
              Conocer más
            </a>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
            {[
              { v: '100%', l: 'Verificados' },
              { v: '24/7', l: 'Soporte' },
              { v: '+50', l: 'Aliados' },
            ].map((s) => (
              <div key={s.l} className="text-center lg:text-left">
                <dt className="text-2xl lg:text-3xl font-extrabold text-brand-700">
                  {s.v}
                </dt>
                <dd className="text-xs uppercase tracking-wider text-brand-900/60 font-medium">
                  {s.l}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:col-span-6 relative h-[520px] sm:h-[600px] flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="h-80 w-80 lg:h-[26rem] lg:w-[26rem] rounded-full bg-gradient-to-br from-brand-400/30 via-brand-200/20 to-warm-300/30 blur-2xl" />
          </div>

          <div
            className="animate-float-delay absolute right-2 lg:right-4 top-6 w-56 sm:w-64 rounded-3xl bg-white shadow-2xl shadow-brand-900/20 border border-brand-100 p-5"
            style={{ transform: 'perspective(1200px) rotateY(-18deg) rotateX(8deg) rotateZ(4deg)' }}
          >
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-full bg-brand-100 flex items-center justify-center">
                <Heart className="text-brand-600" size={20} />
              </div>
              <div>
                <p className="text-xs text-brand-900/60">Próxima cita</p>
                <p className="font-semibold text-brand-900 text-sm">Luna · Vacuna anual</p>
              </div>
            </div>
            <div className="mt-4 rounded-2xl bg-brand-50 p-3 flex items-center gap-2 text-xs text-brand-800">
              <Calendar size={14} className="text-brand-600" />
              Jue · 10:30 am · Vet. Cayma
            </div>
            <div className="mt-3 flex items-center gap-1 text-warm-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={12} fill="currentColor" />
              ))}
              <span className="ml-1 text-[10px] text-brand-900/60 font-medium">
                Dra. Rojas
              </span>
            </div>
          </div>

          <div
            className="animate-float relative w-64 sm:w-72 rounded-[2.5rem] bg-gradient-to-br from-brand-600 to-brand-800 p-3 shadow-2xl shadow-brand-900/40 border-4 border-brand-900/20 z-10"
            style={{ transform: 'perspective(1400px) rotateY(-6deg) rotateX(4deg)' }}
          >
            <div className="rounded-[2rem] bg-white overflow-hidden h-[460px] sm:h-[500px] flex flex-col">
              <div className="bg-brand-600 text-white px-5 pt-5 pb-8 relative">
                <div className="flex items-center justify-between text-[10px] opacity-80">
                  <span>9:41</span>
                  <span>● ● ●</span>
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                    <PawPrint size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] opacity-80">Hola, Camila</p>
                    <p className="font-bold">¿Qué necesita Luna hoy?</p>
                  </div>
                </div>
              </div>

              <div className="-mt-5 mx-4 rounded-2xl bg-white shadow-lg p-3 grid grid-cols-3 gap-2 text-center border border-brand-100">
                {[
                  { i: PawPrint, l: 'Paseo' },
                  { i: ShieldCheck, l: 'Cuidador' },
                  { i: Heart, l: 'Vet' },
                ].map(({ i: Icon, l }) => (
                  <div key={l} className="flex flex-col items-center gap-1">
                    <div className="h-9 w-9 rounded-xl bg-brand-50 flex items-center justify-center">
                      <Icon size={16} className="text-brand-600" />
                    </div>
                    <span className="text-[10px] font-semibold text-brand-900">{l}</span>
                  </div>
                ))}
              </div>

              <div className="px-4 pt-4 flex-1 space-y-2">
                <p className="text-[11px] font-semibold text-brand-900/60 uppercase tracking-wider">
                  Cuidadores cerca
                </p>
                {[
                  {
                    n: 'Carla M.',
                    r: 4.9,
                    d: '0.8 km',
                    img:
                      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=128&q=80',
                  },
                  {
                    n: 'Diego R.',
                    r: 5.0,
                    d: '1.2 km',
                    img:
                      'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=128&q=80',
                  },
                ].map((p) => (
                  <div
                    key={p.n}
                    className="flex items-center gap-3 p-2.5 rounded-xl bg-brand-50/60"
                  >
                    <img
                      src={p.img}
                      alt={p.n}
                      className="h-9 w-9 rounded-full object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-brand-900">{p.n}</p>
                      <p className="text-[10px] text-brand-900/60 flex items-center gap-1">
                        <MapPin size={9} /> {p.d}
                      </p>
                    </div>
                    <div className="flex items-center gap-0.5 text-warm-500 text-[10px] font-semibold">
                      <Star size={10} fill="currentColor" /> {p.r}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className="animate-float absolute left-0 lg:-left-4 bottom-8 w-52 rounded-2xl bg-white shadow-2xl shadow-brand-900/20 border border-brand-100 p-4"
            style={{ transform: 'perspective(1200px) rotateY(14deg) rotateX(6deg) rotateZ(-3deg)' }}
          >
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-full bg-warm-400 flex items-center justify-center">
                <Bell className="text-white" size={16} />
              </div>
              <p className="text-xs font-semibold text-brand-900">Recordatorio</p>
            </div>
            <p className="mt-2 text-xs text-brand-900/70 leading-snug">
              Paseo de <strong>Toby</strong> en 30 min con Diego R.
            </p>
            <div className="mt-3 h-1.5 rounded-full bg-brand-100 overflow-hidden">
              <div className="h-full w-2/3 bg-brand-500 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
