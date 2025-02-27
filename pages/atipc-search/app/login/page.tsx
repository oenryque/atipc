"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Login() {
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    })

    if (response.ok) {
      router.push("/search")
    } else {
      alert("Senha inválida")
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Digite a senha"
          className="p-2 border rounded bg-secondary-light dark:bg-secondary-dark text-primary-dark dark:text-primary-light"
        />
        <button
          type="submit"
          className="p-2 bg-accent-light dark:bg-accent-dark text-primary-light dark:text-primary-dark rounded w-full"
        >
          Entrar
        </button>
      </form>
    </main>
  )
}

