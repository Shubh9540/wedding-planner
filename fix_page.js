const fs = require('fs');

const path = 'app/services/[id]/page.tsx';
let content = fs.readFileSync(path, 'utf8');

// Replace baseTemplate typing
content = content.replace(/const baseTemplate = sectionData\.ServiceDetail\?\.variants\?\.wedding \|\| \{\};/g, "const baseTemplate = (sectionData.ServiceDetail?.variants?.wedding || {}) as any;");

// Optional chaining fixes
content = content.replace(/serviceDetailData = \{/g, "serviceDetailData = {\n    ...(serviceDetailData || {}),");

fs.writeFileSync(path, content);
console.log('Fixed page.tsx!');
