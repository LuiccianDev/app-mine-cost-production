"use client";
import { useState } from "react";
import Pagination from "./components/ui/Pagination";
import Malla from "./sections/MallaPage";
import CostoPerforacion from "./sections/CostoPerforacionPage";
import CostoVoladura from "./sections/CostoVoladuraPage";
import RequerimientoPerforadora from "./sections/RequerimientoPerforadoraPage";
import Carguio from "./sections/CarguioPage";
import Limpieza from "./sections/LimpiezaPage";


const forms = [
  <Malla key="MallaForm" />,
  <CostoPerforacion key="CostoPerforacion" />,
  <CostoVoladura key="CostoVoladura" />,
  <RequerimientoPerforadora key='RequerimientoPerforadora' />,
  <Carguio key='Carguio' />,
  <Limpieza key='Limpieza' />

];

export default function FormsSection() {
  const [page, setPage] = useState(1);

  return (
    <section className="w-full min-h-screen flex flex-col items-center">
      <h2 className="text-4xl font-bold mt-8">Formularios</h2>
      <div className="w-full mt-6 relative flex flex-col items-center">
        <Pagination total={forms.length} current={page} onChange={setPage} />
        {forms[page - 1]}
      </div>
    </section>
  );
}
