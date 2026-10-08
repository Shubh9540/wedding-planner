const fs = require('fs');

const path = 'types/templates.types.ts';
let content = fs.readFileSync(path, 'utf8');

// 1. Make ServiceDetailData fields optional
content = content.replace(/features: ServiceDetailFeature\[\];/g, 'features?: ServiceDetailFeature[];');
content = content.replace(/processTitle: string;/g, 'processTitle?: string;');
content = content.replace(/processSteps: ServiceDetailProcessStep\[\];/g, 'processSteps?: ServiceDetailProcessStep[];');
content = content.replace(/sidebar: \{/g, 'sidebar?: {');

// 2. Fix 'contact' to 'Contact' in WedBlissTemplateData
content = content.replace(/contact\?: \{ variants\?: \{ WedBlissContact1\?: ContactData \} \};/g, 'Contact?: { variants?: { WedBlissContact1?: ContactData } };');

// 3. Add WedBlissGalleryGrid1 to Gallery
content = content.replace(/Gallery\?: \{ variants\?: \{ WedBlissGallery1\?: GalleryData \} \};/g, 'Gallery?: { variants?: { WedBlissGallery1?: GalleryData, WedBlissGalleryGrid1?: GalleryData } };');

fs.writeFileSync(path, content);
console.log('Fixed types.ts!');
