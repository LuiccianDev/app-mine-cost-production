import CalculatorLayout from "@/src/components/CalculatorLayout";
import Footer from "@/src/components/ui/Footer";
import Hero from "@/src/components/ui/Hero";
import Header from "@/src/components/ui/Header";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <main id="calculadora" className="flex min-h-screen items-center justify-center bg-white py-16">
        <div className="w-full max-w-5xl px-4">
          <CalculatorLayout />
        </div>
      </main>
      <Footer />
    </>
  );
}
