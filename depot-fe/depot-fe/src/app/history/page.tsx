import Link from "next/link";
import { Button } from "@/components/ui/button";


function HistoryPage(){
    return (
    <main className="p-8 max-w-4xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-slate-900">Riwayat Transaksi Galon</h1>
            <Link href="/">
                <Button variant="outline">Kembali Ke Kasir</Button> 
            </Link>
        </div>
    </main>
    );
}

export default HistoryPage;