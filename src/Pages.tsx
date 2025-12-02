"use client";
import { useState } from "react";
import Pagination from "./components/ui/Pagination";
import MallaForm from "./sections/MallaPage";
import CostoPerforacionForm from "./sections/CostoPerforacionPage";
import CostoVoladuraForm from "./sections/CostoVoladuraPage";
import RequerimientoPerforadoraForm from "./sections/RequerimientoPerforadoraPage";


const forms = [
  <MallaForm key="MallaForm" />,
  <CostoPerforacionForm key="CostoPerforacionForm" />,
  <CostoVoladuraForm key="CostoVoladuraForm" />,
  <RequerimientoPerforadoraForm key='RequerimientoPerforadoraForm ' />

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
