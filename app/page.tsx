import "./fikry_style.css";
import RowRiwayat from "./components/rowRiwayat";
import Hero from "./components/hero";
import RiwayatPendidikan from "./components/riwayatPendidikan";
import "./components/riwayatPekerjaan";
import RowRiwayatPekerjaan from "./components/riwayatPekerjaan";
import FavColor from "./components/favColor";
import Form from "./components/Form";
export default function Gallery() {
  return (
    <section>
      <Hero />
     <RiwayatPendidikan/>
    <RowRiwayatPekerjaan/>
     <FavColor/>
      <Form/>
    </section>
  );
} 
