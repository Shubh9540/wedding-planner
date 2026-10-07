import React from 'react';
import { WedBlissTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';

import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function ServicesPage() {
  const templateData: WedBlissTemplateData = rawData;
  const sectionData = templateData?.categories?.WedBliss?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return <div className="text-black p-10">Loading Data...</div>;

  return (
    <main className="bg-[var(--color-bg-main)] min-h-screen flex flex-col">

      <Header data={sectionData.Header?.variants?.WedBlissHeader1} />
      <Breadcrumb data={commonData.servicesBreadcrumb} />
      
      {/* Services Section */}
      <ServicesSection data={sectionData.Services?.variants?.WedBlissServices1} hideButton={true} />

      {/* Process Section */}
      <ProcessSection data={sectionData.Process?.variants?.WedBlissProcess1} />

      <Footer data={commonData.Footer} />
    </main>
  );
}

