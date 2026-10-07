import React from 'react';
import { WedBlissTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { ServiceDetailContent } from '@/components/sections/ServiceDetailContent';
import { Footer } from '@/components/common/Footer';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function ServiceDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  
  const templateData: WedBlissTemplateData = rawData;
  const sectionData = templateData?.categories?.WedBliss?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return <div className="text-black p-10">Loading Data...</div>;

  const allServicesList = sectionData.Services?.variants?.WedBlissServices1?.services || [];
  
  // Try to find full detail data first
  let serviceDetailData = sectionData.ServiceDetail?.variants?.[id];

  // If no full detail data exists for this ID, we create a fallback from the list data
  // so the page doesn't crash while user is still adding data
  if (!serviceDetailData) {
    const listData = allServicesList.find(s => s.url.endsWith(`/${id}`));
    if (!listData) notFound();

    serviceDetailData = {
      id: listData.id,
      subtitle: "Our Service",
      title1: listData.title.split(' ')[0] || "",
      title2: listData.title.split(' ').slice(1).join(' ') || "",
      description: listData.description,
      imageMain: listData.image,
      features: [],
      overviewTitle: "Service Overview",
      overviewText: [listData.description],
      overviewImage: listData.image,
      processTitle: "Our Process",
      processSteps: [],
      faqTitle: "Frequently Asked Questions",
      faqs: [],
      sidebar: {
        quoteForm: {
          title: "Get a Free Quote",
          description: "Fill out the form and our team will get back to you with the best solution for your needs.",
          buttonText: "Enquire Now ->",
          servicesList: allServicesList.map(s => s.title)
        },
        servicesList: {
          title: "Our Services",
          services: allServicesList.map(s => ({ id: s.id, label: s.title, url: s.url }))
        }
      }
    };
  }

  // Create breadcrumb data for the specific service
  const breadcrumbData = {
    title: `${serviceDetailData.title1} ${serviceDetailData.title2}`.trim(),
    paths: [
      { label: 'Home', url: '/' },
      { label: 'Services', url: '/services' },
      { label: `${serviceDetailData.title1} ${serviceDetailData.title2}`.trim() }
    ]
  };

  return (
    <main className="bg-white">      <Header data={sectionData.Header?.variants?.WedBlissHeader1} />
      
      <Breadcrumb data={breadcrumbData} />
      
      {/* Service Detail Component */}
      <ServiceDetailContent data={serviceDetailData} />

      <Footer data={commonData.Footer} />
    </main>
  );
}

