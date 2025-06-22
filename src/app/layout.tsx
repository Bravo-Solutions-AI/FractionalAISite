import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Fractional AI Partners',
  description: 'We embed senior AI experts into your team to deliver production-ready AI solutions in weeks, not months - without the overhead of full-time hires.',
  keywords: 'AI consulting, fractional AI, machine learning, AI implementation, AI strategy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}