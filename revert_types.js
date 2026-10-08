const fs = require('fs');

const path = 'types/templates.types.ts';
let content = fs.readFileSync(path, 'utf8');

// Revert to required
content = content.replace(/features\?: ServiceDetailFeature\[\];/g, 'features: ServiceDetailFeature[];');
content = content.replace(/processSteps\?: ServiceDetailProcessStep\[\];/g, 'processSteps: ServiceDetailProcessStep[];');
content = content.replace(/sidebar\?: \{/g, 'sidebar: {');

fs.writeFileSync(path, content);
console.log('Reverted types back to required!');
