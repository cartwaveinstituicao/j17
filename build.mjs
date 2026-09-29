import fs from 'node:fs';
import path from 'node:path';
const source = path.resolve('public');
const target = path.resolve('dist');
fs.rmSync(target, { recursive: true, force: true });
fs.cpSync(source, target, { recursive: true });
console.log(`Built ${fs.readdirSync(target).length} top-level entries in ${target}`);
