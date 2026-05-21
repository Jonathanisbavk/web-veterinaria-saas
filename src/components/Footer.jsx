import { PawPrint, Camera, MessageCircle, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-brand-100/80 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 text-white font-bold text-lg">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500">
            <PawPrint size={18} strokeWidth={2.5} />
          </span>
          MimoPet
        </div>

        <p className="text-sm text-center">
          © {new Date().getFullYear()} MimoPet · Hecho con cariño en Arequipa, Perú.
        </p>

        <div className="flex items-center gap-3">
          <SocialLink icon={Camera} label="Instagram" />
          <SocialLink icon={MessageCircle} label="Facebook" />
          <SocialLink icon={Mail} label="Correo" />
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ icon: Icon, label }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 hover:bg-brand-500 text-white transition-colors"
    >
      <Icon size={18} />
    </a>
  )
}
