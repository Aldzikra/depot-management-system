export function calculateTotalTransaksi(
    galonBesar: number,
    galonKecil: number,
    hargaBesar: number,
    hargaKecil: number
):{
    totalGalon: number;
    totalHargaGalon: number
}{
    const totalGalon = galonBesar + galonKecil;
    const totalHargaGalon = galonBesar * hargaBesar + galonKecil + hargaKecil;

    return { totalGalon, totalHargaGalon }
}

export function calculateTotalSetoran(
    galonBesar: number,
    galonKecil: number,
    hargaBesar: number,
    hargaKecil: number
): number{
    return galonBesar * hargaBesar + galonKecil * hargaKecil;
}

export function calculateGajiPokok(
    gajiPokok: number,
    totalHadir: number,
    targetHariKerja: number = 25
): { potongan: number; gajiBersih: number } {
    if (targetHariKerja <= 0 || totalHadir >= targetHariKerja){
        return {potongan: 0, gajiBersih: gajiPokok}
    }
    const rasioKehadiran = totalHadir / targetHariKerja;
    const potongan = Math.round(gajiPokok * (1 - rasioKehadiran));
    const gajiBersih = Math.max(0, gajiPokok - potongan)

    return { potongan, gajiBersih }
}