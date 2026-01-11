import type { Metadata, Viewport } from 'next'
import './globals.css'

// URL dinámica que funciona en Vercel automáticamente
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'https://app-mine-cost-production.vercel.app'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Mining Costs & Production | Professional Mining Calculator',
    template: '%s | Mining Costs & Production',
  },
  description:
    'Professional mining cost calculator and production optimizer. Calculate drilling costs, blasting, hauling, backfill, and more. Optimize your mining operations and maximize profitability with precise calculations.',
  keywords: [
    'mining calculator',
    'mining cost calculator',
    'production costs mining',
    'drilling cost calculator',
    'blasting cost calculator',
    'hauling cost mining',
    'backfill cost calculator',
    'mine production optimization',
    'mining operations',
    'cost per ton mining',
    'underground mining costs',
    'surface mining calculator',
    'mine planning',
    'mining productivity',
    'mining profitability',
    'mining efficiency',
  ],
  authors: [{ name: 'LuiccianDev', url: 'https://github.com/luicciandev' }],
  creator: 'LuiccianDev',
  publisher: 'Mining Costs & Production',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['es_ES', 'pt_BR'],
    url: siteUrl,
    siteName: 'Mining Costs & Production',
    title: 'Mining Costs & Production | Professional Mining Calculator',
    description:
      'Professional mining cost calculator and production optimizer. Calculate drilling, blasting, hauling, backfill costs and optimize your mining operations.',
    images: [
      {
        url: '/img/SEO.png',
        width: 1200,
        height: 630,
        alt: 'Mining Costs and Production Calculator - Optimize your mining operations',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mining Costs & Production | Professional Mining Calculator',
    description:
      'Professional mining cost calculator. Calculate drilling, blasting, hauling, and backfill costs for your mining operations.',
    images: ['/img/SEO.png'],
    creator: '@luicciandev',
    site: '@luicciandev',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      'en-US': siteUrl,
      'es-ES': `${siteUrl}/es`,
      'pt-BR': `${siteUrl}/pt`,
    },
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
  },
  category: 'technology',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Mining Costs & Production Calculator',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web Browser',
  url: siteUrl,
  description:
    'Professional mining cost calculator and production optimizer for drilling, blasting, hauling, and backfill operations',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  author: {
    '@type': 'Person',
    name: 'LuiccianDev',
    url: 'https://github.com/luicciandev',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Mining Costs & Production',
    url: siteUrl,
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    ratingCount: '127',
  },
  featureList: [
    'Drilling cost calculation',
    'Blasting cost analysis',
    'Hauling and transport costs',
    'Backfill cost estimation',
    'Production optimization',
    'Real-time calculations',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scrollbar-hide overflow-y-scroll">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-screen flex-col overflow-x-hidden antialiased">{children}</body>
    </html>
  )
}
