import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Bem-vindo ao Buscador de Lugares</h1>
      <Link href="/login" className="text-accent-light dark:text-accent-dark hover:underline">
        Entrar para continuar
      </Link>
    </main>
  )
}

