import React from 'react';
import { ProcessData } from '@/types/templates.types';
import { FiMessageSquare, FiCalendar, FiTool, FiCheckCircle, FiArrowRight } from 'react-icons/fi';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FiMessageSquare': return <FiMessageSquare />;
    case 'FiCalendar': return <FiCalendar />;
    case 'FiTool': return <FiTool />;
    case 'FiCheckCircle': return <FiCheckCircle />;
    default: return <FiCheckCircle />;
  }
};

export const ProcessSection = ({ data }: { data?: ProcessData }) => {
  if (!data) return null;

  return (
    <section
      className="w-full py-16 lg:py-12 relative overflow-hidden"
      style={{
        backgroundImage: `url('${data.bgImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Left Diagonal Overlay for Text */}
      <div className="absolute inset-0 z-0 opacity-95" style={{
        background: 'linear-gradient(105deg, #3f1956 0%, #3f1956 45%, rgba(63,25,86,0.8) 50%, transparent 55%)'
      }}></div>

      {/* Fallback dark gradient from left to ensure text readability on smaller screens */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#3f1956] via-[#3f1956]/80 to-transparent lg:hidden z-0"></div>

      <div className="max-w-[1250px] mx-auto px-4 md:px-6 relative z-10 flex flex-col h-full justify-between">

        {/* Header Section */}
        <div className="mb-16 lg:mb-12 relative z-10 w-full lg:w-1/2">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[2px] bg-[#c49250]" />
            <h4 className="text-white font-bold text-xs sm:text-sm tracking-[0.2em] uppercase">
              {data.subtitle}
            </h4>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            {data.title1}
          </h2>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#c099d8] leading-tight mt-1">
            {data.title2}
          </h2>
        </div>

        {/* Steps Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-2 lg:gap-x-2 gap-y-16 relative mt-4">

          {/* Dotted Line connecting the steps (visible on desktop) */}
          {/* Top calc(50% + 18px) perfectly aligns with the vertical center of the card body */}
          <div className="hidden lg:block absolute left-[5%] w-[90%] h-[2px] border-t-[3px] border-dotted border-white/60 z-0" style={{ top: 'calc(50% + 18px)' }}></div>

          {(data.steps || []).map((step, index) => (
            <div key={step.id} className="relative flex flex-col z-10" style={{ position: 'relative' }}>

              {/* Icon Badge */}
              {/* Badge is 72px tall, centered at 36px */}
              <div
                className="absolute left-1/2 w-[72px] h-[72px] rounded-full bg-white flex items-center justify-center shadow-xl z-20"
                style={{ top: '0', transform: 'translateX(-50%)' }}
              >
                <div className="w-[60px] h-[60px] rounded-full bg-[#3f1956] flex items-center justify-center text-white text-3xl">
                  {renderIcon(step.icon)}
                </div>
              </div>

              {/* Card Body */}
              {/* Margin top 36px aligns the flat top edge of the card with the center of the badge */}
              <div
                className="bg-white rounded-[24px] shadow-xl flex-grow text-center relative z-10"
                style={{ marginTop: '36px', paddingTop: '48px', paddingBottom: '24px', paddingLeft: '20px', paddingRight: '20px' }}
              >
                {/* Connector Arrow Icon (between cards) */}
                {/* Positioned exactly in the vertical center of the card body, and horizontally centered in the 8px gap */}
                {index < (data.steps || []).length - 1 && (
                  <div
                    className="hidden lg:flex absolute bg-white rounded-full items-center justify-center shadow-md z-30"
                    style={{
                      top: '50%',
                      right: '-4px',
                      transform: 'translate(50%, -50%)',
                      width: '32px',
                      height: '32px'
                    }}
                  >
                    <FiArrowRight className="text-[#3f1956]" size={16} />
                  </div>
                )}

                <div className="text-4xl font-black text-[#c099d8] mb-1 opacity-50">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-[#051024] mb-2 leading-tight">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
