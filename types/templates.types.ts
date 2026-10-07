export interface HeaderContactItem {
  id: string;
  icon: string;
  label: string;
  value: string;
}

export interface HeaderNavLink {
  id: string;
  label: string;
  url: string;
}

export interface HeaderData {
  logo: string;
  logoAlt: string;
  navLinks: { id: string; label: string; url: string; hasDropdown?: boolean }[];
  contactButton: { text: string; url: string };
}



export interface HeroData {
  subtitle: string;
  title1: string;
  title2: string;
  title3?: string;
  description: string;
  image1: string;
  image2?: string;
  image3?: string;
  button1: { text: string; url: string };
  button2: { text: string; url: string };
}

export interface AboutUsData {
  subtitle: string;
  title1: string;
  title2: string;
  description1: string;
  description2: string;
  stats: {
    id: string;
    number: string;
    suffix: string;
    text: string;
    icon: string;
  }[];
  imageMain: string;
  imageSmall: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: string;
  url: string;
}

export interface ProcessItem {
  id: string;
  icon: string;
  number?: string;
  title: string;
  description: string;
  url?: string;
}

export interface ProcessData {
  subtitle: string;
  title1: string;
  title2: string;
  title3?: string;
  description?: string;
  image?: string;
  bgImage?: string;
  features?: ProcessItem[];
  steps?: ProcessItem[];
}

export interface ServicesData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  services: ServiceItem[];
  button?: { text: string; url: string };
}

export interface ServiceDetailFeature {
  id: string;
  icon: string;
  title: string;
}

export interface ServiceDetailProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface ServiceDetailData {
  id: string;
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  imageMain: string;
  features: ServiceDetailFeature[];
  overviewTitle: string;
  overviewText: string[];
  overviewImage: string;
  processTitle: string;
  processSteps: ServiceDetailProcessStep[];
  faqTitle: string;
  faqs: { id: string; question: string; answer: string }[];
  sidebar: {
    quoteForm: {
      title: string;
      description: string;
      buttonText: string;
      servicesList: string[];
    };
    servicesList: {
      title: string;
      services: { id: string; label: string; url: string }[];
    };
  };
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  quote: string;
  rating: number;
  avatar: string;
}

export interface TestimonialsData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  testimonials: TestimonialItem[];
}

export interface FooterData {
  logoAlt: string;
  brandTitle: string;
  copyrightText: string;
  description: string;
  hoursTitle: string;
  hours: string;
  hoursDays: string;
  socialLinks: { id: string; icon: string; url: string }[];
  quickLinks: { id: string; label: string; url: string }[];
  servicesLinks: { id: string; label: string; url: string }[];
  contactInfo: { address: string; phone: string; email: string };
  instagram: string[];
  faqLinks?: { id: string; label: string; url: string }[];
}


export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FaqData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  image: string;
  faqs: FaqItem[];
}

export interface GalleryItem {
  id: string;
  image: string;
  alt: string;
}

export interface GalleryData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  images: GalleryItem[];
  button?: { text: string; url: string };
}

export interface VideoItem {
  id: string;
  thumbnail: string;
  youtubeId: string;
  duration: string;
  title: string;
}

export interface VideoGalleryData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  videos: VideoItem[];
}

export interface ContactData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  contactInfo: {
    phoneTitle: string;
    phone: string;
    emailTitle: string;
    email: string;
    addressTitle: string;
    address: string;
    hoursTitle: string;
    hoursLine1: string;
    hoursLine2: string;
  };
  form: {
    title: string;
    description: string;
    buttonText: string;
    servicesList: string[];
  };
  mapUrl: string;
  infoBoxes?: {
    icon: string;
    title: string;
    desc1: string;
    desc2: string;
  }[];
}

export interface EnquiryData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  features: {
    title: string;
    description: string;
  }[];
  form: {
    title1: string;
    title2: string;
    description: string;
    buttonText: string;
    servicesList: string[];
  };
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface TeamData {
  subtitle: string;
  title1: string;
  title2: string;
  members: TeamMember[];
}

export interface CounterItem {
  id: string;
  icon: string;
  number: number;
  suffix?: string;
  label: string;
}

export interface CounterData {
  bgImage?: string;
  items: CounterItem[];
}

export interface WedBlissTemplateData {
  common: {
    aboutBreadcrumb?: any;
    servicesBreadcrumb?: any;
    contactBreadcrumb?: any;
    enquiryBreadcrumb?: any;
    Footer?: FooterData;
  };
  categories: {
    WedBliss: {
      templateComponents?: any;
      sections: {

                Header?: { variants?: { WedBlissHeader1?: HeaderData } };
        Hero?: { variants?: { WedBlissHero1?: HeroData } };
        AboutUs?: { variants?: { WedBlissAboutUs1?: AboutUsData } };
        Services?: { variants?: { WedBlissServices1?: ServicesData } };
        ServiceDetail?: { variants?: { [key: string]: ServiceDetailData } };
        Process?: { variants?: { WedBlissProcess1?: ProcessData } };
        WhatWeDo?: { variants?: { WedBlissWhatWeDo1?: ProcessData } };
        Faq?: { variants?: { WedBlissFaq1?: FaqData } };
        Gallery?: { variants?: { WedBlissGallery1?: GalleryData } };
        Testimonials?: { variants?: { WedBlissTestimonials1?: TestimonialsData } };
        contact?: { variants?: { WedBlissContact1?: ContactData } };
        enquiry?: { variants?: { WedBlissEnquiry1?: EnquiryData } };
        Counter?: { variants?: { WedBlissCounter1?: CounterData } };
        Team?: { variants?: { WedBlissTeam1?: TeamData } };
      };
    };
  };
}
