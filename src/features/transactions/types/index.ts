export type PaymentStatus = "Sudah Bayar" | "Belum Bayar" | "Pending";
export type TransactionType = "Langsung" | "Diantar";

export interface Transaction {
  id: string;
  customerName?: string;
  jumlahGalonBesar: number;
  jumlahGalonKecil: number;
  totalGalon: number;
  pricePerUnitBesar: number;
  pricePerUnitKecil: number;
  biayaHantar: number;
  totalAmount: number;
  type: TransactionType;
  status: PaymentStatus;
  createdAt: string;
}

export type CreateTransactionInput = Omit<
  Transaction,
  "id" | "createdAt" | "totalGalon" | "totalAmount"
>;