'use client'
import { useState } from 'react'

type FaqItem = {
  question: string
  answer: string
}

const faqData: FaqItem[] = [
  {
    question: 'What types of calculations can I perform?',
    answer:
      'The application includes 9 specialized calculators: Drilling Pattern Design, Drilling Cost, Blasting Cost, Loading, Transport, Cleaning, Cemented Backfill, Detritic Backfill, and Drill Rig Requirements.',
  },
  {
    question: 'How do I use the calculators?',
    answer:
      'Select the calculator you need from the dropdown menu, enter the required parameters in the form, and the results will be calculated automatically. You can export the results to PDF using the preview button.',
  },
  {
    question: 'Is my data saved?',
    answer:
      'Yes, all your calculations are automatically saved in your browser (localStorage). The data remains available even if you close the page, and you can access it at any time.',
  },
  {
    question: 'Can I export the results?',
    answer:
      "Yes, you can generate a PDF with all your calculation results. Click 'Preview and Export PDF' to view and download a complete report with all parameters and results.",
  },
  {
    question: 'Are the calculations accurate?',
    answer:
      'The calculations are based on standard mining engineering formulas. However, we always recommend validating the results with a specialized engineer for critical applications.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'All data is stored locally in your browser. We do not send or store information on external servers, ensuring the privacy of your calculations.',
  },
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="flex min-h-screen items-center py-16">
      <div className="container mx-auto w-full px-8">
        <div className="grid items-start gap-20 md:grid-cols-2">
          <div className="item-center flex justify-center">
            <h2 className="text-9xl">FAQ.</h2>
          </div>

          <div className="max-w-2xl space-y-1">
            {faqData.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 text-xl">
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between py-4 text-left transition-opacity hover:opacity-70"
                >
                  <span className="pr-4 text-2xl text-gray-900">{faq.question}</span>
                  <span className="shrink-0 text-2xl text-gray-400">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="pb-4 text-xl leading-relaxed text-gray-600">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
