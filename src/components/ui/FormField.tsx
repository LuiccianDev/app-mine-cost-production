import React from 'react'

type FormFieldProps = {
  label: string
  name: string
  value: string | number
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  unit?: string
  readOnly?: boolean
  className?: string
  decimals?: number
  isAutoFilled?: boolean
  isDirty?: boolean
  onResetToCalculated?: () => void
}

export default function FormField({
  label,
  name,
  value,
  onChange,
  unit,
  readOnly = false,
  className = '',
  decimals,
  isAutoFilled = false,
  isDirty = false,
  onResetToCalculated,
}: FormFieldProps) {
  const displayValue =
    decimals !== undefined && typeof value === 'number' ? value.toFixed(decimals) : value

  const showAutoFilledIndicator = isAutoFilled && !isDirty
  const showManualEditIndicator = isAutoFilled && isDirty
  const isDisabled = isAutoFilled && !isDirty

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="flex items-center gap-2 text-xs font-medium text-gray-700">
        {label}
        {showAutoFilledIndicator && (
          <span
            className="inline-flex items-center gap-1 rounded border border-blue-200 bg-blue-50 px-1.5 py-0.5 text-[10px] font-medium text-blue-700"
            title="Valor auto-calculado"
          >
            <svg className="h-2.5 w-2.5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                clipRule="evenodd"
              />
            </svg>
            Auto
          </span>
        )}
        {showManualEditIndicator && (
          <span
            className="inline-flex items-center gap-1 rounded border border-amber-200 bg-amber-50 px-1.5 py-0.5 text-[10px] font-medium text-amber-700"
            title="Valor editado manualmente - Click para restaurar valor calculado"
          >
            <svg className="h-2.5 w-2.5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
            </svg>
            Manual
          </span>
        )}
      </label>
      <div className="relative">
        <input
          type="number"
          id={name}
          name={name}
          value={displayValue}
          onChange={onChange}
          disabled={isDisabled}
          readOnly={readOnly && !isDisabled}
          placeholder={unit || '0'}
          step={decimals !== undefined ? Math.pow(10, -decimals) : 'any'}
          className={`w-full border px-3 py-2 ${showManualEditIndicator ? 'border-amber-300 bg-amber-50/30' : 'border-gray-200'} ${showAutoFilledIndicator ? 'border-blue-300 bg-blue-50/30' : ''} rounded-md text-sm text-gray-900 transition-all placeholder:text-gray-400 focus:border-transparent focus:ring-2 focus:ring-gray-900 focus:outline-none ${isDisabled || readOnly ? 'cursor-not-allowed opacity-60' : 'bg-gray-50'} ${className}`}
        />
        {showManualEditIndicator && onResetToCalculated && (
          <button
            type="button"
            onClick={onResetToCalculated}
            className="absolute top-1/2 right-2 -translate-y-1/2 rounded p-1 text-amber-600 transition-colors hover:bg-amber-100 hover:text-amber-800"
            title="Restaurar valor calculado"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </button>
        )}
      </div>
      {unit && <span className="text-xs text-gray-500">{unit}</span>}
    </div>
  )
}
