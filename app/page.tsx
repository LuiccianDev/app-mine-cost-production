import Footer from '@/src/components/ui/Footer'
import Hero from '@/src/components/ui/Hero'
import Header from '@/src/components/ui/Header'
import About from '@/src/components/ui/About'
import Products from '@/src/components/ui/Feature'
import Faq from '@/src/components/ui/Faq'
import BackToTop from '@/src/components/ui/BackToTop'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Products />
      <About />
      <Faq />
      <Footer />
      <BackToTop />
    </>
  )
}
