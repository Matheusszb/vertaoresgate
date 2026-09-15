import { cp, mkdir, rm, writeFile } from 'node:fs/promises';
await rm('dist', { recursive: true, force: true });
await mkdir('dist', { recursive: true });
await cp('public', 'dist', { recursive: true });
await mkdir('dist/server', { recursive: true });
await writeFile('dist/server/index.js', "export default { async fetch(request, env) { return env.ASSETS.fetch(request); } };\n");
console.log('Site pronto em dist');
