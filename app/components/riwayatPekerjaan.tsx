import RowRiwayat from "./rowRiwayat";
export default function RowRiwayatPekerjaan() {
  return (
    <div className="container mx-auto p-2 text-center">
        <div className="container mx-auto p-2 text-center pt-20">
        <h2 className="text -2x1">Riwayat Pekerjaan</h2>
      </div>
      <RowRiwayat year="2010" perusahaan="Toko" position="Kasir"/>
      <RowRiwayat year="2015" perusahaan="Pasar" position="Tukang cuci piring"/>
      <RowRiwayat year="2020" perusahaan="ART" position="dimarahin mamah"/>
      </div>
  );
}