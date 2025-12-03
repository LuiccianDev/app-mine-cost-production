"use client";
import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

const faqData: FaqItem[] = [
  {
    question: "What types of calculations can I perform?",
    answer: "The application includes 9 specialized calculators: Drilling Pattern Design, Drilling Cost, Blasting Cost, Loading, Transport, Cleaning, Cemented Backfill, Detritic Backfill, and Drill Rig Requirements."
  },
  {
    question: "How do I use the calculators?",
    answer: "Select the calculator you need from the dropdown menu, enter the required parameters in the form, and the results will be calculated automatically. You can export the results to PDF using the preview button."
  },
  {
    question: "Is my data saved?",
    answer: "Yes, all your calculations are automatically saved in your browser (localStorage). The data remains available even if you close the page, and you can access it at any time."
  },
  {
    question: "Can I export the results?",
    answer: "Yes, you can generate a PDF with all your calculation results. Click 'Preview and Export PDF' to view and download a complete report with all parameters and results."
  },
  {
    question: "Are the calculations accurate?",
    answer: "The calculations are based on standard mining engineering formulas. However, we always recommend validating the results with a specialized engineer for critical applications."
  },
  {
    question: "Is my data secure?",
    answer: "All data is stored locally in your browser. We do not send or store information on external servers, ensuring the privacy of your calculations."
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
                  <span className="text-xl text-gray-400 shrink-0">
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
