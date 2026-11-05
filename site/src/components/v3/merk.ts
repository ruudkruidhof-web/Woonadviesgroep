import reviews from '../../content/reviews.json';

// Het huis uit het beeldmerk (zelfde pad als in Merk.astro), voor lijntekeningen.
export const huis = 'M256 108 L480 330 L364 450 L359 449 L359 352 L366 348 L395 346 L390 336 L256 206 L122 336 L117 346 L146 348 L153 352 L153 449 L148 450 L32 330 Z';
export const huisViewBox = '20 96 472 366';

type Review = { id: string; naam: string; bron: string; wanneer?: string; tekst: string };

const alle: Review[] = [
  ...reviews.uitgelicht,
  ...reviews.marquee,
  ...reviews.items.map((r) => ({ id: r.id, naam: r.naam, bron: 'Google', tekst: r.tekst })),
];

export const review = (id: string) => {
  const r = alle.find((x) => x.id === id);
  if (!r) throw new Error(`Review ${id} bestaat niet`);
  return r;
};
