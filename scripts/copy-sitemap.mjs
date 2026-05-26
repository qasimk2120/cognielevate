import { copyFile, access } from 'node:fs/promises';
import { constants } from 'node:fs';

const source = new URL('../dist/sitemap-0.xml', import.meta.url);
const target = new URL('../dist/sitemap.xml', import.meta.url);

await access(source, constants.R_OK);
await copyFile(source, target);

console.log('Copied dist/sitemap-0.xml to dist/sitemap.xml');
