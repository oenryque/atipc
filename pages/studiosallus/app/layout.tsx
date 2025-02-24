import type { Metadata } from 'next'
import './globals.css'
import siteData from '../data/siteData.json'
export const metadata: Metadata = {
  title: siteData.nome,
  description: siteData.descricao,
  generator: 'by Atipc - Soluções em Tecnologia',
  openGraph: {
    title: siteData.nome,
    description: siteData.descricao,
    images: [{
      url: siteData.logo, // Certifique-se que existe uma propriedade logo no siteData
      width: 1200,
      height: 630,
      alt: siteData.nome
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: siteData.nome,
    description: siteData.descricao,
    images: [siteData.logo], // Mesma imagem do OpenGraph
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
