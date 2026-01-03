import CalculatorLayout from '@/src/components/CalculatorLayout'
import BackToTop from '@/src/components/ui/BackToTop'
import Header from '@/src/components/ui/Header'
import Footer from '@/src/components/ui/Footer'

export default function CalculadoraPage() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen items-center justify-center pb-20">
        <div className="w-full max-w-6xl px-4">
          <CalculatorLayout />
        </div>
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
