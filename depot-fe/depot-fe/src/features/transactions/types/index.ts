export type PaymentStatus = "Sudah Bayar" | "Belum Bayar" | "Pending" ;
export type  TransactionsType = "Langsung" | "Diantar" ;

export interface Transaction {
    id: string;
    customerName: string;
    quantity: number;
    pricePerUnit: number;
    totalAmount: number;
    type: TransactionsType;
    status: PaymentStatus;
    createdAt: string;
}

export type CreateTransactionInput = Omit<Transaction, "id" | "pricePerUnit" | "createdAt">;