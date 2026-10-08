const fs = require('fs');
const path = './data/templates.json';
const data = JSON.parse(fs.readFileSync(path, 'utf8'));

if (!data.categories.WedBliss.sections.Contact) {
  data.categories.WedBliss.sections.Contact = { variants: {} };
}

data.categories.WedBliss.sections.Contact.variants.WedBlissContact1 = {
  subtitle: 'GET IN TOUCH',
  title1: 'Contact',
  title2: 'Us',
  description: 'We\'d love to hear from you! Whether you\'re planning a wedding, a corporate event, a birthday celebration or any special occasion, our team is here to help you create unforgettable moments.',
  contactInfo: {
    phoneTitle: 'Phone',
    phone: '+1 000000000\nSupport: +1 000000000',
    emailTitle: 'E-Mail',
    email: 'info@xyz.com\nsupport@xyz.com',
    addressTitle: 'Address',
    address: '123 Main St,\nNew York, NY, USA',
    hoursTitle: '',
    hoursLine1: '',
    hoursLine2: ''
  },
  form: {
    title: 'Get The Party Started',
    description: 'Share your event details with us and our team will get back to you as soon as possible with the best suggestions and a customized plan.',
    buttonText: 'Make A Reservation',
  },
  image: '/service/weeding.webp',
  mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin'
};

fs.writeFileSync(path, JSON.stringify(data, null, 2));
console.log('Successfully added Contact JSON!');
