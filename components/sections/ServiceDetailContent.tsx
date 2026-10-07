'use client';

import React, { useState } from 'react';
import { ServiceDetailData } from '@/types/templates.types';
import Link from 'next/link';
import { FiShield, FiSettings, FiClock, FiUsers, FiPlus, FiMinus, FiArrowRight } from 'react-icons/fi';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FiShield': return <FiShield />;
    case 'FiSettings': return <FiSettings />;
    case 'FiClock': return <FiClock />;
    case 'FiUsers': return <FiUsers />;
    default: return <FiShield />;
  }
};

export const ServiceDetailContent = ({ data }: { data?: ServiceDetailData }) => {
  const [openFaq, setOpenFaq] = useState<string | null>(data?.faqs?.[0]?.id || null);

  if (!data) return null;

  return (
    <section className="w-full py-16 md:py-12 bg-white relative">
      <div className="max-w-[1250px] mx-auto px-4 md:px-6 lg:px-8 flex flex-col lg:flex-row gap-10 lg:gap-12">

        {/* Left Side: Main Content */}
        <div className="w-full lg:w-2/3">

          {/* Top Section */}
          <div className="flex flex-col md:flex-row gap-8 mb-10 items-center">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-[#3f1956] text-white px-4 py-1.5 rounded-full text-[10px] font-semibold mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c099d8]"></span>
                {data.subtitle}
                <span className="w-1.5 h-1.5 rounded-full bg-[#c099d8]"></span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#051024] leading-tight mb-4">
                {data.title1} <span className="text-[#3f1956]">{data.title2}</span>
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                {data.description}
              </p>
            </div>
            <div className="flex-1 w-full">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
                <img src={data.imageMain} alt={`${data.title1} ${data.title2}`} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {data.features.map(feat => (
              <div key={feat.id} className="bg-white border border-[#e8dff0] rounded-xl p-3 flex flex-col xl:flex-row items-center xl:justify-start justify-center text-center xl:text-left gap-3 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[#3f1956] rounded-full flex items-center justify-center text-white text-xl shrink-0">
                  {renderIcon(feat.icon)}
                </div>
                <span className="font-bold text-[#051024] text-xs xl:text-sm leading-tight">
                  {feat.title}
                </span>
              </div>
            ))}
          </div>

          {/* Service Overview */}
          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-extrabold text-[#051024] mb-6">{data.overviewTitle}</h3>
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-1 space-y-4 text-gray-500 text-sm leading-relaxed">
                {data.overviewText.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
              <div className="w-full md:w-1/3 aspect-[4/3] rounded-xl overflow-hidden shadow-sm shrink-0">
                <img src={data.overviewImage} alt="Service Overview" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Our Process */}
          <div className="bg-[#fdfbfe] rounded-2xl p-6 md:p-8 mb-12 border border-[#e8dff0]">
            <h3 className="text-2xl font-extrabold text-[#051024] mb-8">{data.processTitle}</h3>
            <div className="flex flex-col md:flex-row gap-6 justify-between relative z-10">
              {/* Horizontal Line for Desktop */}
              <div className="hidden md:block absolute top-6 left-10 right-10 h-[2px] bg-[#e8dff0] -z-10" />

              {data.processSteps.map((step) => (
                <div key={step.id} className="flex-1 relative group">
                  <div className="flex md:flex-col items-center md:items-start gap-4 mb-3">
                    <div className="w-12 h-12 bg-[#3f1956] text-white font-bold rounded-full flex items-center justify-center z-10 shrink-0 shadow-md group-hover:scale-110 transition-transform">
                      {step.number}
                    </div>
                    <h4 className="font-bold text-[#051024] text-sm md:text-base">{step.title}</h4>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed md:pr-4">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQs */}
          <div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-[#051024] mb-6">{data.faqTitle}</h3>
            <div className="flex flex-col gap-3">
              {data.faqs.map(faq => {
                const isOpen = openFaq === faq.id;
                return (
                  <div key={faq.id} className="border border-[#e8dff0] rounded-lg overflow-hidden bg-white">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                      className="w-full flex items-center justify-between p-4 text-left font-semibold text-[#051024] text-sm md:text-base hover:bg-[#fdfbfe] transition-colors"
                    >
                      {faq.question}
                      <span className="text-[#3f1956] shrink-0 ml-4">
                        {isOpen ? <FiMinus /> : <FiPlus />}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="p-4 pt-0 text-sm text-gray-500 leading-relaxed border-t border-[#fdfbfe]">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Right Side: Sidebar */}
        <div className="w-full lg:w-1/3 flex flex-col gap-8 mt-10 lg:mt-0">

          {/* Form Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8">
            <h4 className="text-xl font-bold text-[#051024] mb-3">{data.sidebar.quoteForm.title}</h4>
            <p className="text-xs text-gray-500 mb-6 leading-relaxed">{data.sidebar.quoteForm.description}</p>

            <form className="flex flex-col gap-4">
              <input type="text" placeholder="Your Name *" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#3f1956]" required />
              <input type="email" placeholder="Your Email *" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#3f1956]" required />
              <input type="tel" placeholder="Phone Number *" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#3f1956]" required />

              <select defaultValue="" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-500 focus:outline-none focus:border-[#3f1956] appearance-none bg-white">
                <option value="" disabled>Select Service *</option>
                {data.sidebar.quoteForm.servicesList.map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>

              <textarea placeholder="Your Message *" rows={4} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#3f1956] resize-none" required></textarea>

              <button type="submit" className="w-full bg-[#3f1956] hover:bg-[#291038] text-white font-bold py-3.5 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm mt-2">
                {data.sidebar.quoteForm.buttonText.replace('->', '')}
                <FiArrowRight />
              </button>
            </form>
          </div>

          {/* Services List Card */}
          <div className="bg-[#fdfbfe] rounded-2xl p-6 md:p-8 border border-[#e8dff0]">
            <h4 className="text-xl font-bold text-[#051024] mb-5">{data.sidebar.servicesList.title}</h4>
            <div className="flex flex-col gap-3">
              {data.sidebar.servicesList.services.map(service => {
                const isActive = service.id === data.id; // Check if this is the active service
                return (
                  <Link
                    key={service.id}
                    href={service.url}
                    className={`flex items-center justify-between p-4 rounded-xl text-sm md:text-base font-semibold transition-all ${isActive
                        ? 'bg-[#f0e6f7] text-[#3f1956] shadow-sm'
                        : 'bg-white text-gray-500 hover:text-[#3f1956] shadow-[0_2px_15px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)]'
                      }`}
                  >
                    {service.label}
                    <FiArrowRight className={isActive ? 'text-[#3f1956]' : 'text-gray-400'} />
                  </Link>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
