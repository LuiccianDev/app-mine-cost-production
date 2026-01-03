import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mining Costs and Production | Mining Calculator',
  description:
    'Mining cost and production calculator for mining operations. Optimize your processes and maximize profitability.',
  keywords: [
    'mining',
    'production costs',
    'mining calculator',
    'optimization',
    'profitability',
    'mining operations',
  ],
  openGraph: {
    title: 'Mining Costs and Production | Mining Calculator',
    description: 'Mining cost and production calculator for mining operations.',
    images: [
      {
        url: '/SEO.png',
        width: 1200,
        height: 630,
        alt: 'Mining Costs and Production SEO Image',
      },
    ],
    type: 'website',
    locale: 'en_US',
    url: 'https://app-mine-cost-production.vercel.app', // Vercel URL
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mining Costs and Production | Mining Calculator',
    description: 'Mining cost and production calculator for mining operations.',
    images: ['/SEO.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scrollbar-hide overflow-y-scroll">
      <head>
        {/* SEO meta tags adicionales */}
        <meta name="author" content="Mining Costs and Production Team" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1a202c" />
        <link rel="canonical" href="https://app-mine-cost-production.vercel.app" />
        {/* Facebook Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://app-mine-cost-production.vercel.app" />
        <meta property="og:image" content="/SEO.png" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/SEO.png" />
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Mining Costs and Production',
              url: 'https://app-mine-cost-production.vercel.app',
              description: 'Mining cost and production calculator for mining operations.',
            }),
          }}
        />
        {/* Security headers */}
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://app-mine-cost-production.vercel.app; font-src 'self' data:;"
        />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      </head>
      <body className="flex min-h-screen flex-col overflow-x-hidden antialiased">{children}</body>
    </html>
  )
}
