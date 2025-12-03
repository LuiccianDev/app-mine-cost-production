import FormsSection from "../src/Pages";
import Footer from "../src/components/ui/Footer";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center">
        <main className="flex w-5xl flex-col items-center justify-between sm:items-start">
          <FormsSection />
        </main>
      </div>
      <Footer />
    </>
  );
}
