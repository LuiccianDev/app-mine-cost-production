import React from "react";

type FormFieldProps = {
  label: string;
  name: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  unit?: string;
  readOnly?: boolean;
  className?: string;
  decimals?: number;
};

export default function FormField({ label, name, value, onChange, unit, readOnly = false, className = "", decimals }: FormFieldProps) {
  const displayValue = decimals !== undefined && typeof value === 'number' 
    ? value.toFixed(decimals) 
    : value;

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-xs font-medium text-gray-700">
        {label}
      </label>
      <input
        type="number"
        id={name}
        name={name}
        value={displayValue}
        onChange={onChange}
        readOnly={readOnly}
        placeholder={unit || "0"}
        step={decimals !== undefined ? Math.pow(10, -decimals) : "any"}
        className={`px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all text-sm text-gray-900 placeholder:text-gray-400 ${readOnly ? 'cursor-not-allowed' : 'bg-gray-50'} ${className}`}
      />
      {unit && <span className="text-xs text-gray-500">{unit}</span>}
    </div>
  );
}
