import { Metadata } from 'next'

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'https://app-mine-cost-production.vercel.app'

export const metadata: Metadata = {
  title: 'Mining Calculator - Calculate Costs & Production',
  description:
    'Advanced mining calculator for cost analysis. Calculate drilling, blasting, hauling, backfill costs and optimize your mining production. Get instant results for your mining operations.',
  keywords: [
    'mining calculator',
    'cost calculator',
    'drilling calculator',
    'blasting calculator',
    'hauling calculator',
    'backfill calculator',
    'mining cost analysis',
    'production calculator',
  ],
  openGraph: {
    title: 'Mining Calculator - Calculate Costs & Production',
    description:
      'Advanced mining calculator for drilling, blasting, hauling and backfill cost analysis.',
    url: `${baseUrl}/calculadora`,
  },
  alternates: {
    canonical: `${baseUrl}/calculadora`,
  },
}

export default function CalculadoraLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
