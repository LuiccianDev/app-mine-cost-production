import React from 'react';
import FormField from '../ui/FormField';

export type CostoVoladuraInputsData = {
  // Precios
  costoAnfo: number;
  costoDinamita: number;
  costoRetardos: number;
  costoCordonDetonante: number;
  costoCamionAnfocar: number;
  costoChispeo: number;
  costoManoObra: number;
  tonelajePorTaladro: number;
  
  // Resultados de cálculos previos (desde Malla)
  pentacordEmpleado: number;
  tiempoCarguioAnfocar: number;
  mechaRapidaEmpleada: number;
  numeroHombresCarguio: number;
  tiempoEmpleadoCarguio: number;
};

type CostoVoladuraInputsProps = {
  data: CostoVoladuraInputsData;
  onChange: (field: keyof CostoVoladuraInputsData, value: number) => void;
};

const CostoVoladuraInputs: React.FC<CostoVoladuraInputsProps> = ({ data, onChange }) => {
  const handleFieldChange = (field: keyof CostoVoladuraInputsData) => 
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(field, Number(e.target.value));
    };

  return (
    <div className="border border-gray-300 rounded-3xl p-8 bg-white w-full h-full min-w-0">

      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-900">COSTO DE VOLADURA</h2>
        <p className="text-sm text-gray-500 mt-1">Datos</p>
        <div className="gflex flex-col gap-y-4 min-w-0">
          <FormField
            label="Costo Anfo"
            name="costoAnfo"
            value={data.costoAnfo}
            onChange={handleFieldChange('costoAnfo')}
            unit="US$/Lib"
          />
          <FormField
            label="Costo Dinamita"
            name="costoDinamita"
            value={data.costoDinamita}
            onChange={handleFieldChange('costoDinamita')}
            unit="US$/Cartucho"
          />
          <FormField
            label="Costo Retardos Fanel"
            name="costoRetardos"
            value={data.costoRetardos}
            onChange={handleFieldChange('costoRetardos')}
            unit="US$/Unidad"
          />
          <FormField
            label="Costo Cordón Detonante"
            name="costoCordonDetonante"
            value={data.costoCordonDetonante}
            onChange={handleFieldChange('costoCordonDetonante')}
            unit="US$/Pie"
          />
          <FormField
            label="Costo Camión Anfocar"
            name="costoCamionAnfocar"
            value={data.costoCamionAnfocar}
            onChange={handleFieldChange('costoCamionAnfocar')}
            unit="US$/Hr"
          />
          <FormField
            label="Costo Chispeo"
            name="costoChispeo"
            value={data.costoChispeo}
            onChange={handleFieldChange('costoChispeo')}
            unit="US$/Pie"
          />
          <FormField
            label="Costo Mano de Obra"
            name="costoManoObra"
            value={data.costoManoObra}
            onChange={handleFieldChange('costoManoObra')}
            unit="US$/Hr"
          />
          <FormField
            label="Tonelaje por Taladro"
            name="tonelajePorTaladro"
            value={data.tonelajePorTaladro}
            onChange={handleFieldChange('tonelajePorTaladro')}
            unit="Ton/Taladro"
          />
        </div>
      </div>
    </div>
  );
};

export default CostoVoladuraInputs;
