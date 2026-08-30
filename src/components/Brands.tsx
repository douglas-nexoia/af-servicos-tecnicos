import React from 'react';

interface BrandsProps {
  categoryTitle?: string;
  brandsList?: string[];
}

export const Brands: React.FC<BrandsProps> = ({
  categoryTitle = 'MARCAS MULTIMARCAS ATENDIDAS',
  brandsList = [
    'LG',
    'Samsung',
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
    <section className="bg-base-2 py-5 border-b border-white/10 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Label */}
          <div className="font-mono text-xs font-bold tracking-widest text-slate-300 uppercase shrink-0 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-acc"></span>
            <span>{categoryTitle}:</span>
          </div>

          {/* Brands ticker / grid */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm sm:text-base font-bold text-slate-300">
            {brandsList.map((brand, idx) => (
              <span
                key={idx}
                className="opacity-70 hover:opacity-100 hover:text-white transition-opacity select-none cursor-default"
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
