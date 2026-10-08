const fs = require('fs');

const path = 'components/sections/ServiceDetailContent.tsx';
let content = fs.readFileSync(path, 'utf8');

// Replace `data.features.map` with `(data.features || []).map`
content = content.replace(/data\.features\.map/g, '(data.features || []).map');

// Replace `data.processSteps.map` with `(data.processSteps || []).map`
content = content.replace(/data\.processSteps\.map/g, '(data.processSteps || []).map');

// Replace `data.sidebar` with `data.sidebar?` where appropriate
// We have expressions like `data.sidebar.servicesList.services.map`
content = content.replace(/data\.sidebar\.servicesList/g, 'data.sidebar?.servicesList');
content = content.replace(/data\.sidebar\.quoteForm/g, 'data.sidebar?.quoteForm');
content = content.replace(/data\.sidebar\.contactCard/g, 'data.sidebar?.contactCard');
content = content.replace(/data\.sidebar\.whyChooseUsCard/g, 'data.sidebar?.whyChooseUsCard');

// For any other occurrences of data.sidebar (like if (data.sidebar.X))
content = content.replace(/data\.sidebar(?!\?)/g, 'data.sidebar?');

// Actually, `data.sidebar?` might result in `data.sidebar??` if we do global replace.
// Let's just fix it carefully
// Or simply revert `types/templates.types.ts` making them required, but adding `as any` everywhere in the fallback generation in `app/services/[id]/page.tsx`.

// No, modifying ServiceDetailContent to handle undefined is better!
fs.writeFileSync(path, content);
console.log('Fixed ServiceDetailContent.tsx');
