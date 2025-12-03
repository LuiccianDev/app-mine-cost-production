import React from "react";

type FormFieldProps = {
  label: string;
  name: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  unit?: string;
};

export default function FormField({ label, name, value, onChange, unit }: FormFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-xs font-medium text-gray-700">
        {label}
      </label>
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={unit || "0"}
        className="px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all text-sm bg-gray-50 text-gray-900 placeholder:text-gray-400"
      />
      {unit && <span className="text-xs text-gray-500">{unit}</span>}
    </div>
  );
}
