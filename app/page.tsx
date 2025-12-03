import CalculatorLayout from "@/src/components/CalculatorLayout";
import Footer from "@/src/components/ui/Footer";
import Hero from "@/src/components/ui/Hero";
import Header from "@/src/components/ui/Header";
import About from "@/src/components/ui/About";
import Products from "@/src/components/ui/Feature";
import Faq from "@/src/components/ui/Faq";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Products />
      <main id="calculadora" className="flex min-h-screen items-center justify-center bg-white py-16">
        <div className="w-full max-w-5xl px-4">
          <CalculatorLayout />
        </div>
      </main>
      <About />
      <Faq />
      <Footer />
    </>
  );
}
