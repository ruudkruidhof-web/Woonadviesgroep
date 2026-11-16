# Onderliggende pagina's WoonAdvies v3, drie richtingen (16 november 2026)

Ruud over de proef van 11 november (Hypotheken en Werkwijze en kosten): "echt helemaal niet enthousiast", het past "totaal niet" bij de homepage. De onderliggende pagina's moeten "een supermooie verlenging" van de homepage zijn, "echt een onderdeel van de hoofdpagina, maar dan uitgesplitst", voor rust en eenheid. Hij wil drie ontwerpen voor Hypotheken en drie voor Werkwijze en kosten, als losse pagina's, om te kiezen. Akkoord op de drie richtingen hieronder gegeven op 16 november 2026 ("Ja, bouw ze").

Deze spec vervangt het idee "de map op tafel" uit `2026-11-11-woonadvies-v3-paginas-briefing.md` (vellen, haarlijnen, documenten). De wettelijke punten en tekstregels uit die briefing (paragraaf 6 en 7) blijven gelden.

## Diagnose

De proef sprak een andere taal dan de homepage. De homepage bestaat uit kamers met bogen, het cirkelpaar van hoofd en hart, grote gecentreerde uitspraken en een kleur per dienst. De proef bestond uit vlakke banden, haarlijnen en nagebouwde documenten, en las daardoor als een andere site.

## De basis: de grammatica van de homepage

Elke onderliggende pagina wordt gebouwd uit de bouwstenen van de homepage, met dezelfde letters (Hedvig Letters Serif en Instrument Sans), knoppen, maten en afwisseling van licht en donker.

- **Kamers.** Afgeronde, ingezette vlakken (`.kamer`, `data-kamer` opent ze bij binnenkomst), soms met een boog als bovenrand (symmetrisch zoals het tweeluik, of alleen links zoals de kamer Hypotheken).
- **Kleur per dienst.** Navy is Hypotheken, lichtblauw (`--sky-wash`) Pensioenen en de zakelijke kant, warm (`--wash-warm`) Verzekeringen en het gevoel, wit met rand Financiën.
- **Het cirkelpaar en hoofd en hart.** Twee dunne cirkels in de verhouding van het logo, Hoofd in `--sky-deep`, Hart in `--brown`; het tweeluik met het merk op de naad.
- **Gecentreerde uitspraken** in de kopletter, zoals de hero en "Een huis kopen is een zaak van hoofd en hart."
- **Vaste onderdelen.** De reviewstapel, de werkwijzekamer met grote cijfers, de lijn en het kostenvlak, het visitekaartje, de huislijn uit het merk en de footer.
- **Koppentrap.** Paginatitel groot, sectiekop `--h2`, onderdelen `--h3-kaart`, lopende tekst `--lead` of 17px. Geen tabs, keuzes of uitklappers (Ruud, 11 november).

## Drie richtingen

Elke richting wordt op beide pagina's uitgewerkt, zodat de keuze één systeem voor alle negen pagina's is. Mengen blijft mogelijk.

### 1. De kamer gaat open

Je klikte op de homepage een kamer aan, en de pagina is die kamer, opengeklapt. De pagina volgt de volgorde van de homepage met eigen inhoud.

**Hypotheken.** (1) De navy kamer van de homepage over de volle breedte, met de boog linksboven, de huislijn en de drie situaties als links naar hun kamer. Daaronder de bewijsregel zoals onder de hero. (2) Hoofd en hart over hoe we adviseren: links de zakelijke kant (opties, analyse, onafhankelijk), rechts persoonlijk contact met de review van Marit en Ruben, het merk op de naad. (3) De drie situaties als kamers onder één dak, met tekst, review en de knop "Bespreek je situatie". (4) De reviewstapel. (5) De werkwijzekamer met de kosten en de vergelijkingskaarten. (6) Contact met het visitekaartje.

**Werkwijze en kosten.** (1) De navy werkwijzekamer als opening, met de vier cijfers en de lijn als navigatie. (2) Elke stap een eigen kamer, onder elkaar als één gebouw, met per stap wat het kost, wat wij doen en wat we van je vragen. (3) Wat het kost als licht kostenvlak met het zegel, vast tarief en provisie, en de drie kaarten. (4) Een uitspraak van een klant. (5) Contact.

### 2. Hoofd en hart

Het merkidee stuurt elke pagina. De opening is het cirkelpaar van de hero rond de paginatitel; de pagina zelf is het tweeluik.

**Hypotheken.** (1) Cirkelpaar met Hoofd en Hart, de titel en de lead ertussen, de bewijsregel eronder. (2) Hoe we adviseren als groot tweeluik met het merk op de naad. (3) De situaties op de naad: per situatie links wat we doen, rechts hoe het voelde (review). (4) Wat het kost als tweeluik: links de vergoeding, de kaart en het onderhoud, rechts "vrijblijvend, daarin willen we graag investeren" en "ook daarna". (5) De overstap.

**Werkwijze en kosten.** (1) Cirkelpaar met de titel. (2) De route over de naad: links (hoofd) wat wij doen en wat het kost, rechts (hart) wat we van jou vragen, op de naad de cijfers en het huis. (3) Wat het kost: vast tarief en provisie als tweeluik met het zegel op de naad, de kaarten eronder. (4) Uitspraak van een klant en de overstap.

### 3. Rust, gecentreerd

Een kalm, gecentreerd verhaal zoals de hero en het moment van hoofd en hart. Grote uitspraken, een boog die elk hoofdstuk opent, één donkere kamer per pagina.

**Hypotheken.** (1) Gecentreerde opening. (2) De situaties in een lichtblauwe kamer met een brede boog, gecentreerd onder elkaar. (3) "Niet simpelweg de goedkoopste hypotheek." als uitspraak met de uitleg en de review van Marit en Ruben. (4) Wat het kost in een navy kamer met boog. (5) Gecentreerde overstap.

**Werkwijze en kosten.** (1) Gecentreerde opening met de vier stappen klein op een lijn. (2) De stappen als hoofdstukken in een lichtblauwe kamer, met een groot cijfer, en een lijn die met scrollen van stap naar stap loopt en eindigt in het huis. (3) Het kostenkaartje, een wit kaartje zoals het visitekaartje met het zegel, vast tarief, provisie en de kaarten. (4) De uitspraak van een klant in een navy kamer. (5) Overstap.

## Regels

- Teksten letterlijk uit de oogst en de content-JSON; opknippen en herordenen mag, verzinnen niet. Nieuwe koppen en bediening in `site/src/content/teksten/v3-proef.json`, met herkomst in `oogst/herkomst-v3.md`.
- Je-vorm, nooit een em-dash, bijna nooit een dubbele punt midden in een zin. HTML volgens `menselijke-html`.
- Verplicht op beide pagina's: de vergelijkingskaart Hypotheek (op Werkwijze alle drie) goed vindbaar bij de kosten, als pdf-link met één zin uitleg.
- Hergebruik van homepage-onderdelen mag de homepage niet veranderen; dat wordt met een pixelvergelijking nagekeken.
- Geen element krijgt het id `kennismaken` (dat is de popup).

## Opzet

- Zes pagina's in `site/src/pages/proef/` (`hypotheken-1` tot en met `-3`, `werkwijze-1` tot en met `-3`) plus een overzicht op `/proef`. Noindex via `Pagina.astro`, uit de sitemap, en niet in `scripts/naar-proefontwerp.mjs`.
- Onderdelen per richting in `site/src/components/v3/proef/`. Wat gekozen wordt, verhuist daarna naar de gewone onderdelen en vervangt `/hypotheken` en `/werkwijze-en-kosten`.
- De huidige proef (`/hypotheken`, `/werkwijze-en-kosten`) blijft staan tot Ruud kiest.

## Controle

Zelf kijken op 1440 en 390 op 100% zoom. Axe zonder ernstige punten op 1280 en 390, `soepel.mjs` desktop en mobiel, geen overloop en aanraakvlakken van minstens 44px op 320 en 390 in Chromium en WebKit, de popup vanuit elke knop en de ankers. De homepage blijft pixelgelijk. Daarna een Vercel-preview (niet `--prod`) met de link en schermafdrukken voor Ruud.
