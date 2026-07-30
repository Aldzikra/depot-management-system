import Link from "next/link";
import { Button } from "@/components/ui/button";
import TransactionForm from "@/features/transactions/components/TransactionForm"

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center p-6 bg-slate-50">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Depot Air - Kasir</h1>
        <Link href="/history">
          <Button variant="outline">Lihat Riwayat ➔</Button>
        </Link>
      </div>
      <TransactionForm />
    </main>
  )
} 