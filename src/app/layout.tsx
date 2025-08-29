import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kinesióloga Pamela Prieto',
  description: 'Especialista en rehabilitación física y terapia manual. Tratamientos personalizados y basados en evidencia científica en Puerto Montt, Los Lagos.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%2314b8a6' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='22,12 18,12 15,21 9,3 6,12 2,12'/></svg>" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}