const fs = require('fs');
const path = './data/templates.json';
const data = JSON.parse(fs.readFileSync(path, 'utf8'));

// 1. Update servicesLinks in Footer to match the first 6 actual services
const actualServices = data.categories.WedBliss.sections.ServicesGrid.variants.WedBlissServicesGrid1.services;

data.common.Footer.servicesLinks = actualServices.slice(0, 6).map((s, index) => ({
  id: `sl${index + 1}`,
  label: s.title,
  url: s.url
}));

// 2. Update quickLinks in Footer to match our actual project pages
data.common.Footer.quickLinks = [
  { id: 'ql1', label: 'Home', url: '/' },
  { id: 'ql2', label: 'About Us', url: '/about' },
  { id: 'ql3', label: 'Our Services', url: '/services' },
  { id: 'ql4', label: 'Gallery', url: '/gallery' },
  { id: 'ql5', label: 'FAQ', url: '/faq' },
  { id: 'ql6', label: 'Contact Us', url: '/contact' }
];

// 3. Update FAQ links to all point to /faq
data.common.Footer.faqLinks.forEach(link => {
  link.url = '/faq';
});

fs.writeFileSync(path, JSON.stringify(data, null, 2));
console.log('Successfully updated Footer links!');
