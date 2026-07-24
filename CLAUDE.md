# WoonAdvies Groep, redesign-concept (lead)

Vrijblijvend homepage-concept voor lead WoonAdvies Groep (woonadviesgroep.nl), onafhankelijk financieel adviseur, Oostmaaslaan 241B Rotterdam. Contactpersoon: Marijke (info@woonadviesgroep.nl). Doel: paradepaardje-case die de klant over de streep trekt en die wij als portfolio-case willen tonen.

## Stand van zaken

- Concept (v8) staat live op https://woonadviesgroep.vercel.app en is gedeeld klaar voor de klant.
- Project in `site/` (Astro 7, GSAP, Vercel CLI-deploys zonder git). Geen git-repo; `vercel deploy --prod --yes` vanuit `site/`.
- Homepage compleet: hero (USP-balk above the fold), dienstenregister (exclusieve accordion + beeldwissel), Google-reviews (scorekaart + scrollbare rail), verhaal, werkwijze als donkere navy-band met getekende route, logo-manifest, nieuws, contactband met visitekaartje, kennismaak-popup (dialog, `data-hb-lead`, nog geen backend).
- Alle content staat CMS-klaar als JSON in `src/content/`; preview-bridge script zit in de layout.
- Concept-mail aan Marijke is opgesteld (in de sessie van 16 juli), nog niet verstuurd.

## Belangrijke beslissingen

- **Ontwerp**: concept "rust + warmte", kleuren uit het logo (navy #003850, hemelsblauw #6aabda, bruin #6a4d47). Ritme licht/donker is bewust: werkwijze-sectie diep navy tussen crème secties.
- **Fonts**: Ibarra Real Nova (koppen) + Nunito Sans (tekst). Fraunces en Newsreader zijn afgekeurd; geen standaard-AI-fonts gebruiken.
- **Logo**: exact vector-beeldmerk in `src/components/Merk.astro`, pixel-geverifieerd tegen de bron (512px favicon-upload van hun site). Nooit benaderen of nabouwen; huisje is negatieve ruimte, elk exemplaar eigen mask-id (`merkteller.ts`). Op donkere vlakken in een licht zegel plaatsen.
- **Teksten**: letterlijk van de huidige site overgenomen, niet herschreven (eis Ruud).
- **Reviews**: 7 van de 11 échte Google-reviews (allemaal 5 sterren) letterlijk geciteerd in `src/content/reviews.json`. Bij livegang score/aantal verversen.
- **Interactie**: elke klik moet waarde toevoegen (accordion met inhoud en doorklik, popup met formulier); animatie subtiel, reduced-motion gerespecteerd.
- Meetscript/dashboard en formulier-backend bewust nog niet gekoppeld: lead is nog geen klant.

## Volgende stappen

1. Concept-mail naar Marijke sturen (tekst ligt klaar; check aanhef Marijke vs "Mariette"). Versturen alleen na akkoord van Ruud.
2. Feedbackronde klant verwerken (skill `/feedback` beschikbaar).
3. Bij akkoord: onderliggende pagina's (diensten, werkwijze, nieuws, contact met werkend formulier), dashboard-meetscript + klantaccount, CMS-koppeling, security-baseline afronden richting livegang op eigen domein.
4. Higgsfield-connector moet opnieuw geautoriseerd worden (via claude.ai connector-instellingen) voordat er nieuwe sfeerbeelden gegenereerd kunnen worden.

Uitgebreide historie en lessen: memory-bestanden `woonadviesgroep-concept` en `design-lat-geen-safe-output`.
