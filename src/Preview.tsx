a"use client";
import { jsPDF } from "jspdf";

export type PreviewData = {
  projectCode?: string;
  // Malla de Perforación
  burden?: number;
  espaciamiento?: number;
  volumenRotaTaladro?: number;
  tonelaje?: number;
  librasAnfo?: number;
  alturaCarga?: number;
  
  // Perforación
  costoPerforacionMetro?: number;
  costoPerforacionTon?: number;
  numeroPerforadoras?: number;
  metrosPerforado?: number;
  
  // Voladura
  costoVoladura?: number;
  
  // Limpieza
  requerimientoScoops?: number;
  costoLimpieza?: number;
  
  // Carguio
  requerimientoScoop?: number;
  costoCarguio?: number;
  
  // Transporte
  flotaCamiones?: number;
  produccionFlotaCamiones?: number;
  costoTransporte?: number;
  
  // Relleno Cementado
  costoTransporteRC?: number;
  costoMaterialRelleno?: number;
  costoTotalRelleno35?: number;
  costoTotalRelleno30?: number;
  
  // Relleno Detrítico
  costoTransporteRD?: number;
  costoMaterialRellenoRD?: number;
  costoTotalRellenoRD?: number;
  
  // Costos Finales
  costoMinadoProyectado?: number;
  costoMinado?: number;
};

type PreviewProps = {
  data?: PreviewData;
  onBack?: () => void;
};

export default function Preview({ data = {}, onBack }: PreviewProps) {
  const generatePDF = () => {
    const doc = new jsPDF();
    let yPos = 20;
    const lineHeight = 7;
    const pageWidth = doc.internal.pageSize.getWidth();

    // Header
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text("PRODUCCION Y COSTOS", 20, yPos);
    doc.text(projectCode, pageWidth - 40, yPos, { align: "right" });
    yPos += 10;
    doc.setLineWidth(0.5);
    doc.line(20, yPos, pageWidth - 20, yPos);
    yPos += 10;

    // Helper function to add section
    const addSection = (title: string, rows: Array<{ label: string; value: number | string | undefined; unit: string }>) => {
      doc.setFontSize(12);
      doc.setFont("helvetica", "bold");
      doc.setFillColor(220, 220, 220);
      doc.rect(20, yPos, pageWidth - 40, 7, "F");
      doc.text(title, 22, yPos + 5);
      yPos += 10;

      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");
      
      rows.forEach(row => {
        if (yPos > 270) {
          doc.addPage();
          yPos = 20;
        }
        
        const displayValue = typeof row.value === 'number' ? row.value.toFixed(2) : (row.value || '');
        doc.text(row.label, 22, yPos);
        doc.text("=", 120, yPos);
        doc.text(displayValue, 130, yPos);
        doc.text(row.unit, 150, yPos);
        yPos += lineHeight;
      });
      
      yPos += 5;
    };

    // Malla de Perforación
    addSection("MALLA DE PERFORACION", [
      { label: "Burden", value: burden, unit: "m" },
      { label: "Espaciamiento", value: espaciamiento, unit: "m" },
      { label: "Volumen ( Rotura x Taladro )", value: volumenRotaTaladro, unit: "m3" },
      { label: "Tonelaje", value: tonelaje, unit: "Ton/Tal" },
      { label: "Libras de anfo", value: librasAnfo, unit: "lib anfo/Talad" },
      { label: "Altura de carga", value: alturaCarga, unit: "m" },
    ]);

    // Perforación
    addSection("PERFORACION", [
      { label: "COSTO PERFORACION ( US$ / m )", value: costoPerforacionMetro, unit: "US$ / m" },
      { label: "COSTO PERFORACION ( US$ / Ton )", value: costoPerforacionTon, unit: "US$ / Ton" },
      { label: "Nº PERFORADORA", value: numeroPerforadoras, unit: "Perforadoras" },
      { label: "METROS PERFORADO (m/dia)", value: metrosPerforado, unit: "m / dia" },
    ]);

    // Voladura
    addSection("VOLADURA", [
      { label: "COSTO DE VOLADURA ( US$ / Ton )", value: costoVoladura, unit: "US$/Ton" },
    ]);

    // Limpieza
    addSection("LIMPIEZA", [
      { label: "REQUERIMIENTO DE SCOOPS", value: requerimientoScoops, unit: "Scoop" },
      { label: "COSTO DE LIMPIEZA ( US$ / Ton )", value: costoLimpieza, unit: "US$/Ton" },
    ]);

    // Carguio
    addSection("CARGUIO", [
      { label: "REQUERIMIENTO DE SCOOP", value: requerimientoScoop, unit: "Scoop" },
      { label: "COSTO DE CARGUIO ( US$ / Ton )", value: costoCarguio, unit: "US$/Ton" },
    ]);

    // Transporte
    addSection("TRANSPORTE", [
      { label: "FLOTA DE CAMIONES", value: flotaCamiones, unit: "Camiones en Operacion" },
      { label: "PRODUCCION DE FLOTA DE CAMIONES", value: produccionFlotaCamiones, unit: "Ton / Hr" },
      { label: "COSTO DE TRANSPORTE ( US$ / Ton )", value: costoTransporte, unit: "US$ / Ton" },
    ]);

    // Relleno Cementado
    addSection("RELLENO CEMENTADO", [
      { label: "COSTO DE TRANSPORTE ( US$ / Ton )", value: costoTransporteRC, unit: "US$/Ton" },
      { label: "COSTO MATERIAL RELLENO ( US$/Ton )", value: costoMaterialRelleno, unit: "US$/Ton" },
      { label: "COSTO TOTAL RELLENO 3.5% ( US$ / Ton )", value: costoTotalRelleno35, unit: "US$/Ton" },
      { label: "COSTO TOTAL RELLENO 3.0% ( US$ / Ton )", value: costoTotalRelleno30, unit: "US$/Ton" },
    ]);

    // Relleno Detrítico
    if (costoTransporteRD || costoMaterialRellenoRD || costoTotalRellenoRD) {
      addSection("RELLENO DETRITICO", [
        { label: "COSTO DE TRANSPORTE ( US$ / Ton )", value: costoTransporteRD, unit: "US$/Ton" },
        { label: "COSTO MATERIAL RELLENO ( US$/Ton )", value: costoMaterialRellenoRD, unit: "US$/Ton" },
        { label: "COSTO TOTAL RELLENO ( US$ / Ton )", value: costoTotalRellenoRD, unit: "US$/Ton" },
      ]);
    }

    // Costos Finales
    yPos += 5;
    doc.setFontSize(11);
    doc.setFont("helvetica", "bold");
    doc.setFillColor(144, 238, 144);
    doc.rect(20, yPos, pageWidth - 40, 7, "F");
    doc.text("COSTO MINADO PROYECTADO ( US$ / Ton )", 22, yPos + 5);
    doc.text(`${costoMinadoProyectado.toFixed(2)} US$ / Ton`, 150, yPos + 5);
    yPos += 10;

    doc.setFillColor(255, 255, 153);
    doc.rect(20, yPos, pageWidth - 40, 7, "F");
    doc.text("COSTO MINADO ( US$ / Ton )", 22, yPos + 5);
    doc.text(`${costoMinado.toFixed(2)} US$ / Ton`, 150, yPos + 5);

    // Save PDF
    doc.save(`Costos_Produccion_${projectCode}_${new Date().toISOString().split('T')[0]}.pdf`);
  };

  const {
    projectCode = "EXP01",
    burden = 1.62,
    espaciamiento = 2.03,
    volumenRotaTaladro = 32.65,
    tonelaje = 122.45,
    librasAnfo = 48.98,
    alturaCarga = 8.77,
    costoPerforacionMetro = 1.59,
    costoPerforacionTon = 0.13,
    numeroPerforadoras = 1.09,
    metrosPerforado = 117.44,
    costoVoladura = 0.16,
    requerimientoScoops = 1.95,
    costoLimpieza = 1.61,
    requerimientoScoop = 0.77,
    costoCarguio = 0.63,
    flotaCamiones = 4.13,
    produccionFlotaCamiones = 178.05,
    costoTransporte = 1.39,
    costoTransporteRC = 3.63,
    costoMaterialRelleno = 4.69,
    costoTotalRelleno35 = 8.33,
    costoTotalRelleno30 = 8.00,
    costoTransporteRD = 2.20,
    costoMaterialRellenoRD =0.50,
    costoTotalRellenoRD = 2.70,
    costoMinadoProyectado = 11.82,
    costoMinado = 12.25,
  } = data;

  return (
    <div className="w-full">
      {/* Header con botones */}
      <div className=" p-6 mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Reporte Preview</h1>
        <div className="flex items-center gap-3">
          {onBack && (
            <button
              onClick={onBack}
              className=" hover:bg-gray-50 text-gray-700 font-medium py-2.5 px-5 rounded-lg transition-colors border border-gray-300 shadow-sm inline-flex items-center gap-2"
            >
              Back to Edit
            </button>
          )}
          <button
            onClick={generatePDF}
            className="bg-gray-900 hover:bg-gray-800 text-white font-medium py-2.5 px-5 rounded-lg transition-all flex items-center gap-2 shadow-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
            Download PDF
          </button>
        </div>
      </div>

      {/* Contenido del reporte */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-10">
        {/* Header del reporte */}
        <div className="border-b-2 border-gray-800 pb-4 mb-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold">PRODUCCION Y COSTOS</h2>
          <div className="text-xl font-semibold">{projectCode}</div>
        </div>

      {/* Malla de Perforación */}
      <section className="mb-8">
        <h2 className="text-xs font-bold bg-gray-100 px-4 py-2.5 mb-0 uppercase tracking-wider text-gray-700">MALLA DE PERFORACION</h2>
        <table className="w-full border-collapse bg-white">
          <tbody>
            <ReportRow label="Burden" value={burden} unit="m" />
            <ReportRow label="Espaciamiento" value={espaciamiento} unit="m" />
            <ReportRow label="Volumen ( Rotura x Taladro )" value={volumenRotaTaladro} unit="m3" />
            <ReportRow label="Tonelaje" value={tonelaje} unit="Ton/Tal" />
            <ReportRow label="Libras de anfo" value={librasAnfo} unit="lib anfo/Talad" />
            <ReportRow label="Altura de carga" value={alturaCarga} unit="m" />
          </tbody>
        </table>
      </section>

      {/* Perforación */}
      <section className="mb-8">
        <h2 className="text-xs font-bold bg-gray-100 px-4 py-2.5 mb-0 uppercase tracking-wider text-gray-700">PERFORACION</h2>
        <table className="w-full border-collapse bg-white">
          <tbody>
            <ReportRow label="Costo perforación ( US$ / m )" value={costoPerforacionMetro} unit="US$ / m" />
            <ReportRow label="Costo perforación ( US$ / Ton )" value={costoPerforacionTon} unit="US$ / Ton" />
            <ReportRow label="Nº perforadora" value={numeroPerforadoras} unit="Perforadoras" />
            <ReportRow label="Metros perforado (m/dia)" value={metrosPerforado} unit="m / dia" />
          </tbody>
        </table>
      </section>

      {/* Voladura */}
      <section className="mb-8">
        <h2 className="text-xs font-bold bg-gray-100 px-4 py-2.5 mb-0 uppercase tracking-wider text-gray-700">VOLADURA</h2>
        <table className="w-full border-collapse bg-white">
          <tbody>
            <ReportRow label="Costo de voladura ( US$ / Ton )" value={costoVoladura} unit="US$/Ton" />
          </tbody>
        </table>
      </section>

      {/* Limpieza */}
      <section className="mb-8">
        <h2 className="text-xs font-bold bg-gray-100 px-4 py-2.5 mb-0 uppercase tracking-wider text-gray-700">LIMPIEZA</h2>
        <table className="w-full border-collapse bg-white">
          <tbody>
            <ReportRow label="Requerimiento de scoops" value={requerimientoScoops} unit="Scoop" />
            <ReportRow label="Costo de limpieza ( US$ / Ton )" value={costoLimpieza} unit="US$/Ton" />
          </tbody>
        </table>
      </section>

      {/* Carguio */}
      <section className="mb-8">
        <h2 className="text-xs font-bold bg-gray-100 px-4 py-2.5 mb-0 uppercase tracking-wider text-gray-700">CARGUIO</h2>
        <table className="w-full border-collapse bg-white">
          <tbody>
            <ReportRow label="Requerimiento de scoop" value={requerimientoScoop} unit="Scoop" />
            <ReportRow label="Costo de carguio ( US$ / Ton )" value={costoCarguio} unit="US$/Ton" />
          </tbody>
        </table>
      </section>

      {/* Transporte */}
      <section className="mb-8">
        <h2 className="text-xs font-bold bg-gray-100 px-4 py-2.5 mb-0 uppercase tracking-wider text-gray-700">TRANSPORTE</h2>
        <table className="w-full border-collapse bg-white">
          <tbody>
            <ReportRow label="Flota de camiones" value={flotaCamiones} unit="Camiones en Operacion" />
            <ReportRow label="Producción de flota de camiones" value={produccionFlotaCamiones} unit="Ton / Hr" />
            <ReportRow label="Costo de transporte ( US$ / Ton )" value={costoTransporte} unit="US$ / Ton" />
          </tbody>
        </table>
      </section>

      {/* Relleno Cementado */}
      <section className="mb-8">
        <h2 className="text-xs font-bold bg-gray-100 px-4 py-2.5 mb-0 uppercase tracking-wider text-gray-700">RELLENO CEMENTADO</h2>
        <table className="w-full border-collapse bg-white">
          <tbody>
            <ReportRow label="Costo de transporte ( US$ / Ton )" value={costoTransporteRC} unit="US$/Ton" />
            <ReportRow label="Costo material relleno ( US$/Ton )" value={costoMaterialRelleno} unit="US$/Ton" />
            <ReportRow label="Costo total relleno 3.5% ( US$ / Ton ) Minado Hz" value={costoTotalRelleno35} unit="US$/Ton"/>
            <ReportRow label="Costo total relleno 3.0% ( US$ / Ton ) Minado VT" value={costoTotalRelleno30} unit="US$/Ton"/>
          </tbody>
        </table>
      </section>

      {/* Relleno Detrítico */}
      <section className="mb-8">
        <h2 className="text-xs font-bold bg-gray-100 px-4 py-2.5 mb-0 uppercase tracking-wider text-gray-700">RELLENO DETRITICO</h2>
        <table className="w-full border-collapse bg-white">
          <tbody>
            <ReportRow label="Costo de transporte ( US$ / Ton )" value={costoTransporteRD} unit="US$/Ton" />
            <ReportRow label="Costo material relleno ( US$/Ton )" value={costoMaterialRellenoRD} unit="US$/Ton" />
            <ReportRow label="Costo total relleno ( US$ / Ton )" value={costoTotalRellenoRD} unit="US$/Ton" />
          </tbody>
        </table>
      </section>

      {/* Costos Finales */}
      <section className="mb-8 mt-10">
        <table className="w-full border-collapse bg-white">
          <tbody>
            <ReportRow 
              label="Costo minado proyectado ( US$ / Ton )" 
              value={costoMinadoProyectado} 
              unit="US$ / Ton"
            />
            <ReportRow 
              label="Costo minado ( US$ / Ton )" 
              value={costoMinado} 
              unit="US$ / Ton"
            />
          </tbody>
        </table>
      </section>
      </div>
    </div>
  );
}

type ReportRowProps = {
  label: string;
  value?: number | string;
  unit?: string;
  highlight?: string;
};

function ReportRow({ label, value, unit, highlight }: ReportRowProps) {
  const displayValue = typeof value === 'number' ? value.toFixed(2) : (value || '');

  return (
    <tr className="border-b border-gray-200 hover:bg-gray-50">
      <td className="py-2.5 pl-4 pr-8 text-xs text-gray-600 w-[45%]">{label}</td>
      <td className="py-2.5 px-2 text-center text-xs text-gray-400 w-8">=</td>
      <td className="py-2.5 pr-4 text-right text-sm font-bold tabular-nums w-24">
        {displayValue}
      </td>
      <td className="py-2.5 pl-4 text-xs text-gray-500 w-[30%]">{unit}</td>
      {highlight && (
        <td className="py-2.5 pl-4 text-xs text-gray-500">{highlight}</td>
      )}
    </tr>
  );
}
