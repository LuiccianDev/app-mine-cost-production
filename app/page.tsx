import FormsSection from "../src/Pages";
import Footer from "../src/components/ui/Footer";
import Hero from "../src/components/ui/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <div id="calculadora" className="flex items-center justify-center py-16 bg-white">
        <main className="flex w-5xl flex-col items-center justify-between sm:items-start">
          <FormsSection />
        </main>
      </div>
      <Footer />
    </>
  );
}
