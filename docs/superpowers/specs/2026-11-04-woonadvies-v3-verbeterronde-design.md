# WoonAdvies Groep, v3 verbeterronde

Ontwerp goedgekeurd door Ruud op 4 november 2026, als antwoord op zijn eerste oordeel over `/v3` ("ziet er al weer beter uit", maar letter knullig, geheel saai en statisch). Dit document stuurt de spec `2026-11-04-woonadvies-v3-homepage-design.md` bij. Wat hier niet staat, blijft zoals daar: doel, harde eisen, kleurrollen, dakhoek, cirkelboog, tekstbudget, poorten.

## De lat

Super high-end en zakelijk, met gevoel en liefde, niet overweldigend en niet statisch. Rust betekent minder elementen met meer vormgeving per element, niet minder ontwerp. Elke sectie krijgt één brandpunt en een eigen, ingekaderde compositie in plaats van kolommen die over de pagina zweven.

## Typografie (gekozen uit drie specimens)

- Koppen: **Hedvig Letters Serif** (Kanon Foundry, één gewicht 400, optische maat 12 tot 24). Eigentijds en stevig, zakelijk zonder kil te worden.
- Tekst en interface: **Instrument Sans** (variabel, gewicht 400 tot 700, breedte 75 tot 100). Strakker dan Nunito Sans; levert de echte vetten voor knoppen en labels.
- Zelf gehost via `@fontsource/hedvig-letters-serif` en `@fontsource-variable/instrument-sans`, alleen geladen op v3. Fris, Groen en v1 houden Ibarra Real Nova en Nunito Sans.
- Koppen altijd 400 (er is geen vet), lichte negatieve letterafstand (-0,015em op display, -0,01em op H2). Schaal en regelhoogtes uit de v3-spec blijven, na het wisselen opnieuw nagemeten op de hero-poort.
- Cijfers in scores en telefoon met `tabular-nums` in Instrument Sans.

## Globale laag: kamers en beweging

- **Kamers.** Hoofd en hart, Wat klanten zeggen en Onze werkwijze worden ingezette vlakken met een grote radius (circa 28px, op mobiel 20px) en een smalle marge tot de schermrand. Ze geven elke sectie een kader. Diensten is zelf een gebouw van kamers. Hero en contact blijven open op papier, de footer is volle breedte navy.
- **Onthullen.** Een kamer opent bij binnenkomst één keer van een iets ingezette, afgeronde uitsnede naar volledig (clip-path, 0,9s). Tekst houdt de bestaande regel-onthulling. Hover blijft kleur en de verschuiving van de dakhoek.
- **Hero.** Opbouw ongewijzigd (die haalde de poort). De foto beweegt bij scrollen heel licht binnen zijn kader (transform, maximaal circa 6%). Bij `prefers-reduced-motion` staat alles stil.

## Header: dienstenmenu

Smal paneel van circa 340px onder "Diensten", wit, 12px radius, kleine schaduw. Vier regels met de dienstnaam (Instrument Sans 600) en één korte situatieregel eronder, dakpijl bij hover. Onderaan, gescheiden door een lijn, "Bespreek je situatie" (opent de popup) en het telefoonnummer. Toetsenbord en Escape blijven werken zoals nu.

## 1. Hero

Zoals in de v3-spec, nu in de nieuwe letters, met de lichte beeldbeweging hierboven. Geen andere wijzigingen.

## 2. Hoofd en hart: tweeluik met merk

- Boven het vlak gecentreerd: H2 "Een huis kopen is een zaak van hoofd en hart." en de lead.
- Eén ingekaderd vlak in twee helften: links `--sky-wash` (Hoofd), rechts `--wash-warm` (Hart). De buitenste bovenhoeken volgen de cirkelboog van het logo, zodat de silhouet van het vlak de twee cirkels oproept.
- Het echte merk (`Merk.astro`) groot op de naad, ongeveer 200 tot 240px.
- Per helft: het woord groot in de kopletter in zijn kleur (Hoofd in `--sky-deep`, Hart in `--brown`), een ondertitel, en twee korte zinnen:
  - Hoofd, de zakelijke kant: "Woonadvies Groep is onafhankelijk. We zijn vrij om aanbieders van financiële producten te kiezen." en "Aan de hand van een aantal financiële scenario's kijken we of het beter en misschien wel goedkoper kan."
  - Hart, de emotie en het gevoel: "Persoonlijk contact is bij ons prioriteit nummer één. Dat kan bij jou thuis, overdag of 's avonds." en "Ook daarna zijn we er voor je. We denken vooruit en ontzorgen!"
- Onder het vlak, gecentreerd in de kopletter: "Samen komen we tot een passende en praktische financiële oplossing."
- Beweging: bij binnenkomst schuiven de helften vanaf een kleine afstand naar elkaar toe en zakt het merk op de naad. Eén keer.
- Mobiel: kop, merk, helft Hoofd, helft Hart onder elkaar in één vlak; de naad wordt horizontaal en het merk zit op die naad.

## 3. Onze diensten: kamers onder één dak

- H2 "Onze diensten" en de lead "Alle kennis hebben we onder één dak. In een totaalpakket, als je dat wenst."
- Eén gebouw met smalle voegen (circa 10px) tussen de kamers. De buitenste bovenhoeken krijgen de cirkelboog, de rest 14px.
- Links, circa zeven van de twaalf kolommen en over de volle hoogte, **Hypotheken** in navy (de kern van het kantoor, het huis): titel groot in de kopletter, twee zinnen uit de dienstpagina, de drie situaties met de dakhoek, een witte knop "Bespreek je situatie" (popup) en tekstlink "Meer over hypotheken".
- Rechts drie kleinere kamers boven elkaar, elk met titel, één zin en een link:
  - **Pensioenen** op `--sky-wash`.
  - **Verzekeringen** op `--wash-warm`.
  - **Financiën** op wit met een lijn.
- Hover op een kamer: de dakhoek schuift, de achtergrond kleurt een tint dieper. De hele kamer is klikbaar naar de dienstpagina (nu `/v3/volgt-na-opdracht`).
- Mobiel: Hypotheken eerst, daarna de drie kamers onder elkaar, zelfde kleuren.
- Geen beeld. Het register met tabs vervalt.

## 4. Wat klanten zeggen: kaartenstapel

- Warm ingekaderd vlak (`--wash-warm`).
- Links: H2 "Wat klanten zeggen" en de twee scores groot in blauw, elk met bron en link (Google 5,0 uit 11, Advieskeuze 10 uit 44).
- Rechts het brandpunt: een stapel reviewkaartjes, net als het visitekaartje een object. De bovenste is groot en leesbaar (citaat in de kopletter, bruin aanhalingsteken, naam, bron). Twee kaartjes eronder steken licht gedraaid uit, met hun eerste regel zichtbaar, zodat je ziet dat er meer zijn.
- Inhoud: de zes korte citaten uit `reviews.uitgelicht` (20 tot 25 woorden), letterlijk.
- Beweging: elke zeven seconden schuift de bovenste kaart weg en gaat achteraan, de volgende komt boven. Pauzeert bij hover, focus, als de sectie uit beeld is en met de pauzeknop. Vorige en volgende plus een teller ("2 / 6"). Bij `prefers-reduced-motion` geen automatische wissel, wel handmatig bladeren.
- Toegankelijk: de stapel is een `region` met een label, de actieve kaart staat in een `aria-live="polite"` zone alleen bij handmatig bladeren.
- Mobiel: scores op één regel boven de stapel, stapel op volle breedte.

## 5. Onze werkwijze: drie kolommen, kosten als band

- Navy ingekaderd vlak.
- H2 "Onze werkwijze" en de lead.
- Drie gelijke kolommen: groot cijfer in de kopletter in `--sky`, titel (Kennismaken, Verdiepen, Uitvoeren), één alinea van ongeveer dezelfde lengte. Eén dunne lijn loopt door de drie cijfers en eindigt in de dakhoek. Geen vierde station meer.
- Daaronder een band over de volle breedte van het vlak, een tint lichter: links het merk in een licht zegel met "Kosten" en de kostentekst, rechts "Maar laten we beginnen met stap 1!" met de witte knop "Plan een vrijblijvend gesprek".
- Beweging: de lijn tekent zich één keer als de sectie in beeld komt, de cijfers verschijnen als de lijn ze bereikt. Geen scrub.
- Mobiel: stappen onder elkaar met de lijn verticaal links, band eronder.

## 6. Contact: visitekaartje centraal

- Gecentreerd: H2 "Contact" en "Bel gerust voor een afspraak, of stuur een e-mail. Dan nemen wij contact met je op. Graag tot ziens!"
- In het midden het visitekaartje als object (verhouding van een echt kaartje): merk, naam, tagline, adres met "Route plannen", telefoon, e-mail, KvK, AFM, Kifid. Zachte schaduw, komt bij binnenkomst iets omhoog.
- Eronder drie knoppen naast elkaar: Bel ons, Stuur een WhatsApp (omlijnd) en Plan een vrijblijvend gesprek (gevuld, opent de popup met het formulier).
- Het losse formulier en de documentenlijst vervallen hier. Documenten staan in de footer.
- Mobiel: kaartje op volle breedte, knoppen onder elkaar.

## Footer: statement

- Navy, volle breedte.
- Bovenaan groot in de kopletter "Financiële rust voor nu en in de toekomst." met daaronder het telefoonnummer als grote link.
- Daaronder kolommen: Diensten, Documenten (dienstenwijzer en de drie vergelijkingskaarten), Contact, Registraties.
- Onderaan copyright en de links naar privacy, cookies en klachten (Kifid).
- Rechtsonder het echte merk groot in een licht zegel dat half buiten beeld valt.

## Ongewijzigd

Kennismaak-popup (inhoud gelijk, nieuwe letters), mobiele actiebalk, `/v3/volgt-na-opdracht`, wisselbalk, Fris, Groen en v1.

## Teksten

Alleen uit `oogst/teksten.md`, `reviews.json` en `bedrijf.json`. Nieuwe of gewijzigde regels krijgen een label in `oogst/herkomst-v3.md`. Nieuw in deze ronde: de korte situatieregels in het menu, de één-zinsregels van de drie kleine dienstkamers en de ingekorte werkwijzestappen (allemaal SAMENGESTELD).

## Poorten

Zoals in de v3-spec: hero-poort (1280x720, 1512x750, 1440x900, 390x844, 430x932), mobiel-poort met WebKit, contentpoort, de vier kwaliteitspassen (taste-eindpoort minstens 8), axe nul fouten, `soepel.mjs` groen op de productiebuild, eigen kijk op 100% zoom in de hoofdsessie, deploy vanuit `site/`.
