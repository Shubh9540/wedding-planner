import React from 'react';
import { ContactData } from '@/types/templates.types';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaHeadset, FaFileAlt } from 'react-icons/fa';

const renderIcon = (iconName: string, className: string = '') => {
  switch (iconName) {
    case 'FaMapMarkerAlt': return <FaMapMarkerAlt className={className} />;
    case 'FaPhoneAlt': return <FaPhoneAlt className={className} />;
    case 'FaEnvelope': return <FaEnvelope className={className} />;
    case 'FaClock': return <FaClock className={className} />;
    case 'FaHeadset': return <FaHeadset className={className} />;
    case 'FaFileAlt': return <FaFileAlt className={className} />;
    default: return null;
  }
};

export const ContactSection = ({ data }: { data?: ContactData }) => {
  if (!data) return null;

  return (
    <section className="w-full py-8 lg:py-12 bg-white relative">
      <div className="max-w-[1250px] mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
        
        {/* Left Column */}
        <div className="flex flex-col lg:col-span-5">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#3f1956] text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider mb-6 w-max">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c099d8]"></span>
            {data.subtitle}
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl lg:text-[54px] font-extrabold text-[#051024] leading-[1.1] mb-6">
            {data.title1} <span className="text-[#3f1956]">{data.title2}</span>
          </h2>

          <p className="text-gray-600 text-sm md:text-base mb-10 leading-relaxed max-w-lg">
            {data.description}
          </p>

          {/* Form */}
          <div className="bg-[#fdfbfe] rounded-2xl p-6 md:p-8 border border-[#e8dff0]">
            <h3 className="text-2xl font-bold text-[#051024] mb-8">{data.form?.title || 'Send Us a Message'}</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input type="text" placeholder="Your Name *" className="w-full px-5 py-3.5 bg-white border border-[#e8dff0] rounded-xl text-gray-700 text-sm focus:outline-none focus:border-[#3f1956] transition-colors" required />
                </div>
                <div>
                  <input type="email" placeholder="Your Email *" className="w-full px-5 py-3.5 bg-white border border-[#e8dff0] rounded-xl text-gray-700 text-sm focus:outline-none focus:border-[#3f1956] transition-colors" required />
                </div>
                <div>
                  <input type="tel" placeholder="Phone Number *" className="w-full px-5 py-3.5 bg-white border border-[#e8dff0] rounded-xl text-gray-700 text-sm focus:outline-none focus:border-[#3f1956] transition-colors" required />
                </div>
                <div>
                  <input type="text" placeholder="Subject *" className="w-full px-5 py-3.5 bg-white border border-[#e8dff0] rounded-xl text-gray-700 text-sm focus:outline-none focus:border-[#3f1956] transition-colors" required />
                </div>
              </div>
              <div>
                <textarea placeholder="Your Message *" rows={5} className="w-full px-5 py-3.5 bg-white border border-[#e8dff0] rounded-xl text-gray-700 text-sm focus:outline-none focus:border-[#3f1956] transition-colors resize-none" required></textarea>
              </div>
              <button type="submit" className="inline-flex items-center justify-center gap-2 bg-[#3f1956] hover:bg-[#291038] text-white font-bold py-4 px-8 rounded-xl transition-colors text-sm w-full md:w-auto">
                {data.form?.buttonText || 'Send Message'} <span className="text-lg">→</span>
              </button>
            </form>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6 lg:col-span-7">
          {/* Top Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Address */}
            <div className="bg-[#fdfbfe] rounded-2xl p-6 border border-[#e8dff0] flex flex-col items-center md:items-start text-center md:text-left">
              <div className="w-16 h-16 rounded-full bg-[#f3ebf8] flex items-center justify-center text-[#3f1956] text-3xl mb-5">
                <FaMapMarkerAlt />
              </div>
              <h4 className="text-[15px] font-bold text-[#051024] mb-2">{data.contactInfo.addressTitle}</h4>
              <p className="text-xs text-gray-600 leading-relaxed">{data.contactInfo.address}</p>
            </div>
            {/* Phone */}
            <div className="bg-[#fdfbfe] rounded-2xl p-6 border border-[#e8dff0] flex flex-col items-center md:items-start text-center md:text-left">
              <div className="w-16 h-16 rounded-full bg-[#f3ebf8] flex items-center justify-center text-[#3f1956] text-3xl mb-5">
                <FaPhoneAlt />
              </div>
              <h4 className="text-[15px] font-bold text-[#051024] mb-2">{data.contactInfo.phoneTitle}</h4>
              <p className="text-xs text-gray-600">{data.contactInfo.phone}</p>
            </div>
            {/* Email */}
            <div className="bg-[#fdfbfe] rounded-2xl p-6 border border-[#e8dff0] flex flex-col items-center md:items-start text-center md:text-left">
              <div className="w-16 h-16 rounded-full bg-[#f3ebf8] flex items-center justify-center text-[#3f1956] text-3xl mb-5">
                <FaEnvelope />
              </div>
              <h4 className="text-[15px] font-bold text-[#051024] mb-2">{data.contactInfo.emailTitle}</h4>
              <p className="text-xs text-gray-600">{data.contactInfo.email}</p>
            </div>
          </div>

          {/* Map */}
          <div className="w-full h-[280px] rounded-2xl overflow-hidden border border-[#e8dff0]">
            <iframe 
              src={data.mapUrl} 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Bottom Info Box */}
          <div className="bg-[#fdfbfe] rounded-2xl p-6 border border-[#e8dff0]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-[#e8dff0]">
              {data.infoBoxes?.map((box, index) => (
                <div key={index} className={`flex flex-col md:flex-row items-center md:items-start gap-4 ${index !== 0 ? 'pt-6 md:pt-0 md:pl-6' : ''}`}>
                  <div className="w-14 h-14 shrink-0 rounded-full bg-[#f3ebf8] flex items-center justify-center text-[#3f1956] text-2xl">
                    {renderIcon(box.icon)}
                  </div>
                  <div className="text-center md:text-left">
                    <h5 className="font-bold text-[#051024] text-xs mb-1">{box.title}</h5>
                    <p className="text-[11px] text-gray-600">{box.desc1}</p>
                    <p className="text-[11px] text-gray-600">{box.desc2}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
