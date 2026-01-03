'use client'
import { jsPDF } from 'jspdf'
import { usePDFStore } from '@/src/stores/usePDF'

export type PreviewProps = {
  onBack?: () => void
}

export default function Preview({ onBack }: PreviewProps) {
  const {
    projectCode,
    burden,
    espaciamiento,
    volumenRotaTaladro,
    tonelajePerforado,
    librasAnfo,
    alturaCarga,
    costoPerforacionMetro,
    costoPerforacionTon,
    numeroPerforadoras,
    metrosPerforado,
    costoVoladura,
    requerimientoScoops,
    costoLimpieza,
    requerimientoScoop,
    costoCarguio,
    flotaCamiones,
    produccionFlotaCamiones,
    costoTransporte,
    requerimientoPerforadora,
    requerimientoScoopsLimpieza,
    requerimientoScoopsCarguio,
    requerimientoScoopRelleno,
    totalScoops,
    flotaCamionesTransporte,
    costoTransporteRC,
    costoMaterialRelleno,
    costoTotalRelleno35,
    costoTotalRelleno30,
    costoTransporteRD,
    costoMaterialRellenoRD,
    costoTotalRellenoRD,
    costoMinadoProyectado,
    costoMinado,
  } = usePDFStore()

  const generatePDF = () => {
    const doc = new jsPDF()
    let yPos = 20
    const lineHeight = 7
    const pageWidth = doc.internal.pageSize.getWidth()

    // Header
    doc.setFontSize(16)
    doc.setFont('helvetica', 'bold')
    doc.text('PRODUCCION Y COSTOS', 20, yPos)
    doc.text(projectCode, pageWidth - 40, yPos, { align: 'right' })
    yPos += 10
    doc.setLineWidth(0.5)
    doc.line(20, yPos, pageWidth - 20, yPos)
    yPos += 10

    // Helper function to add section
    const addSection = (
      title: string,
      rows: Array<{ label: string; value: number | string | undefined; unit: string }>,
    ) => {
      doc.setFontSize(10)
      doc.setFont('helvetica', 'bold')
      doc.text(title, 22, yPos)
      yPos += 8

      doc.setFontSize(9)
      doc.setFont('helvetica', 'normal')

      rows.forEach((row) => {
        if (yPos > 270) {
          doc.addPage()
          yPos = 20
        }

        const displayValue = typeof row.value === 'number' ? row.value.toFixed(2) : row.value || ''
        doc.text(row.label, 22, yPos)
        doc.text('=', 120, yPos)
        doc.setFont('helvetica', 'bold')
        doc.text(displayValue, 150, yPos, { align: 'right' })
        doc.setFont('helvetica', 'normal')
        doc.text(row.unit, 155, yPos)
        yPos += lineHeight
      })

      yPos += 5
    }

    // Malla de Perforación
    addSection('MALLA DE PERFORACION', [
      { label: 'Burden', value: burden, unit: 'm' },
      { label: 'Espaciamiento', value: espaciamiento, unit: 'm' },
      { label: 'Volumen ( Rotura x Taladro )', value: volumenRotaTaladro, unit: 'm3' },
      { label: 'Tonelaje', value: tonelajePerforado, unit: 'Ton/Tal' },
      { label: 'Libras de anfo', value: librasAnfo, unit: 'lib anfo/Talad' },
      { label: 'Altura de carga', value: alturaCarga, unit: 'm' },
    ])

    // Perforación
    addSection('PERFORACION', [
      { label: 'Costo perforación ( US$ / m )', value: costoPerforacionMetro, unit: 'US$ / m' },
      { label: 'Costo perforación ( US$ / Ton )', value: costoPerforacionTon, unit: 'US$ / Ton' },
      { label: 'Nº perforadora', value: numeroPerforadoras, unit: 'Perforadoras' },
      { label: 'Metros perforado (m/dia)', value: metrosPerforado, unit: 'm / dia' },
    ])

    // Voladura
    addSection('VOLADURA', [
      { label: 'Costo de voladura ( US$ / Ton )', value: costoVoladura, unit: 'US$/Ton' },
    ])

    // Limpieza
    addSection('LIMPIEZA', [
      { label: 'Requerimiento de scoops', value: requerimientoScoops, unit: 'Scoop' },
      { label: 'Costo de limpieza ( US$ / Ton )', value: costoLimpieza, unit: 'US$/Ton' },
    ])

    // Carguio
    addSection('CARGUIO', [
      { label: 'Requerimiento de scoop', value: requerimientoScoop, unit: 'Scoop' },
      { label: 'Costo de carguio ( US$ / Ton )', value: costoCarguio, unit: 'US$/Ton' },
    ])

    // Transporte
    addSection('TRANSPORTE', [
      { label: 'Flota de camiones', value: flotaCamiones, unit: 'Camiones en Operacion' },
      {
        label: 'Producción de flota de camiones',
        value: produccionFlotaCamiones,
        unit: 'Ton / Hr',
      },
      { label: 'Costo de transporte ( US$ / Ton )', value: costoTransporte, unit: 'US$ / Ton' },
    ])

    // Requerimiento Equipos
    addSection('REQUERIMIENTO EQUIPOS', [
      { label: 'Nº perforadora', value: requerimientoPerforadora, unit: 'Perforadoras' },
      {
        label: 'Requerimiento de scoops - limpieza',
        value: requerimientoScoopsLimpieza,
        unit: 'Scoop',
      },
      {
        label: 'Requerimiento de scoops - carguio',
        value: requerimientoScoopsCarguio,
        unit: 'Scoop',
      },
      {
        label: 'Requerimiento de scoop - relleno',
        value: requerimientoScoopRelleno,
        unit: 'Scoop',
      },
      { label: 'Total scoops', value: totalScoops, unit: 'Scoop' },
      {
        label: 'Flota de camiones - transporte',
        value: flotaCamionesTransporte,
        unit: 'Camiones en Operacion',
      },
    ])

    // Relleno Cementado
    addSection('RELLENO CEMENTADO', [
      { label: 'Costo de transporte ( US$ / Ton )', value: costoTransporteRC, unit: 'US$/Ton' },
      { label: 'Costo material relleno ( US$/Ton )', value: costoMaterialRelleno, unit: 'US$/Ton' },
      {
        label: 'Costo total relleno 3.5% ( US$ / Ton )',
        value: costoTotalRelleno35,
        unit: 'US$/Ton',
      },
      {
        label: 'Costo total relleno 3.0% ( US$ / Ton )',
        value: costoTotalRelleno30,
        unit: 'US$/Ton',
      },
    ])

    // Relleno Detrítico
    if (costoTransporteRD || costoMaterialRellenoRD || costoTotalRellenoRD) {
      addSection('RELLENO DETRITICO', [
        { label: 'Costo de transporte ( US$ / Ton )', value: costoTransporteRD, unit: 'US$/Ton' },
        {
          label: 'Costo material relleno ( US$/Ton )',
          value: costoMaterialRellenoRD,
          unit: 'US$/Ton',
        },
        { label: 'Costo total relleno ( US$ / Ton )', value: costoTotalRellenoRD, unit: 'US$/Ton' },
      ])
    }

    // Costos Finales
    yPos += 10
    doc.setFontSize(10)
    doc.setFont('helvetica', 'normal')
    doc.text('Costo minado proyectado ( US$ / Ton )', 22, yPos)
    doc.text('=', 120, yPos)
    doc.setFont('helvetica', 'bold')
    doc.text(costoMinadoProyectado.toFixed(2), 150, yPos, { align: 'right' })
    doc.setFont('helvetica', 'normal')
    doc.text('US$ / Ton', 155, yPos)
    yPos += 7

    doc.text('Costo minado ( US$ / Ton )', 22, yPos)
    doc.text('=', 120, yPos)
    doc.setFont('helvetica', 'bold')
    doc.text(costoMinado.toFixed(2), 150, yPos, { align: 'right' })
    doc.setFont('helvetica', 'normal')
    doc.text('US$ / Ton', 155, yPos)

    // Save PDF
    doc.save(`Costos_Produccion_${projectCode}_${new Date().toISOString().split('T')[0]}.pdf`)
  }

  return (
    <div className="w-full">
      {/* Header con botones */}
      <div className="mb-6 flex items-center justify-between p-6">
        <h1 className="text-2xl font-bold text-gray-900">Reporte Preview</h1>
        <div className="flex items-center gap-3">
          {onBack && (
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-5 py-2.5 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50"
            >
              Back to Edit
            </button>
          )}
          <button
            onClick={generatePDF}
            className="flex items-center gap-2 rounded-lg bg-gray-900 px-5 py-2.5 font-medium text-white shadow-sm transition-all hover:bg-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4"
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
      <div className="rounded-xl border border-gray-200 bg-white p-10 shadow-sm">
        {/* Header del reporte */}
        <div className="mb-6 flex items-center justify-between border-b-2 border-gray-800 pb-4">
          <h2 className="text-2xl font-bold">PRODUCCION Y COSTOS</h2>
          <div className="text-xl font-semibold">{projectCode}</div>
        </div>

        {/* Malla de Perforación */}
        <section className="mb-8">
          <h2 className="mb-0 px-4 py-2.5 text-xs font-bold tracking-wider text-gray-700 uppercase">
            MALLA DE PERFORACION
          </h2>
          <table className="w-full border-collapse bg-white">
            <tbody>
              <ReportRow label="Burden" value={burden} unit="m" />
              <ReportRow label="Espaciamiento" value={espaciamiento} unit="m" />
              <ReportRow
                label="Volumen ( Rotura x Taladro )"
                value={volumenRotaTaladro}
                unit="m3"
              />
              <ReportRow label="Tonelaje" value={tonelajePerforado} unit="Ton/Tal" />
              <ReportRow label="Libras de anfo" value={librasAnfo} unit="lib anfo/Talad" />
              <ReportRow label="Altura de carga" value={alturaCarga} unit="m" />
            </tbody>
          </table>
        </section>

        {/* Perforación */}
        <section className="mb-8">
          <h2 className="mb-0 px-4 py-2.5 text-xs font-bold tracking-wider text-gray-700 uppercase">
            PERFORACION
          </h2>
          <table className="w-full border-collapse bg-white">
            <tbody>
              <ReportRow
                label="Costo perforación ( US$ / m )"
                value={costoPerforacionMetro}
                unit="US$ / m"
              />
              <ReportRow
                label="Costo perforación ( US$ / Ton )"
                value={costoPerforacionTon}
                unit="US$ / Ton"
              />
              <ReportRow label="Nº perforadora" value={numeroPerforadoras} unit="Perforadoras" />
              <ReportRow label="Metros perforado (m/dia)" value={metrosPerforado} unit="m / dia" />
            </tbody>
          </table>
        </section>

        {/* Voladura */}
        <section className="mb-8">
          <h2 className="mb-0 px-4 py-2.5 text-xs font-bold tracking-wider text-gray-700 uppercase">
            VOLADURA
          </h2>
          <table className="w-full border-collapse bg-white">
            <tbody>
              <ReportRow
                label="Costo de voladura ( US$ / Ton )"
                value={costoVoladura}
                unit="US$/Ton"
              />
            </tbody>
          </table>
        </section>

        {/* Limpieza */}
        <section className="mb-8">
          <h2 className="mb-0 px-4 py-2.5 text-xs font-bold tracking-wider text-gray-700 uppercase">
            LIMPIEZA
          </h2>
          <table className="w-full border-collapse bg-white">
            <tbody>
              <ReportRow label="Requerimiento de scoops" value={requerimientoScoops} unit="Scoop" />
              <ReportRow
                label="Costo de limpieza ( US$ / Ton )"
                value={costoLimpieza}
                unit="US$/Ton"
              />
            </tbody>
          </table>
        </section>

        {/* Carguio */}
        <section className="mb-8">
          <h2 className="mb-0 px-4 py-2.5 text-xs font-bold tracking-wider text-gray-700 uppercase">
            CARGUIO
          </h2>
          <table className="w-full border-collapse bg-white">
            <tbody>
              <ReportRow label="Requerimiento de scoop" value={requerimientoScoop} unit="Scoop" />
              <ReportRow
                label="Costo de carguio ( US$ / Ton )"
                value={costoCarguio}
                unit="US$/Ton"
              />
            </tbody>
          </table>
        </section>

        {/* Transporte */}
        <section className="mb-8">
          <h2 className="mb-0 px-4 py-2.5 text-xs font-bold tracking-wider text-gray-700 uppercase">
            TRANSPORTE
          </h2>
          <table className="w-full border-collapse bg-white">
            <tbody>
              <ReportRow
                label="Flota de camiones"
                value={flotaCamiones}
                unit="Camiones en Operacion"
              />
              <ReportRow
                label="Producción de flota de camiones"
                value={produccionFlotaCamiones}
                unit="Ton / Hr"
              />
              <ReportRow
                label="Costo de transporte ( US$ / Ton )"
                value={costoTransporte}
                unit="US$ / Ton"
              />
            </tbody>
          </table>
        </section>

        {/* Relleno Cementado */}
        <section className="mb-8">
          <h2 className="mb-0 px-4 py-2.5 text-xs font-bold tracking-wider text-gray-700 uppercase">
            RELLENO CEMENTADO
          </h2>
          <table className="w-full border-collapse bg-white">
            <tbody>
              <ReportRow
                label="Costo de transporte ( US$ / Ton )"
                value={costoTransporteRC}
                unit="US$/Ton"
              />
              <ReportRow
                label="Costo material relleno ( US$/Ton )"
                value={costoMaterialRelleno}
                unit="US$/Ton"
              />
              <ReportRow
                label="Costo total relleno 3.5% ( US$ / Ton ) Minado Hz"
                value={costoTotalRelleno35}
                unit="US$/Ton"
              />
              <ReportRow
                label="Costo total relleno 3.0% ( US$ / Ton ) Minado VT"
                value={costoTotalRelleno30}
                unit="US$/Ton"
              />
            </tbody>
          </table>
        </section>

        {/* Relleno Detrítico */}
        <section className="mb-8">
          <h2 className="mb-0 px-4 py-2.5 text-xs font-bold tracking-wider uppercase">
            RELLENO DETRITICO
          </h2>
          <table className="w-full border-collapse bg-white">
            <tbody>
              <ReportRow
                label="Costo de transporte ( US$ / Ton )"
                value={costoTransporteRD}
                unit="US$/Ton"
              />
              <ReportRow
                label="Costo material relleno ( US$/Ton )"
                value={costoMaterialRellenoRD}
                unit="US$/Ton"
              />
              <ReportRow
                label="Costo total relleno ( US$ / Ton )"
                value={costoTotalRellenoRD}
                unit="US$/Ton"
              />
            </tbody>
          </table>
        </section>

        {/* Costos Finales */}
        <section className="mt-10 mb-8">
          <table className="w-full border-collapse bg-white">
            <tbody>
              <ReportRow
                label="Costo minado proyectado ( US$ / Ton )"
                value={costoMinadoProyectado}
                unit="US$ / Ton"
              />
              <ReportRow label="Costo minado ( US$ / Ton )" value={costoMinado} unit="US$ / Ton" />
            </tbody>
          </table>
        </section>

        <div className="mb-6 flex items-center justify-between border-b-2 border-gray-800 pb-4">
          <h2 className="text-2xl font-bold">Requerimientos de Equipos</h2>
          <div className="text-xl font-semibold">{projectCode}</div>
        </div>

        {/* Requerimiento Equipos */}
        <section className="mb-8">
          <h2 className="mb-0 px-4 py-2.5 text-xs font-bold tracking-wider text-gray-700 uppercase">
            REQUERIMIENTO EQUIPOS
          </h2>
          <table className="w-full border-collapse bg-white">
            <tbody>
              <ReportRow
                label="Nº perforadora"
                value={requerimientoPerforadora}
                unit="Perforadoras"
              />
              <ReportRow
                label="Requerimiento de scoops"
                value={requerimientoScoopsLimpieza}
                unit="Scoop"
              />
              <ReportRow
                label="Requerimiento de scoops"
                value={requerimientoScoopsCarguio}
                unit="Scoop"
              />
              <ReportRow
                label="Requerimiento de scoop"
                value={requerimientoScoopRelleno}
                unit="Scoop"
              />
              <ReportRow label="Total scoops" value={totalScoops} unit="Scoop" />
              <ReportRow
                label="Flota de camiones"
                value={flotaCamionesTransporte}
                unit="Camiones en Operacion"
              />
            </tbody>
          </table>
        </section>
      </div>
    </div>
  )
}

type ReportRowProps = {
  label: string
  value?: number | string
  unit?: string
  highlight?: string
}

function ReportRow({ label, value, unit, highlight }: ReportRowProps) {
  const displayValue = typeof value === 'number' ? value.toFixed(2) : value || ''

  return (
    <tr className="border-b border-gray-200 hover:bg-gray-50">
      <td className="w-[45%] py-2.5 pr-8 pl-4 text-xs text-gray-600">{label}</td>
      <td className="w-8 px-2 py-2.5 text-center text-xs text-gray-400">=</td>
      <td className="w-24 py-2.5 pr-4 text-right text-sm font-bold tabular-nums">{displayValue}</td>
      <td className="w-[30%] py-2.5 pl-4 text-xs">{unit}</td>
      {highlight && <td className="py-2.5 pl-4 text-xs text-gray-500">{highlight}</td>}
    </tr>
  )
}
