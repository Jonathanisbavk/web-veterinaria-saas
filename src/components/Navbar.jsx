import { PawPrint, Menu } from 'lucide-react'
import { useState } from 'react'

const links = [
  { href: '#beneficios', label: 'Para dueños' },
  { href: '#proveedores', label: 'Para proveedores' },
  { href: '#formulario', label: 'Lista de espera' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 backdrop-blur-lg bg-white/75 border-b border-brand-100/70">
      <nav className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-bold text-brand-700 text-lg">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500 text-white shadow-md shadow-brand-500/30">
            <PawPrint size={18} strokeWidth={2.5} />
          </span>
          MimoPet
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-brand-900/80">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-brand-600 transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#formulario"
          className="hidden md:inline-flex items-center rounded-full bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-5 py-2.5 shadow-md shadow-brand-600/30 transition"
        >
          Únete ahora
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-brand-200 text-brand-700"
          aria-label="Abrir menú"
        >
          <Menu size={20} />
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-brand-100 bg-white px-6 py-4 space-y-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-brand-900/80 font-medium"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#formulario"
            onClick={() => setOpen(false)}
            className="block text-center rounded-full bg-brand-600 text-white font-semibold py-2.5"
          >
            Únete ahora
          </a>
        </div>
      )}
    </header>
  )
}
