const fs = require('fs');

// 1. Update data/templates.json
const jsonPath = 'data/templates.json';
const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
if (data.categories.WedBliss.sections.Process) {
  delete data.categories.WedBliss.sections.Process;
}
fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2));

// 2. Update types/templates.types.ts
const typesPath = 'types/templates.types.ts';
let typesContent = fs.readFileSync(typesPath, 'utf8');
typesContent = typesContent.replace(/export interface ProcessItem/g, 'export interface WhatWeDoItem');
typesContent = typesContent.replace(/export interface ProcessData/g, 'export interface WhatWeDoData');
typesContent = typesContent.replace(/features\?: ProcessItem\[\];/g, 'features?: WhatWeDoItem[];');
typesContent = typesContent.replace(/steps\?: ProcessItem\[\];/g, 'steps?: WhatWeDoItem[];');
typesContent = typesContent.replace(/Process\?: \{ variants\?: \{ WedBlissProcess1\?: ProcessData \} \};/g, '');
typesContent = typesContent.replace(/WhatWeDo\?: \{ variants\?: \{ WedBlissWhatWeDo1\?: ProcessData \} \};/g, 'WhatWeDo?: { variants?: { WedBlissWhatWeDo1?: WhatWeDoData } };');
fs.writeFileSync(typesPath, typesContent);

// 3. Update components/sections/WhatWeDoSection.tsx
const whatWeDoPath = 'components/sections/WhatWeDoSection.tsx';
let whatWeDoContent = fs.readFileSync(whatWeDoPath, 'utf8');
whatWeDoContent = whatWeDoContent.replace(/import \{ ProcessData \} from '@\/types\/templates\.types';/g, "import { WhatWeDoData } from '@/types/templates.types';");
whatWeDoContent = whatWeDoContent.replace(/data\?: ProcessData/g, 'data?: WhatWeDoData');
fs.writeFileSync(whatWeDoPath, whatWeDoContent);

console.log('Cleanup complete!');
