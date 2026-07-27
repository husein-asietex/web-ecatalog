import React from 'react';
import { ChevronDown, ChevronUp, Filter } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';

export type FilterState = {
  basic: boolean;
  oversize: boolean;
  polo: boolean;
  jaket: boolean;
  hoodie: boolean;
  sportwear: boolean;
  ladies: boolean;
};

interface ProductFilterProps {
  openFilter: FilterState;
  toggleFilter: (key: keyof FilterState) => void;
  className?: string;
  hideHeader?: boolean;
}

export default function ProductFilter({ openFilter, toggleFilter, className = "", hideHeader = false }: ProductFilterProps) {
  return (
    <div className={`space-y-4 ${className}`}>
      {!hideHeader && (
        <div className="flex justify-between items-center pb-3 border-b">
          <h3 className="flex items-center gap-2 font-semibold text-base">
            <Filter className="w-4 h-4" strokeWidth={2.3} /> Filter
          </h3>
          <Button className="text-xs text-blue-600 hover:underline font-bold p-0" variant="link">Reset</Button>
        </div>
      )}

      {/* Kategori: Kain Kaos Basic */}
      <div className="space-y-2">
        <button
          onClick={() => toggleFilter("basic")}
          className="flex justify-between items-center w-full text-sm font-semibold py-1"
        >
          <span>Kain Kaos Basic</span>
          {openFilter.basic ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
        {openFilter.basic && (
          <div className="pl-2 space-y-2 text-sm text-slate-600">
            <label className="flex items-center gap-2 cursor-pointer">
              <Checkbox /> Combed BCI Supersoft
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <Checkbox /> Combed BCI Biowash
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <Checkbox /> Combed BCI Hydro
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <Checkbox /> Combed BCI Striper
            </label>
          </div>
        )}
      </div>

      {/* Kategori Lainnya (Collapsible) */}
      {[
        { key: "oversize", label: "Kain Kaos Oversize" },
        { key: "polo", label: "Kain Kaos Polo" },
        { key: "jaket", label: "Kain Jaket" },
        { key: "hoodie", label: "Kain Hoodie" },
        { key: "sportwear", label: "Kain Sportwear" },
        { key: "ladies", label: "Kain Ladies" },
      ].map((item) => (
        <div key={item.key} className="border-t pt-3">
          <button
            onClick={() => toggleFilter(item.key as keyof FilterState)}
            className="flex justify-between items-center w-full text-sm font-semibold py-1 text-slate-700"
          >
            <span>{item.label}</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
}
