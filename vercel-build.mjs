import { cp, mkdir, rm } from 'node:fs/promises';

// A Vercel entrega este diretório como arquivos estáticos; não há função de servidor.
await rm('vercel-dist', { recursive: true, force: true });
await mkdir('vercel-dist', { recursive: true });
await cp('public', 'vercel-dist', { recursive: true });
console.log('Build estático da Vercel pronto em vercel-dist');
