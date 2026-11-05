# Wat er op de site van WoonAdvies Groep moet staan

Overzicht voor Ruud, 5 november 2026. Eerst wat de regels vragen (nagekeken bij de bron), dan wat ik sterk aanraad, dan de pagina's die v3 krijgt met per pagina het ontwerpidee, en tot slot wat we nog bij Marijke moeten ophalen.

Nieuw materiaal. Hun eigen vergelijkingskaart Hypotheek (29 september 2023) en dienstenwijzer (mei 2015) staan als pdf op hun site en zijn nu gelezen. Daar staat veel bruikbare eigen tekst in: wie ze zijn, waarom ze onafhankelijk zijn, hoe ze beloond worden, de klachtenregeling, de registraties en de gemiddelde prijzen. Die gaan in de oogst en mogen dus op de site.

## 1. Wat de regels vragen

| Wat | Waarom verplicht | Stand bij WoonAdvies |
| --- | --- | --- |
| **Vergelijkingskaarten** (Hypotheek, Risico's afdekken, Vermogen opbouwen) | Sinds 1 oktober 2023 verplicht voor advies over producten onder het provisieverbod (art. 4:25b Wft, art. 86f Bgfo). Moet goed vindbaar zijn op de pagina's over de dienstverlening, de kosten en het product zelf. Alleen in de footer of onder "juridisch" telt volgens de AFM als slecht vindbaar. | De drie kaarten zijn de nieuwe versie (2023). In v3 staan ze nu alleen in de footer, dus ze moeten ook bij de werkwijze en kosten en op de dienstpagina's komen. |
| **Klachtenprocedure en Kifid** | Aansluiting bij Kifid is verplicht (art. 4:17 Wft). De klant moet vooraf weten waar hij met een klacht terechtkan, bij het kantoor en bij Kifid (art. 57 Bgfo); de AFM noemt de website als geschikte plek. | Kifid-nummer staat erop. De klachtenregeling zelf staat alleen in de dienstenwijzer van 2015. Komt op de pagina over de dienstverlening. |
| **Informatie vooraf**: wie je bent, adres, registratie, beloning | Art. 57 Bgfo. De dienstenwijzer als document is niet verplicht, de informatie wel. | Staat in de dienstenwijzer, maar die is verouderd (oud telefoonnummer, nog de Wet bescherming persoonsgegevens van vóór de AVG). |
| **"Onafhankelijk"** | Mag alleen als je genoeg producten vergelijkt en niet alleen van verbonden aanbieders (art. 86f Bgfo, Nrgfo bijlage 7). | Per productgroep verschillend. Hypotheek en Risico's afdekken: "Ja, onafhankelijk". **Vermogen opbouwen (spaarverzekering, lijfrente): "Nee, niet onafhankelijk"** ("Wij nemen een geselecteerd aantal producten mee"). Een algemene claim als "Woonadvies Groep is onafhankelijk" moet dus worden afgebakend tot hypotheken en verzekeringen, en de pagina Pensioenen mag het niet zeggen. Voorleggen aan Marijke. |
| **Bedrijfsgegevens**: naam, bezoekadres, e-mail, telefoon, KvK-nummer | Handelsregisterbesluit; een klachtenregeling vermeld je ook als je die hebt (KVK). | Staat er. Btw-nummer alleen als ze er een hebben (financieel advies is vaak btw-vrijgesteld, vraag). |
| **Privacyverklaring** | AVG art. 13, zodra je gegevens verwerkt (formulier, meting). Bij een formulier kort uitleggen wat je met de gegevens doet en naar de verklaring linken (advies Autoriteit Persoonsgegevens). | Hun site heeft er geen. Wij maken hem op ons standaardsjabloon. |
| **Cookies** | Telecommunicatiewet art. 11.7a: uitleg over cookies; toestemming alleen voor niet-functionele cookies. | Hun cookietekst bestaat. Wij gebruiken alleen functionele opslag en een cookieloze meting, dus geen banner (besluit Ruud 19 juli). |

Bronnen: [AFM over de vergelijkingskaart](https://www.afm.nl/nl-nl/sector/themas/dienstverlening-aan-consumenten/klantrelatie/vergelijkingskaart), [Besluit Gedragstoezicht financiële ondernemingen (art. 57 en 86f)](https://wetten.overheid.nl/BWBR0020421/), [Kifid over aansluiten](https://www.kifid.nl/ik-ben-een-financiele-dienstverlener/aansluiten-bij-kifid/), [KVK over gegevens op je website](https://ondernemersplein.kvk.nl/regels-voor-bedrijfscorrespondentie/), [Autoriteit Persoonsgegevens over de informatieplicht](https://www.autoriteitpersoonsgegevens.nl/nl/zelf-doen/gebruik-uw-privacyrechten/recht-op-informatie).

## 2. Sterk aangeraden (mijn inschatting, geen wet)

- **Wat het kost, met bedragen.** Hun eigen vergelijkingskaart noemt gemiddelde prijzen voor advies en het regelen van de hypotheek: van € 2.450 (in loondienst, eerste woning) tot € 3.450 (ondernemer, eerder een woning gekocht). Onderhoud daarna kost niets extra en de kennismaking is vrijblijvend. Transparantie is hun eigen kernwaarde, en "wat kost het" is de vraag die een bezoeker als eerste heeft. Wel eerst bij Marijke checken of die bedragen nog kloppen.
- **Erkend Hypotheekadviseur.** Volgens de dienstenwijzer zijn Marijke de Jong en Dennis Kouwen ingeschreven bij de Stichting Erkend Hypotheekadviseur. Sterk vertrouwensbewijs voor naast AFM, maar de bron is van 2015, dus eerst nagaan of het nog geldt.
- **Over ons met echte mensen.** Bezoekers komen via via en willen weten bij wie ze aan tafel zitten. Bronnen: "Wie zijn wij" uit de dienstenwijzer, hun zin uit de vergelijkingskaart en reviews die hen bij naam noemen. Wat ontbreekt is wie wat doet en een korte achtergrond.
- **Waar en wanneer.** De vergelijkingskaart zegt dat advies kan op kantoor, bij je thuis en via video. Bereikbaarheid (dagen en tijden) staat nergens; handig om te vragen.
- **Toegankelijkheid.** De European Accessibility Act (sinds 28 juni 2025) geldt voor diensten niet voor micro-ondernemingen (minder dan 10 mensen en hoogstens € 2 miljoen omzet); daar valt WoonAdvies vrijwel zeker onder. We bouwen toch op WCAG 2.1 AA, zoals nu.
- **Geen nieuws.** Alleen als ze de artikelenmodule nemen; een lege of kapotte feed (zoals nu) kost vertrouwen.

## 3. De pagina's van v3

Alles onder `/v3/...`, op noindex en buiten de sitemap, in dezelfde stijl als de homepage. Het menu blijft: Diensten (uitklapmenu), Werkwijze en kosten, Over ons, Contact. De placeholder "volgt na opdracht" verdwijnt.

| Pagina | Archetype | Signature (wat je ervan onthoudt) | Inhoud uit |
| --- | --- | --- | --- |
| **Hypotheken**, **Pensioenen**, **Verzekeringen**, **Financiën** | Gids per dienst | Je stapt de kamer van de homepage binnen: de opening heeft dezelfde kleur en boog (Hypotheken navy, Pensioenen blauw, Verzekeringen warm, Financiën wit). Onderaan staan de andere drie kamers als klein gebouw. | Hun dienstpagina's (volledig, in je-vorm), de situaties, een passende review, de bijbehorende vergelijkingskaart direct zichtbaar. Bij Hypotheken ook welke hypotheekvormen en verzekeringen en wat het kost (vergelijkingskaart). |
| **Werkwijze en kosten** | Route | Een lijn die met het scrollen door de stappen loopt en eindigt in het huis uit het merk, met daarnaast de kosten als prijskaart. | Hun werkwijzepagina (volledig), "Wat vragen wij van u" uit de dienstenwijzer, kosten en beloning (vast tarief of provisie), de vergelijkingskaarten. |
| **Over ons** | Persoonlijke kennismaking | Dennis en Marijke elk met de reviews die klanten over hén schreven ("Dennis heeft mij fantastisch geholpen", "Marijke legt alle opties voor"). | Dienstenwijzer ("Wie zijn wij"), home ("Wat u van ons mag verwachten"), vergelijkingskaart, reviews, de foto. |
| **Contact** | Bezoekplanner | Drie manieren van afspreken naast elkaar: bij jou thuis, op kantoor, via video (uit de vergelijkingskaart), met het visitekaartje en het formulier. | Contactpagina, werkwijze stap 1, vergelijkingskaart. Route als link, geen ingesloten kaart (cookies). |
| **Onze dienstverlening** (klachten en registraties) | Naslag | De registraties als controleerbare nummers met een link naar elk register, en de klachtenroute als twee stappen (eerst wij, dan Kifid). | Dienstenwijzer: onafhankelijkheid, beloning, aansprakelijkheid, klachtenregeling, registraties. |
| **Privacy en cookies** | Naslag, rustig leesbaar | Bovenaan "in het kort" in drie zinnen, daaronder een inhoudsopgave die meeloopt. | Ons standaardsjabloon (je-vorm) en hun cookietekst. |

Op de homepage verandert daardoor ook iets kleins: de kostenband bij de werkwijze krijgt de vergelijkingskaart erbij (verplicht goed vindbaar), en menu en footer wijzen naar de echte pagina's.

## 4. Vragen voor Marijke

1. Kloppen de bedragen op de vergelijkingskaarten nog (hypotheek € 2.450 tot € 3.450, risico's afdekken en vermogen opbouwen € 395 of € 595), en mogen ze op de site?
1. Akkoord met afgebakende tekst over onafhankelijkheid (hypotheken en verzekeringen wel, vermogensopbouw en pensioen niet, zoals op jullie eigen vergelijkingskaarten)?
2. Staan jullie nog als Erkend Hypotheekadviseur ingeschreven?
3. Wie doet wat, en willen jullie elk een paar zinnen over jezelf geven (achtergrond, sinds wanneer)?
4. Wanneer zijn jullie bereikbaar (dagen en tijden)?
5. Hebben jullie een btw-nummer?
6. Wie behandelt een klacht ("de directie" uit de dienstenwijzer), en is de klachtenregeling nog actueel?
7. Willen jullie in de privacyverklaring alleen de website beschrijven, of ook wat jullie met klantdossiers doen?
8. Blijft de dienstenwijzer bestaan? Hij is van 2015, met een oud telefoonnummer. Wij kunnen de site leidend maken.
9. Eerder al open: klopt 1.000+ huishoudens, je of u, apart WhatsApp-nummer, foto van het pand of een korte fotoshoot.
