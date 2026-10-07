import React from 'react';
import { WedBlissTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';

import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function ContactPage() {
  const templateData: WedBlissTemplateData = rawData;
  const sectionData = templateData?.categories?.WedBliss?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return <div className="text-black p-10">Loading Data...</div>;

  return (
    <main className="bg-white">

      <Header data={sectionData.Header?.variants?.WedBlissHeader1} />
      <Breadcrumb data={commonData.contactBreadcrumb} />
      
      {/* Contact Section */}
      <ContactSection data={sectionData.contact?.variants?.WedBlissContact1} />

      <Footer data={commonData.Footer} />
    </main>
  );
}

