export interface Expense {
    id: string,
    tanggal: string,
    keterangan: string,
    nominal: number,
    createdAt:string
}

export interface CourierDeposit {
    id: string,
    employeeId: string
    tanggal: string
    galonBesar: number,
    galonKecil: number,
    hargaBesar: number
    hargaKecil: number
}

export interface FinancialReport {
    tanggal: string,
    pemasukan: number,
    pengeluaran: number,
    labaBersih: number
}