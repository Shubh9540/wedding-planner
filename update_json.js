const fs = require('fs');
const path = './data/templates.json';
const data = JSON.parse(fs.readFileSync(path, 'utf8'));

const serviceDetail = data.categories.WedBliss.sections.ServiceDetail.variants;
const weddingTemplate = serviceDetail['wedding'];
const servicesGrid = data.categories.WedBliss.sections.ServicesGrid.variants.WedBlissServicesGrid1.services;

servicesGrid.forEach(service => {
  const id = service.url.split('/').pop();
  if (id !== 'wedding') {
    const words = service.title.split(' ');
    const title1 = words[0] || '';
    const title2 = words.slice(1).join(' ') || '';
    
    // Deep clone the wedding template
    const newVariant = JSON.parse(JSON.stringify(weddingTemplate));
    
    // Update specific fields
    newVariant.id = id;
    newVariant.title1 = title1;
    newVariant.title2 = title2;
    newVariant.description = `Your ${service.title.toLowerCase()} is more than just an event — it's a beautiful journey. We create magical experiences with flawless planning, creative themes, and personalized details that reflect your unique story.`;
    newVariant.imageMain = service.image;
    
    serviceDetail[id] = newVariant;
  }
});

// Remove old legacy variants
['wedbliss-installation', 'leak-detection', 'pipe-drain-cleaning', 'general-repair'].forEach(key => delete serviceDetail[key]);

fs.writeFileSync(path, JSON.stringify(data, null, 2));
console.log('Successfully updated templates.json with all 12 service variants!');
