import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

// Only use the 'latin' subset for Inter font since it might not fully support Arabic
const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "مندوب موبايلي - العرض القوي",
  description: "عروض موبايلي للجيل الخامس 5G بأسعار تنافسية",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
