import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BenefitsOwners from './components/BenefitsOwners'
import BenefitsProviders from './components/BenefitsProviders'
import SignupForm from './components/SignupForm'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <BenefitsOwners />
        <BenefitsProviders />
        <SignupForm />
      </main>
      <Footer />
    </div>
  )
}
