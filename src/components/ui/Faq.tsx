"use client";
import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

const faqData: FaqItem[] = [
  {
    question: "¿Qué tipos de cálculos puedo realizar?",
    answer: "La aplicación incluye 9 calculadoras especializadas: Diseño de Malla de Perforación, Costo de Perforación, Costo de Voladura, Carguío, Transporte, Limpieza, Relleno Cementado, Relleno Detrítico y Requerimiento de Perforadora."
  },
  {
    question: "¿Cómo uso las calculadoras?",
    answer: "Selecciona la calculadora que necesitas desde el menú desplegable, ingresa los parámetros requeridos en el formulario y los resultados se calcularán automáticamente. Puedes exportar los resultados a PDF usando el botón de vista previa."
  },
  {
    question: "¿Se guardan mis datos?",
    answer: "Sí, todos tus cálculos se guardan automáticamente en tu navegador (localStorage). Los datos permanecen disponibles incluso si cierras la página, y puedes acceder a ellos en cualquier momento."
  },
  {
    question: "¿Puedo exportar los resultados?",
    answer: "Sí, puedes generar un PDF con todos los resultados de tus cálculos. Haz clic en 'Vista Previa y Exportar PDF' para ver y descargar un reporte completo con todos los parámetros y resultados."
  },
  {
    question: "¿Los cálculos son precisos?",
    answer: "Los cálculos están basados en fórmulas estándar de ingeniería de minas. Sin embargo, siempre recomendamos validar los resultados con un ingeniero especializado para aplicaciones críticas."
  },
  {
    question: "¿Los datos están seguros?",
    answer: "Todos los datos se almacenan localmente en tu navegador. No enviamos ni almacenamos información en servidores externos, garantizando la privacidad de tus cálculos."
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="min-h-screen flex items-center py-16">
      <div className="container mx-auto px-8 w-full">
        <div className="grid md:grid-cols-2 gap-20 items-start">
          <div className="flex justify-center item-center">
            <h2 className="text-9xl font-light">FAQ.</h2>
          </div>

          <div className="space-y-1 max-w-2xl">
            {faqData.map((faq, index) => (
              <div key={index} className="border-b border-gray-200">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full py-4 text-left flex justify-between items-center hover:opacity-70 transition-opacity"
                >
                  <span className="text-base text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <span className="text-xl text-gray-400 flex-shrink-0">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="pb-4 text-sm text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
