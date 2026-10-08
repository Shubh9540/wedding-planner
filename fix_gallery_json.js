const fs = require('fs');
const path = './data/templates.json';
const data = JSON.parse(fs.readFileSync(path, 'utf8'));

// The gallery section data
const galleryVariants = data.categories.WedBliss.sections.Gallery.variants;

// Copy WedBlissGallery1 to WedBlissGalleryGrid1
galleryVariants.WedBlissGalleryGrid1 = JSON.parse(JSON.stringify(galleryVariants.WedBlissGallery1));

// Now restore WedBlissGallery1 to just 6 images for the homepage
galleryVariants.WedBlissGallery1.images = galleryVariants.WedBlissGallery1.images.slice(0, 6);
galleryVariants.WedBlissGallery1.description = "Explore our beautiful moments from past events.";
galleryVariants.WedBlissGallery1.button = { text: "View All", url: "/gallery" };

fs.writeFileSync(path, JSON.stringify(data, null, 2));
console.log('Successfully fixed Gallery JSON data!');
