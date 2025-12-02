import React from "react";

type PaginationProps = {
  total: number;
  current: number;
  onChange: (page: number) => void;
};

export default function Pagination({ total, current, onChange }: PaginationProps) {
  return (
    <>
      <button
        className="fixed top-1/2 left-4 z-50 text-3xl px-4 py-2 rounded-full bg-white shadow hover:bg-zinc-100 disabled:opacity-40"
        disabled={current === 1}
        onClick={() => onChange(current - 1)}
        aria-label="Anterior"
      >
        &lt;
      </button>
      <button
        className="fixed top-1/2 right-4 z-50 text-3xl px-4 py-2 rounded-full bg-white shadow hover:bg-zinc-100 disabled:opacity-40"
        disabled={current === total}
        onClick={() => onChange(current + 1)}
        aria-label="Siguiente"
      >
        &gt;
      </button>
      <div className="flex items-center justify-center my-4">
        <span className="mx-6 text-base font-semibold">
          {current} / {total}
        </span>
      </div>
    </>
  );
}
