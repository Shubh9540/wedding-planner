const fs = require('fs');
const path = './data/templates.json';
const data = JSON.parse(fs.readFileSync(path, 'utf8'));

const images = [];

// Page 1: 1 to 9
for (let i = 1; i <= 9; i++) {
  images.push({
    id: `gal${i}`,
    image: `/gallery/${i}.webp`,
    alt: `Gallery Image ${i}`
  });
}

// Page 2: 9 down to 1
for (let i = 9; i >= 1; i--) {
  images.push({
    id: `gal_p2_${i}`,
    image: `/gallery/${i}.webp`,
    alt: `Gallery Image ${i}`
  });
}

// Update the JSON
data.categories.WedBliss.sections.Gallery.variants.WedBlissGallery1.images = images;
data.categories.WedBliss.sections.Gallery.variants.WedBlissGallery1.description = 'Explore our gallery and get inspired by the beautiful events we have planned and created for our clients. Every event is a unique story, filled with love, joy and unforgettable memories.';

fs.writeFileSync(path, JSON.stringify(data, null, 2));
console.log('Successfully updated gallery images!');
