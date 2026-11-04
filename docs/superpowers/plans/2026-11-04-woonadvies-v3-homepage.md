# WoonAdvies Groep homepage v3, bouwplan

> Uitvoering inline door het hoofdmodel (website-bouwen: front-end blijft bij het hoofdmodel). De code staat in de bestanden zelf, niet dubbel in dit plan; per taak staan de bestanden en de controle.

**Doel:** de goedgekeurde spec `docs/superpowers/specs/2026-11-04-woonadvies-v3-homepage-design.md` bouwen op `/v3`.

**Architectuur:** losse Astro-componenten in `site/src/components/v3/`, eigen header en footer via een prop op `Base.astro`, tokens gescoped onder `[data-ontwerp='v3']`, teksten in JSON met herkomstlijst, één beweegscript met GSAP, ScrollTrigger en SplitText.

**Stack:** Astro 7, GSAP 3.15 (ScrollTrigger, SplitText), Ibarra Real Nova en Nunito Sans via fontsource.

## Taken

1. **Basis.** `Base.astro` krijgt `eigenKader` (geen standaard header en footer) en een v3-knop in de wisselbalk; `src/pages/v3.astro` en `src/pages/v3/volgt-na-opdracht.astro` (noindex); sitemapfilter sluit `/v3` uit; `src/components/v3/v3.css` met tokens. Controle: `npm run build` groen, `/v3` geeft 200, Fris, Groen en v1 ongewijzigd.
2. **Teksten.** `src/content/teksten/v3.json`, `src/content/v3-diensten.json`, `oogst/herkomst-v3.md`. Controle: elke LETTERLIJK-regel teruggevonden met grep in `oogst/teksten.md` of `reviews.json` (na omzetting naar je-vorm).
3. **Kader.** `Kop.astro` (header, dropdown Diensten, mobiel menu als popover), `Voet.astro`, `Kennismaken.astro` (dialog). Controle: menu opent, sluit, Escape, in- en uitanimatie in Chromium en WebKit; dialog met eerlijke conceptmelding na verzenden.
4. **Hero en hoofd en hart.** `Hero.astro`, `HoofdEnHart.astro`, opgeschaalde adviseursfoto. Controle: hero-poort op vijf viewports.
5. **Overige secties.** `Diensten.astro` (tablist, mobiel uitklap), `Klanten.astro`, `Werkwijze.astro` (route), `Contact.astro`. Controle: tabs met toetsenbord, geen horizontale overflow.
6. **Beweging.** `Beweging.astro` (tekst-reveal, hoofd en hart, route-scrub, header verbergen en tonen), `Actiebalk.astro`. Controle: reduced motion toont alles direct; scroll vloeiend.
7. **Poorten.** Hero-, mobiel- en contentpoort met Playwright, eigen visuele review op 1440 en 390.
8. **Passen en oplevering.** better-typography, taste-skill eindpoort, ui-ux-pro-max, improve-animations als reviewers; verwerken; deploy; Playwright op de deploy; CLAUDE.md, vault en logboek bijwerken.

Na elke taak een commit.
