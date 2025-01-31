import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kiyocomics - Watch Anime and Read Manga Online",
  description: "Watch the latest anime and latest manga online in HD quality",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="flex-grow">{children}</main>
          <footer className="py-4 text-center text-sm text-muted-foreground">
            © 2024 Kiyocomics. All rights reserved.
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}

