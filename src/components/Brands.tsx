import React from 'react';
import { ShieldCheck } from 'lucide-react';

interface BrandsProps {
  categoryTitle?: string;
  brandsList?: string[];
}

export const Brands: React.FC<BrandsProps> = ({
  categoryTitle = 'MARCAS ATENDIDAS',
  brandsList = [
    'LG Dual Inverter',
    'Samsung WindFree',
    'Daikin',
    'Fujitsu',
    'Midea',
    'Gree',
    'Carrier',
    'Elgin',
    'Springer',
    'Consul',
    'Electrolux',
  ],
}) => {
  return (
    <section className="bg-base-2 py-6 border-b border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          
          {/* Label */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="p-1.5 rounded-md bg-acc/20 text-acc">
              <ShieldCheck className="w-4 h-4" />
            </span>
            <span className="font-mono text-xs sm:text-sm font-extrabold tracking-widest text-acc uppercase">
              {categoryTitle}:
            </span>
          </div>

          {/* Brands Badges / Pills with High Contrast */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            {brandsList.map((brand, idx) => (
              <span
                key={idx}
                className="inline-flex items-center px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white hover:text-acc border border-white/15 hover:border-acc/50 font-bold text-xs sm:text-sm transition-all select-none shadow-sm cursor-default"
              >
                {brand}
              </span>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
