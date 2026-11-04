# WoonAdvies Groep, homepage v3 (richting A, hoofd en hart)

Ontwerp goedgekeurd door Ruud op 4 november 2026. Dit document is de bouwopdracht voor `/v3`.

## Doel

Een homepage die Fris en Groen naar een hoger niveau tilt en voor WoonAdvies Groep werkt als visitekaartje. Bezoekers komen via via: ze hebben de naam van een vriend gekregen en willen binnen een halve minuut bevestigd zien wie dit zijn, of ze te vertrouwen zijn, of ze iemand in hun situatie helpen, wat het kost en hoe ze hen bereiken. De klant beoordeelt zelf een partij op precies die manier ("hoe professioneel ziet de website eruit" plus de Google-reviews, transcript kennismaking 24 juli 2026). De site moet onderhoudsarm zijn.

Toets voor elke keuze: zegt de klant "dit zijn wij, maar dan veel beter", en ziet een bezoeker in één oogopslag waar hij naar kijkt?

## Harde eisen

- **Rust en witruimte.** Ruime sectie-afstanden, weinig elementen per scherm, geen vlak dat vol voelt.
- **Duidelijke hiërarchie.** Per sectie één primair element (kop of typografisch moment), één ondersteunende laag (lead), de rest ondergeschikt. Hooguit één gevulde knop per scherm; tweede acties zijn tekstlinks of omlijnde knoppen.
- **Contrast.** In schaal (display minstens 4,5 keer de broodtekst, H2 minstens 2,5 keer), in waarde (licht canvas met één diepe navy band) en in kleur (alle tekst minstens 4,5:1, grote tekst en betekenisdragende lijnen minstens 3:1).
- **Meteen duidelijk waar je naar kijkt.** Elke H2 benoemt wat de sectie is. Waar een eigen zin van de klant sfeervoller is, wordt die de lead of het typografische moment, niet de enige aanduiding.
- **Plezierig voor het oog.** Rustige verhoudingen, uitgelijnd op één grid, koppen die netjes breken (`text-wrap: balance`), alinea's op een leesbare maat (maximaal circa 62 tekens).
- Geen italics, geen uppercase kickers of eyebrows, geen rijen identieke kaartjes, geen em-dashes, geen foto met donkere laag als sectieachtergrond.
- Alle tekst komt uit de oogst (`oogst/teksten.md`), de reviews (`src/content/reviews.json`), de bedrijfsgegevens (`src/content/bedrijf.json`) of wat de klant in de kennismaking zelf noemde. Combineren, inkorten en herordenen mag. Verzinnen niet.
- Je-vorm, zoals Fris (keuze u of je ligt nog bij de klant).
- Het logo is altijd het echte: `public/logo.webp` in de header, het exacte vectormerk uit `Merk.astro` elders.

## Ontwerp-DNA

Afgeleid uit het logo en uit de eigen zin van de klant: "Bij een hypotheek gaat het er om samen met u de emotie en het gevoel te verbinden met de zakelijke kant."

1. **Kleur met betekenis.** Blauw is het hoofd: de zakelijke kant, dus cijfers, scores, registraties, vergelijken en onafhankelijkheid. Bruin is het hart: mensen, citaten, persoonlijk contact, bij je thuis. Navy is het huis: het resultaat, de knoppen, de route, de donkere band. Deze rolverdeling geldt op de hele pagina, zodat kleur iets vertelt in plaats van versiert.
2. **De dakhoek.** De 45-gradenhoek van het dak uit het beeldmerk is het enige richtingsteken: pijl in links, opsommingsteken, actieve markering in het dienstenregister, eindpunt van de route.
3. **De cirkelboog.** Beeldkaders volgen de boog van de logocirkels (straal 161 op een breedte van 512, dus een flauwe boog, geen halve cirkel). Eén vorm, consequent. Geen losse bollen die op het logo lijken.
4. **Het huis als uitsparing.** Eén keer, aan het eind van de werkwijze-route: het huis uit het exacte merk.

## Design-systeem

### Kleur (bestaande tokens, rollen voor v3)

| Rol | Token | Waarde | Contrast op papier |
| --- | --- | --- | --- |
| Canvas | `--paper` | #fbfaf8 | |
| Koppen | `--navy` | #003850 | 11,97 |
| Broodtekst | `--navy-soft` | #2c4f63 | 8,37 |
| Hoofd, tekst en lijnen | `--sky-deep` | #35709e | 5,08 (4,68 op sky-wash) |
| Hoofd, vlakken | `--sky-wash` | #e9f2f9 | |
| Hoofd, decoratief (nooit tekst op licht) | `--sky` | #6aabda | 2,38 |
| Hart, tekst en lijnen | `--brown` | #6a4d47 | 7,28 (6,51 op wash-warm) |
| Hart, vlakken | `--wash-warm` | #f5ece5 | |
| Huis, knoppen en donkere band | `--navy` | #003850 | wit erop 12,49 |
| Tekst op navy | wit, `--sky-wash`, `--sky` | | 12,49 / 11,02 / 5,03 |

Secundaire grijze tekst niet lichter dan #5f7684 (4,56 op papier).

### Typografie

- Koppen: Ibarra Real Nova Variable. Tekst: Nunito Sans Variable. Beide al geïnstalleerd.
- Display (hero-titel, hoofd-en-hartzin): `clamp(2.75rem, 2rem + 3.6vw, 5rem)`, regelhoogte 1,04, letterafstand -0,01em.
- H2: `clamp(2.125rem, 1.6rem + 2vw, 3.25rem)`, regelhoogte 1,1.
- H3: `clamp(1.375rem, 1.2rem + 0.6vw, 1.75rem)`, regelhoogte 1,2.
- Lead: `clamp(1.1875rem, 1.1rem + 0.35vw, 1.3125rem)`, regelhoogte 1,55.
- Broodtekst: 1,0625rem, regelhoogte 1,65, maat maximaal 38rem.
- Klein: 0,875rem. Cijfers (scores, telefoon) met `tabular-nums`.
- Koppen `text-wrap: balance`, alinea's `text-wrap: pretty`.

### Ruimte en grid

- Basis 8px. Inhoudsbreedte `--maat` (1160px). Twaalf kolommen, goot 2rem op desktop.
- Sectie-afstand: `clamp(5.5rem, 3rem + 8vw, 10rem)` boven en onder.
- Kop naar lead 1,25rem, lead naar inhoud 3rem, tussen groepen binnen een sectie 4rem.
- Ritme van vlakken: hero papier, hoofd en hart papier, diensten papier, klanten wash-warm, werkwijze navy, contact papier, footer navy.

### Vorm en diepte

- Radius 14px voor vlakken en kaarten, knoppen volledig rond.
- Schaduw alleen op objecten die boven het vlak zweven (naamkaartje, visitekaartje): zacht en laag, nooit op gewone blokken.
- Lijnen 1px in `--line` (#dbe6ef); betekenisdragende lijnen in blauw of bruin.

## De pagina

### Header

Echt logo (`logo.webp`), menu: Diensten (dropdown), Werkwijze en kosten, Over ons, Contact. Rechts het telefoonnummer als omlijnde knop. Het dropdownmenu Diensten toont de vier diensten met per dienst de situaties uit sectie 3, volledig vormgegeven. Werkwijze en Contact zijn ankers op de pagina. Over ons en de dienstlinks gaan naar één nette pagina `/v3/volgt-na-opdracht` (noindex) die zegt dat deze pagina na opdracht volgt, met terugknop en contact. Bij omlaag scrollen schuift de header weg, bij omhoog komt hij terug. Mobiel: menuknop, menu als popover dat in en uit animeert (`transition` op `display` en `overlay` met `allow-discrete` plus `@starting-style`), sluit op Escape, zet de pagina vast, past in één scherm.

### 1. Hero (precies één schermhoogte, `100svh`)

- Doel: in één blik wie, wat, waar, bewijs en de ene actie.
- Links:
  - H1 "Financiële rust voor nu en in de toekomst." (letterlijk).
  - Lead "Onafhankelijk financieel dienstverlener in Rotterdam. Vanaf de eerste overweging tot aan je handtekening bij de notaris nemen wij je financiële zorgen uit handen." (samengesteld uit home en werkwijze).
  - Knop "Plan een vrijblijvend gesprek" (opent de kennismaak-popup, zie Techniek), daarnaast tekstlink "Bel (010) 81 88 222".
  - Bewijsregel: Google 5,0 (11 reviews), Advieskeuze 10 (44 reviews), AFM-geregistreerd. Klein, in blauw, met bronlinks.
- Rechts: de echte foto van Dennis en Marijke, opgeschaald, licht warm gecorrigeerd, niet uitgeknipt, in een kader met de cirkelboog als bovenrand. Overlappend een klein naamkaartje: het vectormerk, "Dennis & Marijke", "sinds 2010".
- Terugval als de foto groot te veel als kiekje oogt (beslissen na de eerste visuele check): een documentair Rotterdams straatbeeld volgens `references/beeldregie.md` als hoofdbeeld, met het portret als kleiner element op het naamkaartje.
- Mobiel: titel, lead, knop, bellen en bewijsregel boven de vouw; de foto als lage band met de cirkelboog bovenaan of direct eronder, zolang de vier kernonderdelen in beeld blijven.
- Vervalt t.o.v. Fris: de sticker 1.000+, het draaiende zegel, de USP-balk, de onderstreping onder "rust".

### 2. Hoofd en hart

- Doel: het verhaal en de kracht van het kantoor in één beeld.
- Display-zin "Een huis kopen is een zaak van hoofd en hart." met lead "Bij een hypotheek gaat het er om samen met jou de emotie en het gevoel te verbinden met de zakelijke kant." (letterlijk).
- Midden: het exacte vectormerk, groot (circa 240 tot 300px).
- Links, onder het woord "Hoofd" in blauw, drie korte regels:
  - "Woonadvies Groep is onafhankelijk. We zijn vrij om aanbieders van financiële producten te kiezen."
  - "Aan de hand van een aantal financiële scenario's kijken we of het beter en misschien wel goedkoper kan."
  - "Wij adviseren je aanbieders die zowel een goede prijs als goede voorwaarden hanteren."
- Rechts, onder het woord "Hart" in bruin:
  - "Persoonlijk contact is bij ons prioriteit nummer één."
  - "Dat kan bij jou thuis, overdag of 's avonds."
  - "Ook daarna zijn we er voor je. We denken vooruit en ontzorgen!"
- Onder het merk, klein in navy: "Samen komen we tot een passende en praktische financiële oplossing." (samengesteld uit home).
- Beweging: bij binnenkomst schuiven beide kolommen een stukje naar het merk toe en tekenen twee dunne lijnen (blauw en bruin) zich naar het huis. Eén keer, niet gescrubd.
- Mobiel: zin, merk, blok Hoofd, blok Hart, slotregel.
- Vervangt verhaal, manifest en USP-balk uit Fris.

### 3. Onze diensten

- H2 "Onze diensten", lead "Alle kennis hebben we onder één dak. In een totaalpakket, als je dat wenst." (letterlijk).
- Links het register: de vier diensten groot in Ibarra, onder elkaar. De actieve dienst krijgt de dakhoek als markering en navy; de andere staan rustig in `--navy-soft`.
- Rechts het paneel van de gekozen dienst: een ingekorte versie van de dienstpagina (twee à drie zinnen), de situaties als lijst met de dakhoek, link "Meer over hypotheken" en tekstlink "Bespreek je situatie" (opent de popup).
- Situaties:
  - Hypotheken: je eerste woning, door naar een volgende woning, relatiebreuk of scheiding, je rentevaste periode loopt af (genoemd door de klant in de kennismaking).
  - Pensioenen: wat heb je nodig als je stopt met werken, en hoe bouw je dat op (dienstpagina).
  - Verzekeringen: woning en inboedel, aansprakelijkheid, overlijdensrisico (dienstpagina).
  - Financiën: een krediet, sparen, een schuld aflossen, een schenking (dienstpagina).
- Interactie: toegankelijke tablist (pijltjestoetsen, `aria-selected`), paneelwissel met korte crossfade en hoogte-animatie. Hover op een dienst toont al een voorproefje van de paneelkop.
- Geen beeld. Typografie en witruimte dragen deze sectie.
- Mobiel: uitklaplijst met dezelfde inhoud, één tegelijk open.
- Vervangt het dienstenblok en de voor-wie-kaartjes uit Fris.

### 4. Wat klanten zeggen (vlak wash-warm)

- H2 "Wat klanten zeggen".
- Opbouw zoals in Fris goedgekeurd: scores links, uitgelicht citaat midden, rustige stroom rechts.
- Scores in blauw met bron en link: Google 5,0 uit 11, Advieskeuze 10 uit 44.
- Uitgelicht: het citaat van Sofie (Advieskeuze, augustus 2025) dat beiden noemt, groot in Ibarra, met een groot aanhalingsteken in bruin. Kleine ronde uitsnede van de adviseursfoto erbij ("over wie het gaat").
- Stroom: verticaal, langzaam, pauzeert bij hover en focus, met vervaging boven en onder. Kaarten wit met bronlabel. Bij reduced motion een statische lijst van drie.
- Mobiel: scores, citaat, daarna een horizontaal veegbare rij.

### 5. Onze werkwijze (navy band)

- H2 "Onze werkwijze", lead "Je financiën zijn een zaak van jou en eventueel je partner. Als je met een kantoor in zee gaat, is vertrouwen het uitgangspunt." (letterlijk, ingekort).
- Eén horizontale route met drie stations en een eindpunt: Kennismaken, Verdiepen, Uitvoeren, en het huis uit het merk. Per station een korte tekst, ingekort uit de letterlijke stappen.
- Bij station 1 het kostenblok: "Het kennismakingsgesprek is vrijblijvend. Daarin willen we graag investeren. Als de klik er is, en vóórdat we samen de volgende stappen gaan zetten, spreken we de vergoeding van onze diensten met je af." (letterlijk).
- Afsluiting: "Maar laten we beginnen met stap 1!" met de knop "Plan een vrijblijvend gesprek" (wit op navy) en bellen.
- Beweging: de lijn tekent zich met de scroll (scrub, alleen `transform`/`stroke-dashoffset` op één SVG), stations verschijnen als de lijn ze bereikt, het huis verschijnt als laatste.
- Mobiel: verticale lijn langs links.

### 6. Contact

- H2 "Contact".
- Links het visitekaartje als object: vectormerk, naam, "Financiële rust voor nu en in de toekomst.", adres met link "Route plannen", telefoon, e-mail, KvK, AFM en Kifid. Licht zwevend, zachte schaduw.
- Rechts:
  - Drie manieren als één rustige lijst met scheidingslijnen: bellen, WhatsApp, een gesprek plannen.
  - Daaronder het korte formulier (naam, e-mail of telefoon, bericht) met `data-hb-lead`. Nog geen backend, net als nu: na verzenden een eerlijke melding dat dit een concept is, nooit een valse bevestiging.
- Daaronder "Documenten": dienstenwijzer en de drie vergelijkingskaarten (pdf-links naar de huidige site), naast de registraties.
- Geen sectiefoto. Komt er een foto van het pand, dan krijgt die hier een kader met de cirkelboog.

### Footer (navy)

Logo in licht zegel, tagline, kolommen Diensten, Documenten, Contact, registraties, links naar privacy, cookies en klachtenregeling (Kifid).

### Mobiele actiebalk

Bellen, WhatsApp, Plan een gesprek. Verschijnt alleen bij omhoog scrollen of na een paar seconden stilstand, nooit in de hero, nooit permanent.

### Niet op de homepage

- Nieuws. Alleen terug als de klant de automatische artikelenmodule neemt.
- Veelgestelde vragen. De drie vragen met een letterlijk antwoord (kosten, onafhankelijk, thuis of 's avonds) staan al in hoofd en hart en de werkwijze; een FAQ herhaalt die alleen. De twee zelfgeschreven vragen hebben geen bron. Dit is een bijstelling op het besproken ontwerp, gedaan voor rust en hiërarchie.
- De stat "1.000+ huishoudens". Pas na bevestiging door de klant, dan als regel in de bewijsregel van de hero.

## Beweging

- Eén taal voor alle tekst: regels komen 14px omhoog en vagen in, 0,7s, `power3.out`, 0,06s tussen regels, getriggerd op 85% van het scherm. Nergens een ander teksteffect.
- Twee uitleggende momenten: hoofd en hart naar het huis, en de route.
- Hover: kleur en een kleine verschuiving van de dakhoek, 0,2s. Accordeons en panelen met hoogte-animatie.
- Alleen `transform` en `opacity` (plus `stroke-dashoffset` voor de route). Niets op `html` of `body`.
- `prefers-reduced-motion`: alles direct zichtbaar, geen scrub, stroom statisch.
- GSAP plus ScrollTrigger, al aanwezig in het project.

## Beeld

| Beeld | Herkomst | Gebruik |
| --- | --- | --- |
| Dennis en Marijke (`public/beeld/adviseurs.webp`, bron `66b5f8cb-454b-49a4-90c1-530ef5dc1a4c.jpg` in de klantmap) | echt, opgeschaald | hero, klein bij het uitgelichte citaat |
| Rotterdams straatbeeld | gegenereerd, alleen bij de hero-terugval | hero |

Geen stillevens meer (paraplu, appel, notitieboek, koffie, Erasmusbrug). In de offerte stellen we een korte fotoshoot voor (team en pand).

## Techniek

- Nieuwe route `src/pages/v3.astro`: `Base` met `variant="v3"`, `basis="/v3"`, `noindex`. Niet in de sitemap.
- `Base.astro`: knop "v3" in de wisselbalk, en een prop waarmee een pagina zijn eigen header en footer meebrengt. De standaard voor Fris, Groen en v1 verandert niet.
- Componenten in `src/components/v3/`: `Kop`, `Hero`, `HoofdEnHart`, `Diensten`, `Klanten`, `Werkwijze`, `Contact`, `Voet`, `Actiebalk`, plus één script voor de beweging. Stijlen gescoped; v3-tokens onder `[data-ontwerp='v3']`.
- Kennismaak-popup als eigen component `Kennismaken` in v3, inhoudelijk gelijk aan die van Fris (dialog, kort formulier met `data-hb-lead`, de foto van Dennis en Marijke), in de v3-vormtaal.
- `VariantHome.astro` en de bestaande content-JSON van Fris blijven ongemoeid. Nieuwe teksten in `src/content/teksten/v3.json` en `src/content/v3-diensten.json`; reviews en bedrijfsgegevens uit de bestaande bestanden.
- Herkomstlijst per tekstregel (LETTERLIJK, SAMENGESTELD, FUNCTIONEEL met bron) in `oogst/herkomst-v3.md`.
- Deploy zoals nu: `vercel deploy --prod --yes` vanuit `site/`, na de deploy-checks uit `~/.claude/CLAUDE.md`.

## Poorten vóór de link naar Ruud

1. **Hero-poort.** Gemeten op 1280×720, 1512×750, 1440×900, 390×844 en 430×932, op 100% zoom. Titel, lead, knop en bewijs boven de vouw; titel zonder toevallige regelval.
2. **Mobiel-poort.** Geen horizontale scroll, menu werkt in Chromium en WebKit, aanraakvlakken minstens 44px, velden minstens 16px, knoppen op volle breedte.
3. **Contentpoort.** Elke zichtbare regel heeft een herkomstlabel; letterlijke citaten gecontroleerd met grep in de oogst.
4. **Kwaliteitspassen.** better-typography, taste-skill eindpoort, ui-ux-pro-max, improve-animations, Playwright-QA op de deploy (inclusief WebKit, contrast berekend, console schoon).
5. **Eigen visuele eindreview** in de hoofdsessie met twee petten: klant en art-director, met als extra toets de eisen van 4 november (rust, witruimte, hiërarchie, contrast, meteen duidelijk).

## Vragen voor de klant (gaan mee met de offerte)

- Klopt 1.000+ huishoudens sinds 2010?
- Wie doet wat, voor Over ons?
- Zijn de dienstenwijzer en de vergelijkingskaarten nog actueel?
- Je of u?
- Is er een apart WhatsApp-nummer?
- Kunnen ze een foto van het pand aanleveren, of is een korte fotoshoot een optie?

## Buiten scope

Onderliggende pagina's, CMS-koppeling, meetscript, formulier-backend, privacyverklaring en security-baseline voor het eigen domein. Die volgen na akkoord van de klant.
