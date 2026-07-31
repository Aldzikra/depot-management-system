export interface Payroll {
    id: string,
    employeeId: string,
    bulanTahun: number,
    gajiPokok: number,
    totalHadir: number,
    potongan: number,
    gajiBersih: number,
    tanggalDiBayar: string
}

export type ProccesPayrollInput = Omit<Payroll, "id" | "gajiBersih" | "potongan">;