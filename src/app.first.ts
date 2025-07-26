import fs from 'fs';
import { yarg } from './config/plugin/yargs.plugin';

const path = 'outputs'
const { b: base, l: limit, s: showTable } = yarg;
let outputMessage = '';
let headerMessage = `
==================================
            Tabla del ${base}
==================================\n`;

for (let i = 1; i <= limit; i++) {
  outputMessage += `${base} x ${i} = ${base * i}\n`;
};

outputMessage = headerMessage + outputMessage;

if (showTable) {
  console.log(outputMessage);
};

fs.mkdirSync(path, {recursive: true});

fs.writeFileSync(`${path}/tabla-${base}.txt`, outputMessage);
console.log('File created successfully!');
