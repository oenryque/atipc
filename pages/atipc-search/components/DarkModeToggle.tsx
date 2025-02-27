"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"

export default function DarkModeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <button
      className="p-2 rounded-full bg-secondary-light dark:bg-secondary-dark"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Alternar modo escuro"
    >
      {theme === "dark" ? <Sun className="h-5 w-5 text-accent-dark" /> : <Moon className="h-5 w-5 text-accent-light" />}
    </button>
  )
}

