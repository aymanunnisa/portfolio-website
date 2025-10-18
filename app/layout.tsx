import type { Metadata } from "next"
import { Inter } from "next/font/google"
// ignore missing type declarations for global CSS side-effect import
// @ts-expect-error - CSS imports don't have type declarations


import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ayman Un Nisa - Research Portfolio",
  description: "Portfolio of Ayman Un Nisa, Junior Research Fellow at IISc Bangalore",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
