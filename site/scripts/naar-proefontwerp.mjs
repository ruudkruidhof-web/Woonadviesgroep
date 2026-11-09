// Zet de gebouwde v3 (dist/) als proefontwerp in de offertebouwer, onder
// https://offertes.haagsebrandmerk.nl/proefontwerp/woonadvies-groep, achter het wachtwoord van de offerte.
// De site linkt vanaf de wortel (/hypotheken), dus elk pad krijgt het voorvoegsel, en de variantkiezer
// gaat eruit: Fris, Groen en v1 staan daar niet.
//
// Gebruik: npm run build && node scripts/naar-proefontwerp.mjs
// Daarna in ~/offertebouwer: node scripts/feedback-lader.mjs && node scripts/meldingsbalk.mjs, committen, deployen.

import { cp, mkdir, readdir, readFile, rm, stat, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const VOOR = '/proefontwerp/woonadvies-groep';
const dist = path.join(path.dirname(path.dirname(fileURLToPath(import.meta.url))), 'dist');
const doel = path.join(os.homedir(), 'offertebouwer', 'proefontwerp', 'woonadvies-groep');

const PAGINAS = ['hypotheken', 'pensioenen', 'verzekeringen', 'financien', 'onze-dienstverlening',
  'over-ons', 'werkwijze-en-kosten', 'contact', 'privacy-en-cookies'];
const LOS = ['_astro', 'beeld', 'favicon.png', 'logo.webp', 'logo-woordmerk.webp'];

const metVoorvoegsel = html => html
  .replace(/\b(href|src|action|poster)="\/(?!\/)([^"]*)"/g, (_, attr, rest) => `${attr}="${VOOR}/${rest}"`.replace(/\/"$/, '"'))
  .replace(/\bsrcset="([^"]*)"/g, (_, set) => `srcset="${set.replace(/(^|,\s*)\/(?!\/)/g, `$1${VOOR}/`)}"`)
  .replace(/(["'(])\/_astro\//g, `$1${VOOR}/_astro/`)
  .replace(/<link rel="(?:sitemap|canonical)"[^>]*>/g, '')
  .replace(/<div class="variant-switch"[\s\S]*?<\/div>/, '');

await rm(doel, { recursive: true, force: true });
await mkdir(doel, { recursive: true });
for (const naam of LOS) await cp(path.join(dist, naam), path.join(doel, naam), { recursive: true });

const htmls = [['index.html', 'index.html'], ...PAGINAS.map(p => [`${p}/index.html`, `${p}/index.html`])];
for (const [van, naar] of htmls) {
  const html = metVoorvoegsel(await readFile(path.join(dist, van), 'utf8'));
  await mkdir(path.dirname(path.join(doel, naar)), { recursive: true });
  await writeFile(path.join(doel, naar), html);
}

for (const naam of await readdir(path.join(doel, '_astro'))) {
  if (!naam.endsWith('.css')) continue;
  const pad = path.join(doel, '_astro', naam);
  await writeFile(pad, (await readFile(pad, 'utf8')).replace(/url\(\/(?!\/)/g, `url(${VOOR}/`));
}

const over = [];
for (const [, naar] of htmls) {
  const html = await readFile(path.join(doel, naar), 'utf8');
  const fout = html.match(/\b(?:href|src)="\/(?!proefontwerp\/woonadvies-groep|\/)[^"]*"/g);
  if (fout) over.push(`${naar}: ${[...new Set(fout)].join(' ')}`);
}
console.log(`${htmls.length} pagina's naar ${doel}`);
if (over.length) { console.error('Nog paden zonder voorvoegsel:\n' + over.join('\n')); process.exit(1); }
