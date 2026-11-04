# WoonAdvies v3 verbeterronde, bouwplan

> Uitvoering inline in de sessie die het ontwerp maakte, omdat visuele QA volgens de huisregels in de hoofdsessie gebeurt. Geen unit tests: elke taak wordt gecontroleerd met Playwright (DOM, computed styles, gerichte viewport-opnames op 100%).

**Doel:** de goedgekeurde verbeterronde (`docs/superpowers/specs/2026-11-04-woonadvies-v3-verbeterronde-design.md`) bouwen op `/v3`.

**Aanpak:** alleen bestanden onder `site/src/components/v3/`, `site/src/pages/v3.astro`, `site/src/content/teksten/v3.json`, `site/src/content/v3-diensten.json` en `oogst/herkomst-v3.md`. Fris, Groen en v1 blijven onaangeroerd (controle: `git diff --stat` raakt geen andere componenten).

**Techniek:** Astro 7, GSAP 3 met ScrollTrigger en SplitText, fontsource.

## Taken

1. **Letters.** `npm i @fontsource/hedvig-letters-serif @fontsource-variable/instrument-sans`, importeren in `pages/v3.astro`, `--font-kop` en `--font-tekst` overschrijven onder `[data-thema='v3']` in `v3.css`, koppen op 400 met `font-synthesis: none`. Check: `document.fonts` toont beide families geladen op `/v3`, `/` laadt ze niet.
2. **Kamers en beweging (globaal).** `.kamer` in `v3.css` (inzet, radius 28/20px), onthulling met clip-path in `Beweging.astro`, hero-beeld parallax. Check: reduced motion zet alles direct zichtbaar.
3. **Dienstenmenu.** `Kop.astro`: paneel 340px, vier regels plus voetregel. Nieuwe korte regels als `menu` in `v3-diensten.json`. Check: hover, klik, Escape, Tab.
4. **Hoofd en hart.** `HoofdEnHart.astro` en `teksten.hoofdhart` herschrijven naar het tweeluik. Check: merk exact op de naad op 1440 en 390.
5. **Diensten.** `Diensten.astro` herschrijven naar het gebouw; teksten in `v3-diensten.json` (`kort` per kleine kamer). `kies-dienst`-event uit menu en footer laten scrollen naar `#diensten`. Check: alle kamers klikbaar, popup opent vanuit Hypotheken.
6. **Kaartenstapel.** `Klanten.astro` herschrijven; data uit `reviews.uitgelicht`. Check: autowissel 7s, pauze bij hover/focus/uit beeld/knop, handmatig bladeren, reduced motion zonder autowissel.
7. **Werkwijze.** `Werkwijze.astro` naar drie kolommen plus kostenband; route-animatie in `Beweging.astro` vervangen door eenmalige lijn. Check: kolommen even hoog, lijn door de cijfers.
8. **Contact.** `Contact.astro` naar gecentreerd visitekaartje plus drie knoppen; formulier en documenten eruit. Check: popup opent, WhatsApp- en tel-links kloppen.
9. **Footer.** `Voet.astro` naar statement-footer met documenten en zegel. Check: zegel valt half buiten beeld zonder horizontale scroll.
10. **Herkomst.** `oogst/herkomst-v3.md` bijwerken; contentpoort met grep.
11. **Poorten en passen.** Hero-poort op vijf maten, mobiel-poort met WebKit, axe, `soepel.mjs` op de productiebuild, de vier kwaliteitspassen, eigen kijk op 100%.
12. **Afronden.** Commit, push, `DEPLOY_OK=1 vercel deploy --prod --yes` vanuit `site/`, live nameten, CLAUDE.md, vault-notitie, logboek, `hb-vault-sync`.

Commit na taak 1, 4, 6, 9 en 11.
