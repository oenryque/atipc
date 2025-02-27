"use client"

import type React from "react"

import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "next-themes"
import DarkModeToggle from "@/components/DarkModeToggle"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-primary-light dark:bg-primary-dark text-primary-dark dark:text-primary-light`}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="min-h-screen flex flex-col">
            <main className="flex-grow">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
