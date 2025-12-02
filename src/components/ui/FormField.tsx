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
    <div className="flex flex-col gap-2 ">
      <label htmlFor={name} className="text-sm text-gray-600">
        {label} {unit && <span className="text-gray-500">({unit})</span>}
      </label>
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder="Value"
        className=" px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 transition-all text-sm bg-white text-gray-900 overflow-hidden"
      />
    </div>
  );
}
