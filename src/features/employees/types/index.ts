export interface Employee {
    id: string,
    nama: string,
    noHp: string,
    gajiPokok: number,
    status: 'Aktif' | 'Non-Aktif'
    createdAt: string
}

export interface Attendance {
    id: string,
    employeeId: string,
    tanggal: string,
    jamMasuk: string
}

export type CreateEmployeeInput = Omit<Employee, 'id' | 'createdAt'>;