import FormsSection from "../src/Pages";
import Footer from "../src/components/ui/Footer";
import Hero from "../src/components/ui/Hero";
import Header from "../src/components/ui/Header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="relative z-10 bg-white">
        <Hero />
      </div>
      <div id="calculadora" className="relative z-10 flex items-center justify-center py-16 bg-white">
        <main className="flex w-5xl flex-col items-center justify-between sm:items-start">
          <FormsSection />
        </main>
      </div>
      <Footer />
    </>
  );
}
