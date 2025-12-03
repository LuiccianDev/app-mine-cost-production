import CalculatorLayout from "@/src/components/CalculatorLayout";

export default function CalculadoraPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white py-16">
      <div className="w-full max-w-5xl px-4">
        <CalculatorLayout />
      </div>
    </main>
  );
}
