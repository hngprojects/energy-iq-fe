import { Footer } from "../components/layout/Footer"
import { Faq } from "../components/section/Faq"
import "./globals.css"

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center">
        <h1 className="text-display font-bold">EnergyIQ</h1>
      </div>
      <Faq></Faq>
      <Footer></Footer>
    </>
  )
}
