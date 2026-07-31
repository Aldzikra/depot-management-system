import Link from "next/link";
import { Button } from "@/components/ui/button";
import TransactionPage from "@/app/transaction/page"

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center p-6 bg-slate-50">
      <TransactionPage />
    </main>
  )
} 