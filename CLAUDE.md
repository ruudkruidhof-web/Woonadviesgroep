# WoonAdvies Groep, redesign-concept (lead)

Vrijblijvend homepage-concept voor lead WoonAdvies Groep (woonadviesgroep.nl), onafhankelijk financieel adviseur, Oostmaaslaan 241B Rotterdam. Contactpersoon: Marijke (info@woonadviesgroep.nl). Doel: paradepaardje-case die de klant over de streep trekt en die wij als portfolio-case willen tonen.

## Stand van zaken

- **v3 live op `/v3` (4 nov 2026, richting A "hoofd en hart"):** derde versie van de homepage als visitekaartje, goedgekeurd ontwerp in `docs/superpowers/specs/2026-11-04-woonadvies-v3-homepage-design.md`. Opbouw: hero met de echte foto van Dennis & Marijke (licht opgepoetst, `public/beeld/adviseurs-v3-*.webp`) en bewijs (Google 5,0, Advieskeuze 10, AFM), hoofd en hart (hun eigen zin, blauw = zakelijk, bruin = persoonlijk, lijnen lopen het exacte logo in), diensten als register met situaties (sky-wash), reviews (wash-warm, stroom met pauzeknop), werkwijze als navy route met kosten, contact met visitekaartje, kanalen en formulier. Geen FAQ, geen nieuws, geen stillevens, geen 1.000+ (wacht op de klant). Componenten in `site/src/components/v3/`, teksten in `site/src/content/teksten/v3.json` en `v3-diensten.json`, herkomst per regel in `oogst/herkomst-v3.md`, oogst van hun site in `oogst/teksten.md`. Nagekeken op de live deploy: hero-poort op 1280x720, 1512x750, 1440x900, 390x844 en 430x932, geen overflow, axe (WCAG 2.1 AA) nul fouten op 1280 en 390, WebKit menu/dialog/accordeon, soepel.mjs groen. Vier kwaliteitspassen (better-typography, taste-eindpoort 7,5 en daarna verwerkt, ui-ux-pro-max, improve-animations) zijn verwerkt. Formulieren tonen bewust een eerlijke conceptmelding, er hangt nog geen backend aan. Nog niet door Ruud beoordeeld.
- Concept (v8) staat live op https://woonadviesgroep.vercel.app en is gedeeld klaar voor de klant.
- Na de kennismaking/conceptpresentatie (24 jul 2026, transcriptie op localhost:4747) zijn er twee extra ontwerpvarianten gebouwd voor in de offerte, beide met alle meeting-feedback verwerkt:
  - `/fris`: frisser en speelser in de bestaande kleuren.
  - `/groen`: zelfde opzet met duurzaam groen in accenten én in het logo (bruine helft wordt groen via CSS-variabelen `--merk-*`; header toont daar een vector-lockup in plaats van de raster-`logo.webp`).
  - Verwerkt in beide: compactere werkwijze (`kort`-velden in werkwijze.json), nieuwe "voor wie"-sectie (eerste woning, doorstarters, relatiebreuk/scheiding, oversluiten; voorwie.json), rustige reviewsectie met Google (5,0/11) én Advieskeuze (10/10, 44 reviews) plus wisselende quote (uitgelicht in reviews.json), stat "1.000+ huishoudens sinds 2010" (getal van Ruud, bij livegang verifiëren), contactkanalen bellen/WhatsApp/formulier naast elkaar. Variantpagina's staan op noindex; gedeeld component `VariantHome.astro`, variantteksten in `teksten/varianten.json`.
  - **Tweede feedbackronde (24 jul 2026, verwerkt in commit e754a2c):** sectievolgorde omgezet naar hero → diensten → reviews → verhaal → werkwijze → voor-wie → nieuws → FAQ+manifest → contact. Hero toont nu de Google/Advieskeuze-scores en heeft knoppen kennismaking (rij 1) + bellen/WhatsApp naast elkaar (rij 2). Nieuwe FAQ (`faq.json`, 5 vragen, teksten zelf geschreven, bij klant verifiëren) verweven bij het logoblok. Contact-CTA's herontworpen (kleuraccenten, medaillons, hover). Werkwijze opgefrist met icoon-stations; voor-wie dynamischer en lager. Sitemap sluit /fris en /groen uit.
  - **Derde feedbackronde (24 jul 2026, commit 48dbb0a) — teruggedraaid t.o.v. de tweede ronde:** alle eyebrows verwijderd. Diensten weer de originele verticale accordion met beeldwissel (2x2 fotorooster afgekeurd). Reviews weer score-kaart (5,0 prominent + Advieskeuze 10/10 eronder) + scrollbare rail met pijlen; de marquee was "te templateachtig/goedkoop", nu witte kaarten met bronbadge Google/Advieskeuze (`railReviews` = interleave van `reviews.items` + Advieskeuze uit `reviews.uitgelicht`), badge "veel terugkerende klanten" weg. FAQ en logoblok kregen twee onderscheidende kleuren (licht sky-vlak links, navy FAQ-kaart rechts) omdat ze inblendden. Hero compacter (beeld 4/5 op 20,5rem, minder spacing) zodat de USP/zekerheden-balk boven de vouw valt op 1366x768 en 1440x900. Nieuws-desktopgrid (tweekolom groot+rest) hersteld; die was in de tweede ronde weggevallen waardoor de foto's full-width en te groot werden. Gedeeld component blijft `VariantHome.astro`.
- De homepage op `/` is bewust onaangeroerd gebleven als referentie voor de klant.
- Project in `site/` (Astro 7, GSAP). Git-repo in de klantmap-root, remote: https://github.com/ruudkruidhof-web/Woonadviesgroep (branch `main`). Deploys gaan nog via `vercel deploy --prod --yes` vanuit `site/`; het Vercel-project is niet aan GitHub gekoppeld, dus pushen deployt niet vanzelf.
- Homepage compleet: hero (USP-balk above the fold), dienstenregister (exclusieve accordion + beeldwissel), Google-reviews (scorekaart + scrollbare rail), verhaal, werkwijze als donkere navy-band met getekende route, logo-manifest, nieuws, contactband met visitekaartje, kennismaak-popup (dialog, `data-hb-lead`, nog geen backend).
- Alle content staat CMS-klaar als JSON in `src/content/`; preview-bridge script zit in de layout.
- Concept-mail aan Marijke is opgesteld (in de sessie van 16 juli), nog niet verstuurd.

## Routing (sinds vierde feedbackronde, 24 jul 2026)

- **`/`** = de Fris-variant (hoofdpagina, indexeerbaar). **`/groen`** = groene variant (noindex). **`/v1`** = de oorspronkelijke v8-homepage, als archief/referentie (noindex). `/fris` redirect naar `/`.
- Preview-switchbalk (fixed, onderaan) op alle variantpagina's: Fris / Groen / v1 / v3. **`/v3`** = derde versie (noindex, eigen header en footer via `eigenKader` op `Base.astro`), met `/v3/volgt-na-opdracht` als placeholder voor onderliggende pagina's. Aangestuurd door de `variant`-prop op `Base.astro`; interne nav/anchors via `basis`.
- Sitemap bevat alleen `/`; sluit `/groen`, `/v1` en `/v3` uit.

## Vierde feedbackronde (24 jul 2026, commits dd3eae3 + 7cc6ce8)

- **Reviews herontworpen** naar klant-inspiratie (Framify-stijl): links scores/tekst (Google 5,0 + Advieskeuze 10/10), midden een uitgelichte testimonial met de **echte foto van Dennis & Marijke** (`public/beeld/adviseurs.webp`, uit de aangeleverde FB-foto `66b5f8cb-...jpg` in de klantmap-root; quote van Sofie die beiden noemt), rechts een **verticaal auto-scrollende stroom** met fade boven/onder. Data: `reviews.marquee` (stroom) + `reviews.uitgelicht` (featured).
- **Groen logo**: groen vector-icoon + **exact origineel woordmerk** (`public/logo-woordmerk.webp`, uit `logo.webp` gecropt met sharp), niet meer de Ibarra-tekst. Header-branch `vector` in `Header.astro`.
- **Alle eyebrows verwijderd**; **FAQ-titel** als duidelijke kop met sky-accent; **contact-CTA's** compacter zonder zijlijn; **hero-strook** onderaan gefixt (ambient blobs hoger, geen clip-rand); **groene witte strook** tussen verhaal en werkwijze weg (`.route margin-top:0`).
- **Frisse hero-foto** via Higgsfield (`nano_banana_pro`, lichte Rotterdamse woonkamer met kanaalzicht, blauw/groene accenten) → `public/beeld/woonkamer-fris.webp`, alleen op de varianten (v1 houdt origineel). Higgsfield is nu gekoppeld/geautoriseerd.
- **Hero-bijstelling (commit 83e6203):** titel weer groot (clamp tot 4.7rem) en beeld naar 23rem zoals v1; hero-CTA ingekort naar "Plan een vrijblijvend gesprek" (`home.json hero_knop`). FAQ opent/sluit nu vloeiend via gsap height-animatie (niet meer instant). Kennismaak-popup toont de foto van Dennis & Marijke ("U maakt kennis met Dennis & Marijke").
- **Nog te doen op verzoek**: diensten-, verhaal- en contactbeelden in dezelfde frisse Higgsfield-stijl vervangen (hero is al gedaan; klant moet de fotorichting nog fiatteren voor de rest).

## Belangrijke beslissingen

- **Ontwerp**: concept "rust + warmte", kleuren uit het logo (navy #003850, hemelsblauw #6aabda, bruin #6a4d47). Ritme licht/donker is bewust: werkwijze-sectie diep navy tussen crème secties.
- **Fonts**: Ibarra Real Nova (koppen) + Nunito Sans (tekst). Fraunces en Newsreader zijn afgekeurd; geen standaard-AI-fonts gebruiken.
- **Logo**: exact vector-beeldmerk in `src/components/Merk.astro`, pixel-geverifieerd tegen de bron (512px favicon-upload van hun site). Nooit benaderen of nabouwen; huisje is negatieve ruimte, elk exemplaar eigen mask-id (`merkteller.ts`). Op donkere vlakken in een licht zegel plaatsen.
- **Teksten**: letterlijk van de huidige site overgenomen, niet herschreven (eis Ruud).
- **Reviews**: 7 van de 11 échte Google-reviews (allemaal 5 sterren) letterlijk geciteerd in `src/content/reviews.json`. Bij livegang score/aantal verversen.
- **Interactie**: elke klik moet waarde toevoegen (accordion met inhoud en doorklik, popup met formulier); animatie subtiel, reduced-motion gerespecteerd.
- Meetscript/dashboard en formulier-backend bewust nog niet gekoppeld: lead is nog geen klant.

## Volgende stappen

0. Ruud beoordeelt `/v3` (op 100% zoom). Vragen voor Marijke die bij v3 horen: klopt 1.000+ huishoudens, wie doet wat (voor Over ons), zijn dienstenwijzer en vergelijkingskaarten actueel, je of u, apart WhatsApp-nummer, foto van het pand of een korte fotoshoot.
1. Offerte naar de klant met links naar `/fris` en `/groen` (afspraak uit de meeting: offerte dezelfde middag, klant bekijkt en beslist). Prijs artikelenmodule + Instagram-koppeling en eventuele prijstegemoetkoming nog bepalen (Ruud).
2. Nieuwe sfeerbeelden via Higgsfield (frisser, Rotterdams, blauw/groen): connector moet eerst opnieuw geautoriseerd worden via claude.ai connector-instellingen. Klant kan ook eigen beeld aanleveren (foto pand). WhatsApp-nummer van de klant opvragen (nu staat het vaste nummer in `bedrijf.json` als `whatsapp`).
3. Tone of voice (u of je) nog kiezen met de klant; teksten staan nu in de u-vorm van de huidige site.
4. Bij akkoord: onderliggende pagina's, dashboard-meetscript + klantaccount, CMS-koppeling, formulier-backend, security-baseline afronden richting livegang op eigen domein. Reviews-cijfers bij livegang verversen en het 1.000+-getal bij de klant verifiëren.

Uitgebreide historie en lessen: memory-bestanden `woonadviesgroep-concept` en `design-lat-geen-safe-output`.
