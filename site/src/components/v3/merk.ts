import reviews from '../../content/reviews.json';
import kaarten from '../../content/v3-vergelijkingskaarten.json';
import paginas from '../../content/teksten/v3-paginas.json';

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


// De rijen van de kostenkaart, uit de vergelijkingskaart van de dienst en de eerste stap van de werkwijze.
export const kostenrijen = (id: string) => {
  const kaart = kaarten.kaarten.find((k) => k.id === id)!;
  const k = paginas.kaart;
  const start = paginas.werkwijze.stappen[0];
  return [
    { label: start.titel, waarde: start.kosten.kort },
    { label: k.kosten, waarde: k.kosten_tekst },
    { label: k.onderhoud, waarde: kaart.onderhoud_kort },
    { label: k.onafhankelijk, waarde: kaart.onafhankelijk ? k.ja : kaart.vergelijking },
  ];
};
