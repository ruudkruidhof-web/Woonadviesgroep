# Briefing onderliggende pagina's WoonAdvies Groep (v3)

Voor de designer die de negen onderliggende pagina's opnieuw uitwerkt. Geschreven op 11 november 2026, na een kritische ronde langs alle pagina's op https://woonadviesgroep.vercel.app (1440 breed, productiebuild) en een controle van de wettelijke eisen bij de bron. De homepage blijft zoals hij is; Ruud is daar zeer enthousiast over. De onderliggende pagina's mogen volledig op de schop.

Lees eerst, in deze volgorde: deze briefing, de homepage zelf in de browser, `docs/2026-11-05-overzicht-site-v3.md` (eerdere wettelijke inventarisatie), het memory-bestand `design-lat-geen-safe-output` en de oogst in `oogst/` (teksten, pdf's van vergelijkingskaarten en dienstenwijzer). Alles wat hier niet staat, volgt de specs van 4 en 5 november in deze map.

## 1. De opdracht

Maak van negen losse pagina's één samenhangend verhaal dat een bezoeker die WoonAdvies al via via kent, rustig en zonder zoeken bevestigt in zijn keuze. Professioneel, doordacht en een tikje deftig, met één ontworpen moment per pagina, ruimte voor uitleg en een logisch vervolg na elke pagina. Niet kinderachtig, en geen herhaling van de homepage-objecten.

Ruuds lat in zijn eigen woorden (eerdere rondes): "super high-end, zakelijk, met gevoel, niet overweldigend". Rust betekent niet minder ontwerp, maar minder elementen met meer vormgeving per element.

## 2. Wat er nu mis is

Gezien op de live pagina's. Dit is waarom het "niet als een samenhangend verhaal voelt".

1. **Sjabloon in plaats van verhaal.** De vier dienstpagina's hebben exact hetzelfde skelet (gekleurde kamer, tekstkolom, plakkende vergelijkingskaart, citaat, gebouw, afsluiter). Hypotheken, waar vrijwel al hun klanten voor komen (alle 44 Advieskeuze-reviews gaan over hypotheek), krijgt evenveel ontwerp als Financiën, dat maar één alinea tekst heeft en daardoor half leeg oogt.
2. **Elke pagina eindigt hetzelfde.** Overal dezelfde lichtblauwe afsluiter "Maar laten we beginnen met stap 1!" en daarna dezelfde statement-footer. Die kop komt uit de werkwijze en begint met "Maar", los van die context leest hij als een fout. Na de vijfde pagina zie je hem niet meer.
3. **Twee verschillende stappenplannen.** Werkwijze en homepage zeggen Kennismaken, Verdiepen, Uitvoeren, Ook daarna. Onze dienstverlening zegt Inventarisatie, Advies, Bemiddeling, Nazorg. Een bezoeker die beide leest, snapt niet welke klopt.
4. **Verplichte informatie als datadump.** De vergelijkingskaarten staan er als dichte kaartjes vol grijze pillen (hypotheekvormen als tags). Op de werkwijzepagina drie naast elkaar. Het voldoet, maar het leest als een formulier, niet als dienstverlening.
5. **Tekstmuren.** De letterlijk overgenomen teksten staan in één lange kolom zonder tussenkoppen of ritme. "Wat vragen wij van je" is vier smalle kolommen lopende tekst.
6. **Over ons gaat niet over hen.** Geen achtergrond, geen rol, beiden "Financieel adviseur", geen eigen foto per persoon. De pagina bestaat vooral uit vijf reviews, een gecentreerde alinea die eruitziet als een citaat, en daarna nog een groot citaat.
7. **Contact geeft te veel knoppen en te weinig antwoord.** Drie gebogen kaarten met elk een "plan een gesprek"-link, drie omlijnde knoppen, een formulier en de telefoon in de footer. Wat ontbreekt is wat een bezoeker wil weten: wanneer ze bereikbaar zijn, wat er gebeurt nadat je het formulier verstuurt, en hoe je er komt.
8. **Decoratie die als restant leest.** In elke paginakop staat rechtsboven een afgesneden stuk van twee cirkels. Op de homepage is dat cirkelpaar betekenisvol en heel; hier is het een fragment zonder functie.
9. **Herhaalde homepage-objecten zonder nieuw idee.** Het gebouw "Alle kennis onder één dak" en het visitekaartje komen terug zoals op de homepage, zodat de pagina's als een uitgeklapte homepage voelen in plaats van een volgende laag.
10. **Geen route tussen de pagina's.** Na een pagina is er geen logische volgende vraag, alleen dezelfde knop. De kruimel "Diensten" springt terug naar een anker op de homepage.

## 3. Strategie

### Wie hier komt en wat hij wil weten

De site is een **bevestigingssite**. Klanten komen via het netwerk of een makelaar, kennen de naam al en checken of het klopt: ziet dit er professioneel uit, wat zeggen anderen, bij wie zit ik straks aan tafel, wat kost het. De homepage doet de eerste indruk. De onderliggende pagina's beantwoorden de vragen die daarna komen, en elke pagina beantwoordt er precies één.

| Vraag van de bezoeker | Pagina | Wat hij na afloop moet denken |
| --- | --- | --- |
| Kunnen ze mij helpen, in mijn situatie? | Hypotheken, Verzekeringen, Pensioenen, Financiën | "Dit is precies mijn situatie, en ze leggen het helder uit." |
| Hoe gaat dat dan, en wat kost het? | Werkwijze en kosten | "Ik weet wat er gebeurt, wanneer ik wat betaal, en wat ik moet aanleveren." |
| Bij wie zit ik aan tafel? | Over ons | "Twee ervaren mensen die ik kan vertrouwen, en anderen bevestigen dat." |
| Hoe maak ik een afspraak? | Contact | "Eén telefoontje of één formulier, en ik weet wanneer ik iets hoor." |
| Is dit allemaal netjes geregeld? | Onze dienstverlening | "Geregistreerd, controleerbaar, en ik weet wat ik kan doen als het misgaat." |
| Wat gebeurt er met mijn gegevens? | Privacy en cookies | "Weinig, en dat is prettig." |

### De route tussen de pagina's

Elke pagina eindigt met de **volgende logische vraag**, niet met een generieke afsluiter. De knop voor een gesprek blijft altijd aanwezig, maar de begeleidende tekst en de tweede link verschillen per pagina:

- Dienstpagina's leiden naar Werkwijze en kosten ("Hoe het verder gaat en wat het kost").
- Werkwijze en kosten leidt naar Over ons ("Wie er tegenover je zit").
- Over ons leidt naar Contact.
- Contact heeft geen afsluiter; het is het eindpunt.
- Onze dienstverlening en Privacy krijgen een rustige contactregel in plaats van een blok.

### Hoofd en hart als redactieregel, niet als motief

Het merkverhaal van de homepage (hoofd is de zakelijke kant, hart de emotie) wordt op de onderliggende pagina's een **verhouding**, geen vorm. Elke pagina heeft een feitelijke ruggengraat (hoofd: wat, hoe, wat kost het, wat is geregeld) en precies één menselijk moment (hart: één review of de mensen zelf). Maak er geen tweeluik, geen twee kolommen met "Hoofd" en "Hart" en geen cirkels van. Over ons is de enige pagina waar het hart de ruggengraat is.

## 4. Het ontwerpidee voor alle pagina's: de map op tafel

De homepage is het visitekaartje: merk, gevoel, eerste indruk. De onderliggende pagina's zijn **de map die de adviseur aan de keukentafel openslaat**: geordend, helder, elk vel goed verzorgd. Financieel advies is papierwerk. Het merk laat zien dat zij dat papierwerk rustig en overzichtelijk maken, dus het papierwerk zelf is hier het ontwerp.

Concreet betekent dat:

- **Materiaal blijft gelijk aan de homepage.** Hedvig Letters Serif voor koppen, Instrument Sans voor tekst, navy, sky en bruin, het crème papier. Geen nieuwe kleuren, geen nieuwe letters.
- **De vormtaal verschuift van "kamers" naar "vellen".** Vlakken zijn rechthoekig en wit met een fijne rand, op het crème papier, met ruime marges en haarlijnen als ordening. Denk aan een goed gezet jaarverslag of een notariële akte, niet aan een app met kaartjes. De gebogen kamerranden blijven voorbehouden aan de homepage en aan de opening van de dienstpagina's (zie de regels hieronder).
- **Verplichte documenten worden ontworpen objecten.** De vergelijkingskaart wordt een echte kaart, de klachtenroute een helder stappenblad, de registraties een rij controleerbare nummers met hun register. Zo wordt wat de wet vraagt een bewijs van zorgvuldigheid in plaats van een bijlage.
- **Typografie draagt de pagina.** Grote, rustige koppen, korte alinea's, een maat van circa 62 tekens, tabulaire cijfers bij bedragen en nummers, één koppenschaal (`--h1-pagina`, `--h2`, `--h2-blok`, `--h3-kaart` uit `v3.css`).

Niet doen: papieren texturen, schaduwen alsof er echt papier ligt, ezelsoren, paperclips, stempels die echt lijken. Het idee zit in de ordening en de verzorging, niet in skeuomorfisme. Dat is precies het verschil tussen deftig en kinderachtig.

### Gedeelde bouwstenen

Deze set maakt de pagina's samenhangend. Ontwerp ze één keer goed en gebruik ze consequent.

1. **Paginakop.** Kruimel, H1, een lead van hoogstens drie regels en, waar het past, een regel met drie snelfeiten (bijvoorbeeld "Onafhankelijk advies", "Thuis, op kantoor of via video", "Onderhoud zonder extra kosten"). Het afgesneden cirkelfragment verdwijnt. Wil je het merk laten terugkomen, gebruik dan een klein, heel cirkelpaar als vast teken bij de kruimel of de paginatitel, of niets.
2. **Sectienavigatie.** Alleen op lange pagina's (Hypotheken, Werkwijze en kosten, Onze dienstverlening, Privacy). Een smalle, meelopende lijst in de kantlijn op desktop en een compacte uitklapper bovenaan op mobiel. De huidige `Inhoud.astro` is het begin.
3. **De vergelijkingskaart (nieuw ontwerp).** Eén component, overal gelijk. Bovenaan de vier dingen die een bezoeker wil weten, groot en leesbaar: onafhankelijk ja of nee, waar je advies krijgt, onderhoud daarna, kosten. Daaronder, inklapbaar, wat er vergeleken wordt (als nette lijst met "wel" en "niet", geen grijze pillen) en de link naar de pdf. Gemiddelde prijzen alleen als `toon_prijzen` aanstaat. Varianten: volledig (op de eigen dienstpagina) en compact (op werkwijze en dienstverlening). Moet voldoen aan "goed vindbaar" van de AFM, dus nooit alleen achter een klik verstopt: de kaart zelf staat zichtbaar op de pagina.
4. **Vragen en antwoorden.** Per dienstpagina drie tot vijf vragen in een rustige uitklapper. Inhoud uit `faq.json` en de oogst, maar zie de kanttekening bij onafhankelijkheid in paragraaf 6. Geen vragen verzinnen waar geen antwoord van de klant onder staat.
5. **Eén citaat.** Eén review per pagina, passend bij het onderwerp, met naam en bron. Over ons is de uitzondering.
6. **Overstap.** De vervanger van de afsluiter: een rustige strook met de volgende vraag als kop, één regel tekst, de knop "Plan een vrijblijvend gesprek" en de link naar de volgende pagina. Licht, niet blauw gevuld, en nooit direct tegen de donkere footer aan zonder witruimte ertussen.

### Balansregels

Hard, zodat het niet kinderachtig of druk wordt:

- **Eén signatuur per pagina.** Precies één ontworpen object dat je onthoudt (staat per pagina hieronder). Alles eromheen is rustige typografie en de bouwstenen.
- **Hoogstens één homepage-echo per pagina.** Alleen de opening van de dienstpagina's (de kamer met boog in de kleur van die dienst) en het visitekaartje op Contact mogen terugkomen. Het gebouw onder één dak, de kaartenstapel, het tweeluik en het grote cirkelpaar uit de hero komen niet terug.
- **Hoogstens één donker vlak per pagina**, en nooit vlak voor de footer.
- **Geen eyebrows, geen rijen identieke kaartjes, geen genummerde cirkeltjes als versiering, geen decoratieve iconen.** Iconen alleen waar ze een functie aanwijzen (bellen, pdf, externe link, uitklappen).
- **Elke klik of hover voegt iets toe.** Een uitklapper geeft echte uitleg, een tab toont een andere situatie, een link gaat ergens heen. Geen hover-effecten op dingen waar niets achter zit.
- **Beweging is ingetogen.** Koppen boven de vouw komen via CSS binnen, de rest hoogstens een zachte onthulling. Alleen het signatuur-object mag een eigen, betekenisvolle beweging hebben. `prefers-reduced-motion` zet alles in de eindstand.
- **Lengte volgt inhoud.** Een korte pagina mag kort zijn. Liever een compacte, goed gezette Financiën-pagina dan een opgerekte.

## 5. Per pagina

Per pagina het doel, de opbouw in volgorde met per blok waarom het er staat, de signatuur en wat er verdwijnt. Teksten tussen aanhalingstekens bestaan al in de oogst of in de content-JSON.

### 5.1 Hypotheken (de belangrijkste pagina)

**Doel.** De bezoeker herkent zijn situatie, begrijpt hoe WoonAdvies adviseert en weet wat het kost. Dit is de pagina waar de meeste bezoekers vanaf de homepage naartoe klikken, dus hij krijgt het meeste ontwerp.

**Opbouw:**

1. **Opening.** De navy kamer met boog, zoals nu, als bewuste voortzetting van de klik op de homepage. H1 "Hypotheken", de lead, de knop en daaronder de drie snelfeiten uit de vergelijkingskaart ("Ja, onafhankelijk", "Bij ons op kantoor, bij jou thuis of via video", "Onderhoud zonder extra kosten"). *Waarom.* bevestigt in één blik de drie vragen die iedereen heeft.
2. **"In welke situatie zit je?" (signatuur).** Een rustige keuze tussen vier situaties: eerste woning, door naar een volgende woning, relatiebreuk of scheiding, rentevaste periode loopt af. Elke keuze toont wat WoonAdvies in die situatie doet (teksten uit `voorwie.json`, nog te laten bevestigen) en een review van iemand in die situatie, als die er is. Vorm: een smalle kolom met de vier situaties als grote, typografische regels, en een vel ernaast dat wisselt. Geen tabjes-balk, geen kaartjes. *Waarom.* de bezoeker zoekt zichzelf, niet een productcatalogus; de homepage noemt dezelfde situaties al, hier krijgen ze inhoud.
3. **Hoe wij adviseren.** De twee literal alinea's ("verduidelijking over welke opties er zijn", "niet simpelweg de goedkoopste hypotheek") als redactioneel blok, met één zin als groot uitgelicht statement. *Waarom.* dit is hun onderscheidende belofte.
4. **Wat we vergelijken.** Twee nette lijsten naast elkaar: de hypotheekvormen en de verzekeringen bij de hypotheek, met bij de verzekeringen de korte uitleg die er al is (overlijdensrisicoverzekering, betalingsbeschermer). Eerlijk wat niet: "Krediethypotheek: niet". *Waarom.* hoofd-informatie voor wie wil vergelijken, en het voorkomt dat de vergelijkingskaart de enige plek is waar dit staat.
5. **Kosten en de vergelijkingskaart.** De kaart (bouwsteen 3, volledige variant) met daarnaast in gewone taal hoe de beloning werkt: kennismaking vrijblijvend, vast tarief vooraf afgesproken, onderhoud zonder extra kosten, en een link naar Werkwijze en kosten. *Waarom.* verplicht goed vindbaar, en "wat kost het" is de eerste vraag.
6. **Ook daarna.** De bestaande alinea over veranderingen in je situatie, kort. *Waarom.* hun belofte van een langdurige relatie.
7. **Vragen en antwoorden.** Doorlooptijd, wat neem ik mee, kan het 's avonds of thuis, oversluiten. Alleen met bevestigde antwoorden.
8. **Overstap** naar Werkwijze en kosten.

**Verdwijnt:** de plakkende kaart naast de lopende tekst, het gebouw onder één dak, de generieke afsluiter.

### 5.2 Verzekeringen

**Doel.** Duidelijk maken welke risico's WoonAdvies met je doorloopt en dat zij vergelijken.

**Opbouw:**

1. **Opening.** Warme kamer met boog, H1, lead, knop.
2. **Wat je beschermt (signatuur).** Eén overzicht in drie groepen die de bezoeker in zijn eigen leven herkent: wat je bezit (woning, inboedel), wat je anderen kunt aandoen (aansprakelijkheid), en je inkomen en je naasten (overlijdensrisico, betalingsbeschermer, arbeidsongeschiktheid, uitvaart). Vormgegeven als één vel met drie zones en haarlijnen, niet als drie kaartjes. Waar de oogst uitleg heeft, klapt een regel open; waar niet, staat alleen de naam. *Waarom.* "Soms is het moeilijk om erachter te komen welke van deze verzekeringen voor jou van belang zijn" is letterlijk hun eigen probleemstelling.
3. **Hoe wij vergelijken.** Hun alinea's, opgeknipt in twee of drie korte blokken.
4. **Risico's bij je hypotheek.** De alinea over inkomensdaling en woonlasten, met een link naar Hypotheken. *Waarom.* de brug tussen de twee diensten.
5. **Vergelijkingskaart Risico's afdekken** (volledig) met de beloning.
6. **Eén citaat, vragen, overstap.**

### 5.3 Pensioenen

**Doel.** Rust geven over later, en eerlijk zijn over wat ze wel en niet onafhankelijk doen.

**Opbouw:**

1. **Opening.** Sky kamer met boog, H1, lead, knop.
2. **Van nu naar later (signatuur).** Een horizontale lijn van "nu" naar "als je stopt met werken", met hun drie vragen als drie punten op die lijn ("Wat voor vermogen denk je nodig te hebben", "Hoe krijg je dit vermogen het beste bij elkaar", "Welke opties zijn hiervoor beschikbaar"). Rustig, één lijn, drie punten, die bij binnenkomst eenmalig tekent. Op mobiel verticaal. *Waarom.* pensioen is tijd; de vragen zijn hun eigen tekst.
3. **Hoe we het aanpakken.** Hun twee alinea's.
4. **Eerlijk over onafhankelijkheid.** De vergelijkingskaart Vermogen opbouwen, met prominent en rustig "Wij nemen een geselecteerd aantal producten mee in onze vergelijking en advies". Niet wegstoppen; openheid is hier een vertrouwensargument. De pagina zegt nergens "onafhankelijk".
5. **Eén citaat, overstap.**

**Let op de reikwijdte.** In het AFM-register staat geen vergunning voor pensioenverzekeringen of premiepensioenvorderingen; lijfrente en spaarverzekering vallen onder "Vermogen", en daar hebben ze wel een vergunning voor. De pagina blijft dus bij de eigen oudedagsvoorziening (lijfrente, vermogen opbouwen) en suggereert geen advies over pensioenregelingen van een werkgever. Dit is mijn lezing van het register (afgeleid), laat Marijke het bevestigen.

### 5.4 Financiën

**Doel.** Kort en helder laten zien dat ze ook bij kleinere financiële vragen helpen, en hoe ze dan betaald worden.

**Opbouw (compact, één schermlengte of iets meer):**

1. **Opening.** Witte kamer met rand, H1, lead.
2. **Vier situaties als register (signatuur).** "Een krediet aanvragen", "Een spaarrekening openen", "Een schuld aflossen", "Een schenking ontvangen" als vier rustige regels met haarlijnen, met daarbij de alinea "Wij doen er alles aan om je te helpen". Geen opgerekte layout.
3. **Hoe wij hier beloond worden.** De twee bestaande alinea's over provisie, als vel ernaast.
4. **Kredietwaarschuwing**, zie paragraaf 6. Alleen als de pagina krediet blijft noemen.
5. **Eén citaat, overstap.**

**Open punt.** "Relatiebreuk of scheiding" staat op de homepage bij Hypotheken en in `voorwie.json` bij Financiën. Kies één plek (mijn voorstel is Hypotheken) en houd het overal gelijk.

### 5.5 Werkwijze en kosten

**Doel.** Eén pagina waar je ziet hoe het van eerste gesprek tot nazorg gaat, wanneer je wat betaalt en wat je zelf doet.

**Opbouw:**

1. **Paginakop** met de eerste twee zinnen van de lead en de snelfeiten "Kennismaking vrijblijvend", "Tarief vooraf afgesproken", "Onderhoud zonder extra kosten".
2. **De route (signatuur).** De vier stappen van de homepage (Kennismaken, Verdiepen, Uitvoeren, Ook daarna) als één doorlopend document. Per stap drie vaste regels: *wat wij doen* (hun stappentekst), *wat we van jou vragen* (de vier punten uit "Wat vragen wij van je", verdeeld over de stappen: juiste en volledige informatie en totaalbeeld bij Verdiepen, informatie doornemen bij Uitvoeren, wijzigingen doorgeven bij Ook daarna) en *wat het kost* (vrijblijvend, dan het tarief vóór de volgende stap, daarna onderhoud zonder extra kosten). De lijn die naar het huis uit het merk loopt mag blijven, als het enige merkmoment op deze pagina. *Waarom.* kosten en verwachtingen staan op het moment dat ze spelen, dat is transparantie in de vorm in plaats van in een losse tabel. Het lost ook het losse vierkoloms tekstblok op.
3. **Wat het kost.** Een kostenoverzicht als één verzorgd vel: de vier regels uit `kosten_regels`, de zin dat het tarief afhangt van het dienstenpakket en niet van het product, en de gemiddelde prijzen als `toon_prijzen` aanstaat.
4. **De drie vergelijkingskaarten.** Compacte variant, onder elkaar of als één vel met drie kolommen, met per kaart onafhankelijk ja of nee en de pdf. Verplicht op deze pagina.
5. **Overstap** naar Over ons.

**Dit wordt het enige stappenplan op de site.** Onze dienstverlening verwijst ernaar in plaats van een eigen versie te tonen.

### 5.6 Over ons

**Doel.** Laten zien wie er aan tafel zit. Dit is op een bevestigingssite misschien wel de belangrijkste pagina na Hypotheken.

**Opbouw:**

1. **Paginakop** met de gezamenlijke foto, bescheiden zoals nu, en de lead "Onze werkwijze kenmerkt zich door een sterk persoonlijke benadering".
2. **Feiten in één regel.** Sinds 2010 (de vergunning loopt volgens het register sinds 6 september 2010), 5,0 op Google, 10 van de 10 op Advieskeuze, en "1.000+ huishoudens" alleen als Marijke het bevestigt.
3. **Dennis en Marijke (signatuur).** Twee mensen naast elkaar als een duo, ieder met naam, rol, een paar zinnen in eigen woorden (moet van de klant komen) en de reviews die hen bij naam noemen, gezet als korte kantlijnnotities naast hun tekst in plaats van als witte kaarten. Een eigen portret per persoon zou dit blok enorm sterker maken; tot die er is, werkt het zonder foto, met de naam groot gezet. *Waarom.* klanten noemen hen in de reviews bij naam, dat is het sterkste bewijs dat ze hebben.
4. **Wat je van ons mag verwachten.** Hun twee alinea's opgedeeld in drie korte beloftes met hun eigen woorden als kop: transparantie, alle kennis onder één dak, vooruitdenken en ontzorgen. Typografisch, geen iconen.
5. **Het kantoor.** Oostmaaslaan 241B, met een foto van het pand zodra die er is, en de mogelijkheid om thuis of via video af te spreken. *Waarom.* "waar zitten ze" hoort bij vertrouwen.
6. **Geregistreerd en controleerbaar.** Eén rustige regel met AFM, Kifid en KvK en een link naar Onze dienstverlening.
7. **Overstap** naar Contact.

**Verdwijnt:** de gecentreerde alinea die als citaat oogt, het tweede grote citaat onderaan, de witte reviewkaarten.

### 5.7 Contact

**Doel.** Eén keuze maken en weten wat er daarna gebeurt.

**Opbouw:**

1. **Paginakop**, kort, met H1 "Contact" en de lead.
2. **Twee kolommen (signatuur: het visitekaartje plus het formulier).** Links het visitekaartje van de homepage (de toegestane echo, hier hoort het thuis) met daaronder bereikbaarheid en de drie directe kanalen als rustige tekstregels: bellen, WhatsApp, e-mail. Rechts het formulier "Plan een vrijblijvend gesprek", met de keuze thuis, kantoor of video als het eerste veld in plaats van als drie losse kaarten bovenaan. Onder de knop één regel over wat er daarna gebeurt (reactietermijn, nog op te halen bij de klant) en een link naar de privacyverklaring.
3. **Zo kom je bij ons.** Adres, routelink, en parkeren of openbaar vervoer als de klant dat aanlevert. Geen ingesloten kaart (cookies).
4. Geen afsluiter.

**Verdwijnt:** de drie gebogen kaarten bovenaan, de drie omlijnde knoppen. Het formulier moet bij livegang aan de eisen uit de globale instructies voldoen (endpoint, honeypot met `display: none`, Turnstile, eerlijke foutmelding); nu blijft de eerlijke conceptmelding staan.

### 5.8 Onze dienstverlening

**Doel.** De plek waar alles wat de wet en een kritische klant vragen netjes en controleerbaar staat. Naslag, maar met dezelfde zorg als de rest.

**Opbouw (met sectienavigatie):**

1. **Paginakop** met lead.
2. **Wie we zijn.** "WoonAdvies Groep is een handelsnaam van DEMA Financieel Advies B.V." met adres en contact. Nieuw en verplicht, zie paragraaf 6.
3. **Wat we doen.** Korte verwijzing naar de route op Werkwijze en kosten, geen tweede stappenplan.
4. **Onafhankelijk advies, per productgroep.** De bestaande tabel is goed van opzet; verfijn hem typografisch. Daaronder de zin over geen eigendomsbelang.
5. **Hoe we beloond worden.** Vast tarief en provisie.
6. **Registraties (signatuur).** De drie nummers groot en tabulair, elk met wat het register doet en een link naar de vindplaats. De AFM-link gaat naar hun eigen registerpagina, niet naar de algemene zoekpagina (adres in paragraaf 6). Geen logo's van AFM of Kifid.
7. **Als je een klacht hebt.** Twee stappen (eerst bij ons, daarna bij Kifid) als één helder stappenblad, nu met de termijnen van Kifid en het e-mailadres. Daarna de beroepsaansprakelijkheidsverzekering.
8. **Reviews.** Eén korte verantwoording over waar de reviews vandaan komen (zie paragraaf 6).
9. **Documenten.** De drie vergelijkingskaarten. De dienstenwijzer van 2015 verdwijnt (oud telefoonnummer, oude privacywet); deze pagina neemt zijn rol over.
10. Rustige contactregel, geen afsluiterblok.

### 5.9 Privacy en cookies

Inhoudelijk in orde. Wat verandert: het cirkelfragment weg, de statutaire naam erbij in "Wie we zijn", dezelfde sectienavigatie en leesmaat als Onze dienstverlening, en een rustige contactregel onderaan in plaats van de afsluiter. Niet meer ontwerpen dan nodig; dit is de ene pagina waar saai mag.

### 5.10 Wat op alle pagina's verandert

- **Footer.** Onder de registraties "WoonAdvies Groep is een handelsnaam van DEMA Financieel Advies B.V.". De link "Dienstenwijzer" verdwijnt. "Klachten" springt naar `/onze-dienstverlening#klachten`.
- **Kruimel.** "Diensten" wijst nu naar `/#diensten`. Prima zolang er geen overzichtspagina is; geen aparte dienstenpagina maken.
- **Paginakop.** Overal hetzelfde systeem, zonder het afgesneden cirkelfragment.
- **Afsluiter** wordt de overstap (bouwsteen 6) met copy per pagina.

## 6. Wat er verplicht op moet

De eerdere inventarisatie van 5 november staat in `docs/2026-11-05-overzicht-site-v3.md`. Hieronder die punten plus wat er vandaag bij kwam. Kolom "zekerheid" volgt de vault-afspraak: *geverifieerd* is bij de bron gelezen, *afgeleid* is mijn conclusie.

| Eis | Waarom | Waar op de site | Zekerheid |
| --- | --- | --- | --- |
| **Statutaire naam naast de handelsnaam** | Op de website horen de volledige statutaire naam en de handelsnaam te staan (Rijksoverheid, regels bedrijfscorrespondentie; ACM). Het AFM-register toont statutaire naam **DEMA Financieel Advies B.V.**, handelsnaam WoonAdvies Groep. Staat nu nergens op de site. | Footer, Onze dienstverlening, Privacy | Register geverifieerd (11 nov 2026), plicht geverifieerd |
| **Vergelijkingskaarten goed vindbaar** | Art. 86f Bgfo, AFM. Op de pagina's over dienstverlening, kosten en het product zelf, niet alleen in de footer. | Hypotheken (Hypotheek), Verzekeringen (Risico's afdekken), Pensioenen (Vermogen opbouwen), alle drie op Werkwijze en kosten en Onze dienstverlening, plus de kostenband op de homepage | Geverifieerd (5 nov) |
| **Onafhankelijk alleen afgebakend** | Art. 86f Bgfo, per productgroep. Vermogen opbouwen is volgens hun eigen kaart niet onafhankelijk. **Nieuw gevonden:** `faq.json` antwoordt op "Zijn jullie echt onafhankelijk?" met een onvoorwaardelijk "Ja". Dat moet afgebakend worden voordat die vraag ergens op de site komt. | Hypotheken, Verzekeringen, FAQ, Onze dienstverlening | Geverifieerd |
| **Advies binnen de vergunning** | Het register noemt adviseren en bemiddelen in betaalrekeningen, consumptief krediet, elektronisch geld, hypothecair krediet, inkomensverzekeringen, schade particulier en zakelijk, spaarrekeningen, vermogen en zorgverzekeringen, en alleen adviseren in deelnemingsrechten. Geen pensioenverzekeringen. | Pensioenen blijft bij lijfrente en vermogen opbouwen | Register geverifieerd, uitleg afgeleid |
| **Kredietwaarschuwing** | Verplicht in alle kredietreclame, ook online, met het materiaal van de AFM (niet zelf vormgeven). De pagina Financiën noemt "Een krediet aanvragen" en hun register bevat consumptief krediet. | Financiën, alleen als krediet erop blijft staan | Plicht geverifieerd, toepassing op deze pagina afgeleid |
| **Klachtenprocedure en Kifid** | Art. 4:17 Wft en art. 57 Bgfo. Nieuw voorstel: de termijnen van Kifid erbij (binnen een jaar nadat je de klacht bij het kantoor indiende, of binnen drie maanden na een schriftelijk definitief standpunt dat naar Kifid en die termijn verwijst). | Onze dienstverlening | Termijnen uit het Kifid-reglement, versie van 1 november 2024 nog nalezen |
| **Verantwoording reviews** | Sinds de Omnibus-richtlijn (2022) moet je, als je consumentenreviews toont, zeggen of en hoe je controleert dat ze van echte klanten komen. Een korte regel volstaat: de reviews komen van Google en Advieskeuze, zijn letterlijk overgenomen, het is een selectie, en daar lees je ze allemaal. | Bij elke reviewweergave een link naar de verantwoording, die zelf op Onze dienstverlening staat | Plicht afgeleid uit de Omnibus-regels en ACM-richtlijnen, niet bij een jurist nagevraagd |
| **Informatie vooraf** | Art. 57 Bgfo: wie je bent, adres, registratie, beloning. | Onze dienstverlening | Geverifieerd (5 nov) |
| **Privacyverklaring** | AVG art. 13. Bestaat. | Privacy en cookies, link bij het formulier | Geverifieerd |
| **Geen verouderde documenten** | De dienstenwijzer van 2015 noemt een oud telefoonnummer en de Wbp. Verouderde informatie kan misleidend zijn. | Footer en documentenlijst | Geverifieerd |
| **Btw-nummer** | Alleen verplicht als ze btw-plichtig zijn. | Footer, Onze dienstverlening | Open, vragen |
| **Duurzaamheid (SFDR)** | Geldt volgens de AFM voor adviseurs met drie of meer werknemers die beleggingsadvies of advies over beleggingsverzekeringen geven. Met twee adviseurs valt WoonAdvies er waarschijnlijk buiten. | Niets, tenzij het team groter is | Drempel geverifieerd, toepassing afgeleid |
| **Toegankelijkheid** | De European Accessibility Act geldt voor diensten niet voor micro-ondernemingen. We bouwen toch op WCAG 2.1 AA. | Overal | Afgeleid (5 nov) |
| **Geen AFM-logo** | Je mag het AFM-logo niet als keurmerk gebruiken; "AFM-geregistreerd" als tekst met nummer is gangbaar. | Bewijsregel, registraties | Afgeleid |

Adres van hun eigen AFM-registerpagina (voor de link bij registraties): `https://www.afm.nl/nl-nl/sector/registers/vergunningenregisters/financieel-dienstverleners/details?id=83B647AB-E5FA-DF11-BB5A-005056BE6692`

Bronnen: [AFM, vergelijkingskaart](https://www.afm.nl/nl-nl/sector/themas/dienstverlening-aan-consumenten/klantrelatie/vergelijkingskaart), [AFM, register financiële dienstverleners](https://www.afm.nl/nl-nl/sector/registers/vergunningenregisters/financieel-dienstverleners/details?id=83B647AB-E5FA-DF11-BB5A-005056BE6692), [Ondernemersplein, regels voor bedrijfscorrespondentie](https://ondernemersplein.overheid.nl/wetten-en-regels/regels-voor-bedrijfscorrespondentie/), [ACM, bedrijfsgegevens vermelden](https://www.acm.nl/nl/verkoop-aan-consumenten/consumenten-informeren/bedrijfsgegevens-vermelden), [Ondernemersplein, reclame voor financiële dienstverlening](https://ondernemersplein.overheid.nl/reclame-voor-financiele-dienstverlening/), [Kifid, klachtregeling vanaf 1 november 2024](https://www.kifid.nl/media/agcbc1lu/klachtregeling-kifid-vanaf-1-november-2024.pdf), [AFM, SFDR-vereisten](https://afm.nl/en/sector/themas/duurzaamheid/sfdr/vereisten), [ACM over online reviews](https://www.acm.nl/nl/publicaties/acm-pakt-handel-nepreviews-en-neplikes-aan), [Besluit Gedragstoezicht financiële ondernemingen](https://wetten.overheid.nl/BWBR0020421/).

## 7. Tekstregels

- **Bestaande teksten letterlijk** (eis Ruud). Wel toegestaan: een lange alinea opknippen, zinnen selecteren voor een lead of een uitgelicht statement, een tussenkop toevoegen. Niet toegestaan: zinnen herschrijven of inhoud verzinnen.
- **Nieuw mag alleen in de bediening**: koppen van bouwstenen, linkteksten, de vraag in een overstap, formulierlabels. Kort, in je-vorm, zonder dubbele punten midden in een zin en nooit met een em-dash. Elke nieuwe regel krijgt een herkomstlabel in `oogst/herkomst-v3.md` als "eigen, ter verificatie".
- **Feiten alleen met bron.** Bedragen, termijnen, aantallen en titels (zoals Erkend Hypotheekadviseur of 1.000+ huishoudens) alleen als ze in de oogst staan of door Marijke bevestigd zijn.
- **Ontbrekende inhoud** laat je weg. Ontwerp elk blok zo dat het er ook goed uitziet zonder de inhoud die nog komt (bijvoorbeeld Over ons zonder portretten). Geen placeholdertekst in de build.
- Alle tekst komt in de content-JSON (`v3-paginas.json`, `v3-diensten.json`, `v3-vergelijkingskaarten.json`), niets hardcoded, zodat het CMS-klaar blijft.

## 8. Wat we nog van Marijke nodig hebben

Bovenop de lijst in `docs/2026-11-05-overzicht-site-v3.md` paragraaf 4, die nog openstaat:

1. Akkoord dat "handelsnaam van DEMA Financieel Advies B.V." op de site komt.
2. Adviseren jullie nog over consumptief krediet? Zo ja, dan komt de kredietwaarschuwing op Financiën. Zo nee, dan gaat "Een krediet aanvragen" eraf.
3. Bij Pensioenen: klopt het dat het gaat om je eigen oudedagsvoorziening (lijfrente, vermogen opbouwen) en niet om pensioenregelingen via de werkgever?
4. Een correct, afgebakend antwoord op "Zijn jullie echt onafhankelijk?".
5. Per adviseur een paar zinnen (achtergrond, waar je goed in bent, sinds wanneer) en het liefst een eigen portret.
6. Een foto van het pand, en hoe je er komt (parkeren, openbaar vervoer).
7. Bereikbaarheid en hoe snel jullie reageren op een aanvraag.
8. Wat een klant meeneemt naar het eerste gesprek (voor de vragen bij Hypotheken).
9. Of oversluiten en een aflopende rentevaste periode een dienst is die ze actief willen noemen.
10. Hoeveel mensen er werken (voor de SFDR-drempel; bij twee personen valt dit weg).

## 9. Werkwijze voor de designer

1. **Begin met twee pagina's als proef**: Hypotheken en Werkwijze en kosten. Samen bevatten ze bijna alle bouwstenen (paginakop, sectienavigatie, vergelijkingskaart, vragen, citaat, overstap) en de twee sterkste signaturen. Laat die aan Ruud zien op 100% zoom (1440 en 390) voordat de rest volgt.
2. Daarna Over ons en Contact, dan Verzekeringen, Pensioenen en Financiën, als laatste Onze dienstverlening en Privacy.
3. Componenten in `site/src/components/v3/`, de route `[dienst].astro` mag per dienst verschillende blokken tonen (bijvoorbeeld via velden in `v3-diensten.json`) zodat de vier pagina's niet meer één sjabloon zijn.
4. **Poorten** zoals bij de vorige ronde: mobiel-poort op alle tien pagina's in Chromium en WebKit, axe nul overtredingen op 1280 en 390, `soepel.mjs` groen op de productiebuild, reflow tot 320, eigen visuele controle op 100%. Meet tegen `woonadvies-preview` en controleer eerst de titel op de poort.
5. **Kwaliteitspassen** als reviewers (taste-skill eindpoort, better-typography, ui-ux-pro-max, improve-animations), doel minstens 8,5 op de taste-eindpoort voor de set als geheel, niet per pagina.
6. **Uitrol** na akkoord van Ruud via `npm run build` en `node scripts/naar-proefontwerp.mjs` in `site/`, daarna de feedbacklader en meldingsbalk in `~/offertebouwer`, zoals beschreven in de project-CLAUDE.md.

## 10. Beslissingen voor Ruud vooraf

1. Akkoord op het idee "de map op tafel" voor de onderliggende pagina's, met de homepage als enige plek voor kamers en bogen (behalve de opening van de dienstpagina's)?
2. Mogen de gemiddelde prijzen nu aan (`toon_prijzen`), of blijft dat wachten op Marijke?
3. Financiën houden als korte pagina, of samenvoegen met een andere dienst?
4. De vragen in paragraaf 8 in één mail aan Marijke, of in het volgende gesprek?
