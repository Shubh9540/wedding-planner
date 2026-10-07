import React from 'react';
import Link from 'next/link';
import { FaAngleDoubleRight } from 'react-icons/fa';

export const Breadcrumb = ({ data }: { data?: any }) => {
  if (!data) return null;

  return (
    <section 
      className="w-full relative py-20 md:py-28 z-0 bg-cover bg-center"
      style={{ backgroundImage: `url('${data.bgImage || '/main logo/breadcrumb.jpg'}')` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#051024]/85 z-0"></div>

      <div className="max-w-[1250px] mx-auto px-4 md:px-6 lg:px-8 relative z-10 text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          {data.title}
        </h1>
        <div className="flex items-center gap-2 text-sm font-medium">
          {data.paths?.map((path: any, index: number) => (
            <React.Fragment key={index}>
              {path.url ? (
                <Link href={path.url} className="text-white hover:text-[var(--color-accent)] transition-colors">
                  {path.label}
                </Link>
              ) : (
                <span className="text-white">{path.label}</span>
              )}
              {index < data.paths.length - 1 && (
                <FaAngleDoubleRight className="text-white text-[10px] opacity-80" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
