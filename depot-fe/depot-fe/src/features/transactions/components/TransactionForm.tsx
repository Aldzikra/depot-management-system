"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardContent, CardFooter, CardTitle } from "@/components/ui/card"
import { CreateTransactionInput, TransactionsType, PaymentStatus } from "../types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function TransactionForm(){
    // State untuk menampung input form kasir
    const [formData, setFormData] = useState<CreateTransactionInput>({
        customerName: "",
        quantity: 1,
        totalAmount: 5000,
        type: "Diantar",
        status: "Sudah Bayar",
    });

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        console.log("Data Berhasil Disimpan", formData);
        alert(`Transaksi atas nama ${formData.customerName} Berhasil Disimpan`)
    }

    return (
        <Card className="w-full max-w-md mx-auto my-8">
            <CardHeader>
                <CardTitle className="text-xl font-bold text-center">
                    Kasir Galon - Input Transaksi
                </CardTitle>
            </CardHeader>

            <form onSubmit={handleSubmit}>
                <CardContent className="space-y-4">
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium">Nama Pelanggan</label>
                        <input
                            type="text"
                            placeholder="Masukkan Nama Pelanggan"
                            value={formData.customerName}
                            onChange={(e) =>
                                setFormData({...formData, customerName: e.target.value })
                            }
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium">Pilih Jenis Transaksi</label>
                        <Select
                            value={formData.type}
                            onValueChange={(val: TransactionsType) =>
                                setFormData({...formData, type: val })
                            }
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Pilih Jenis Transaksi" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Langsung">Langsung (Ambil Sendiri)</SelectItem>
                                <SelectItem value="Diantar">Diantar</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium">Jumlah Galon</label>
                        <input
                            type="numebr"
                            placeholder="Masukkan Jumlah Galon"
                            value={formData.quantity}
                            onChange={(e) => {
                                const qty = Number(e.target.value)
                                setFormData({
                                    ...formData,
                                    quantity: qty,
                                    totalAmount: qty * 5000
                                });
                            }
                                
                            }
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium">Status Pembayaran</label>
                        <Select
                        value={formData.status}
                        onValueChange={(val: PaymentStatus) =>
                            setFormData({ ...formData, status: val })
                        }
                        >
                        <SelectTrigger>
                            <SelectValue placeholder="Pilih status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="PAID">Lunas (PAID)</SelectItem>
                            <SelectItem value="UNPAID">Belum Bayar (UNPAID)</SelectItem>
                            <SelectItem value="PENDING">Pending (PENDING)</SelectItem>
                        </SelectContent>
                        </Select>
                    </div>

                    <div className="flex flex-col gap-2 ">
                        <label className="text-sm font-medium">Total Tagihan (Rp)</label>
                        <Input
                            type="number"
                            placeholder="Masukkan Nama Pelanggan"
                            value={formData.totalAmount}
                            onChange={(e) =>
                                setFormData({...formData, totalAmount: Number(e.target.value) })
                            }
                            required
                        />
                    </div>
                </CardContent>

                <CardFooter className="flex justify-between mx-4">
                    <Button type="button" variant="outline">Batal</Button>
                    <Button type="submit">Simpan</Button> 
                </CardFooter>
            </form>
        </Card>
    )
}
