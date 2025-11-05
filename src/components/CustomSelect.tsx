import React from 'react';

interface CustomSelectProps<T extends number | string> {
  label: string;
  onChange: (value: T) => void;
  options: { label: string; value: T; }[];
  value: T;
}

export function CustomSelect<T extends number | string>({
  label,
  onChange,
  options,
  value,
}: CustomSelectProps<T>) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    const typedValue =
      typeof value === 'number'
        ? (Number(selectedValue) as T)
        : (selectedValue as T);
    onChange(typedValue);
  };

  return (
    <label className="flex items-center justify-center gap-3 text-slate-200">
      <span className="text-sm font-medium whitespace-nowrap">{label}:</span>

      <div className="relative">
        <select
          className="bg-tertiary-700 focus:ring-tertiary-400 appearance-none rounded-md py-1.5 pr-8 pl-3 text-sm text-slate-100 transition duration-150 ease-in-out focus:ring-2 focus:outline-none"
          onChange={handleChange}
          value={value}
        >
          {options.map((opt) => (
            <option key={String(opt.value)} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        <div className="pointer-events-none absolute top-1/2 right-2 -translate-y-1/2 text-xs text-slate-300">
          ▼
        </div>
      </div>
    </label>
  );
}
