# WoonAdvies Groep, v3 hero H en de onderliggende pagina's

Ontwerp van 5 november 2026. De hero is door Ruud goedgekeurd ("akkoord" op de bijgewerkte schets H). De paginalijst en de prijzen zijn voorgelegd in `docs/2026-11-05-overzicht-site-v3.md` maar nog niet expliciet bevestigd: vraag dat eerst, bouw intussen de hero. Alles wat hier niet staat, volgt de specs van 4 november (`2026-11-04-woonadvies-v3-homepage-design.md` en `2026-11-04-woonadvies-v3-verbeterronde-design.md`).

## Wat Ruud wil, in zijn woorden samengevat

Minimalistisch, strak en goed doordacht, zakelijk en een tikje deftig, rust uitstralen maar niet saai, met een mooie micro-animatie en een knop die goed werkt. **De klant wil hun foto niet prominent of centraal in de hero.** Afgekeurd en waarom (schetsen in `assets/2026-11-05-hero-h/afgekeurd-*.png`):

- B, navy kamer met grote foto: te donker en te druk.
- C, eerste versie met drie grote bogen en het tweeluik: nikszeggend, te veel hoofd en hart.
- D, fotootje in de zin: raar.
- E, F, G, grote foto (aan de rand, in een boog, panorama): te saai, en de foto mag niet prominent.
- H eerste versie: goed idee, maar de lijnen liepen door de tekst, rommelig.
- I (briefhoofd) en J (lijn van overweging tot handtekening): niet gekozen.

## Hero H, "hoofd en hart als twee lijnen"

Referentie: `assets/2026-11-05-hero-h/schets.html` (open in de browser, de animatie loopt mee) en `eindstand-1440.png`.

- **Opbouw, symmetrisch en gecentreerd.** Titel "Financiële rust voor nu en in de toekomst." (Hedvig, circa 72px op 1440), daaronder de lead "Onafhankelijk financieel dienstverlener in Rotterdam. Vanaf de eerste overweging tot aan je handtekening bij de notaris." (let op het punt over onafhankelijkheid hieronder), daaronder de knop "Plan een vrijblijvend gesprek" (opent de popup) en de tekstlink "Bel (010) 81 88 222".
- **Twee dunne cirkels** achter de tekst, met exact de verhouding van de logocirkels (straal 161, middelpunten 225,7 uit elkaar op de 512-schaal). Links in `--sky-deep` (opacity circa 0,6), rechts in `--brown` (circa 0,55), lijndikte 1,25px. Op 1440x900 straal 340px, dus 1157 bij 680px. Op het linker- en rechteruiterste staat in Hedvig "Hoofd" (blauw) en "Hart" (bruin), op de lijn, met papier erachter zodat de lijn eromheen breekt.
- **De tekst blijft vrij.** De cirkels raken elkaar net boven de titel en net onder de knop; op die twee raakpunten staat een klein navy punt (7px). Een elliptisch masker (in de schets `radial-gradient(ellipse 350px 215px at 50% 51%, transparent 80%, #000 100%)`) laat de lijnen zacht oplossen voor ze de tekst raken. Nergens mag een lijn door een letter of door de knop lopen; controleer dat op elke schermmaat.
- **Bewijsregel** onderaan de hero, één rustige regel: 5,0 met sterren Google, 10/10 Advieskeuze, AFM geregistreerd, en een vierde punt over onafhankelijkheid alleen in afgebakende vorm (zie hieronder).
- **Micro-animatie, één keer bij laden.** Beide cirkels zijn als pad getekend vanaf het bovenste raakpunt: links tegen de klok in, rechts met de klok mee, eerst de buitenste boog, dan de binnenste (paden staan in de schets). `stroke-dashoffset` van 1 naar 0 in 2,6 s met `cubic-bezier(.65,0,.35,1)`; de lijnen beginnen dus samen boven, tekenen naar buiten en komen onder de knop weer samen. Titel, lead en knop komen eerst (14px omhoog en vervagen, 0,15 tot 0,45 s), Hoofd en Hart verschijnen als de lijn hen passeert (circa 1,5 s), het onderste punt en de bewijsregel aan het eind. Bij `prefers-reduced-motion` staat alles direct stil in de eindstand.
- **Geen foto in de hero.** De echte foto van Dennis en Marijke gaat naar Over ons en de popup (en blijft daar bescheiden).
- **Responsief.** Ontwerp de cirkels met een maat die meeschaalt met de kleinste van breedte en hoogte, zodat de hero-poort haalt (1280x720, 1512x750, 1440x900, 390x844, 430x932). Mobiel: de tekst staat gecentreerd; de cirkels mogen links en rechts buiten beeld vallen (alleen de buitenbogen met Hoofd en Hart aan de randen zichtbaar), of ze schuiven onder elkaar als een kleinere figuur boven of onder de tekst. Kies wat het rustigst is en laat het Ruud zien.
- Vervangt de huidige hero in `site/src/components/v3/Hero.astro`; de hero-parallax in `Beweging.astro` vervalt.

## Onafhankelijkheid afbakenen (nieuw, belangrijk)

Hun eigen vergelijkingskaarten (`oogst/pdf/`, alle drie samengesteld 29 september 2023) zeggen per productgroep:

- Hypotheek en verzekeringen bij de hypotheek: "Ja, onafhankelijk".
- Risico's afdekken: "Ja, onafhankelijk".
- Vermogen opbouwen (spaarverzekering, lijfrente): "Nee, niet onafhankelijk" ("Wij nemen een geselecteerd aantal producten mee in onze vergelijking en advies").

Onafhankelijk advies is per productgroep geregeld (art. 86f Bgfo). Daarom: geen algemene claim meer zonder afbakening. Voorstel, ter bevestiging bij Ruud en Marijke: in de hero-lead "Onafhankelijk financieel dienstverlener" vervangen of afbakenen, het bewijspunt wordt "Onafhankelijk hypotheekadvies", in hoofd en hart blijft "Woonadvies Groep is onafhankelijk" alleen met de toevoeging dat het over hypotheken en verzekeringen gaat, en de pagina Pensioenen zegt het niet. Alles uit de oogst; geen eigen formuleringen zonder herkomstlabel.

## Onderliggende pagina's

Zoals voorgesteld in `docs/2026-11-05-overzicht-site-v3.md` (paragraaf 3): vier dienstpagina's (gids, de kamer van de homepage als opening), Werkwijze en kosten (route plus prijskaart), Over ons (Dennis en Marijke elk met de reviews die hen noemen), Contact (thuis, kantoor of video als drie mogelijkheden), Onze dienstverlening (registraties en klachtenroute), Privacy en cookies (ons standaardsjabloon in je-vorm plus hun cookietekst). Onder `/v3/...`, noindex, buiten de sitemap; de placeholder `/v3/volgt-na-opdracht` vervalt en menu en footer wijzen naar de echte pagina's.

Verplicht door de AFM: de vergelijkingskaarten staan goed vindbaar op de pagina's over dienstverlening, kosten en het product zelf, en ook in de kostenband op de homepage (nu alleen in de footer). De kaarten horen bij: Hypotheek bij Hypotheken, Risico's afdekken bij Verzekeringen, Vermogen opbouwen bij Pensioenen, alle drie bij Werkwijze en kosten en Onze dienstverlening.

## Nieuwe oogst

`oogst/pdf/` bevat de vier pdf's van hun site met de tekst ernaast (`.txt`): de drie vergelijkingskaarten (2023) en de dienstenwijzer (mei 2015, verouderd: oud telefoonnummer 010 4219760 en nog de Wet bescherming persoonsgegevens). Die tekst is hun eigen materiaal en mag op de site, met een herkomstlabel in `oogst/herkomst-v3.md`. Gemiddelde prijzen: hypotheek € 2.450 tot € 3.450, risico's afdekken en vermogen opbouwen € 395 (consument) of € 595 (ondernemer); prijzen alleen tonen na Ruuds akkoord.

## Open beslissingen

1. Paginalijst akkoord? (Ruud)
2. Gemiddelde prijzen op de site? (Ruud, daarna bevestigen bij Marijke)
3. Afgebakende tekst over onafhankelijkheid (Ruud, daarna Marijke)
4. De vragen voor Marijke uit het overzicht, paragraaf 4.

## Poorten

Zoals in de verbeterronde: hero-poort op vijf maten (met de extra eis dat geen lijn door tekst loopt), mobiel-poort met WebKit, contentpoort, de vier kwaliteitspassen, axe nul fouten en `soepel.mjs` groen op de productiebuild, eigen kijk op 100%, deploy vanuit `site/`, vastleggen in CLAUDE.md, vault en logboek.
