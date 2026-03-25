# Magnus Feedback — Industrielle Kalkulator
**Dato:** 25. mars 2026
**Kilde:** Lydopptak (chatbot.m4a), ~12 min

## Nøkkelinnsikter

### 1. ❌ Dropp tre prisalternativer (budget/standard/premium)
> «Den kunne gjerne skudd opp prisen litt, og så droppet å ha tre forskjellige alternativer. Det gjør det bare vanskeligere for kunden.»

**Handling:** Fjern budget/standard/premium-valget. Gi ÉN pris (standard/god kvalitet med margin).

### 2. 🔥 Forhandlings-bot — Magnus sin favoritt-idé
> «Det hadde vært veldig bra hvis botten forhandler pris. Da slipper man å forhandle selv.»

**Flyt Magnus ser for seg:**
- Bot gir pris (premium kvalitet innbakt)
- Kunde sier «det er litt dyrt»
- Bot: «Ønsker du at jeg går ned på kvaliteten?»
- Kunde: «Ja»
- Bot setter inn medium-kvalitet, prisen dropper
- 12+ prisklasser i backend, men kunden ser bare «jeg justerte ned kvaliteten»

**Handling:** Bygg forhandlingslogikk ETTER estimat er gitt.

### 3. 📎 Kunden kan sende link til ønsket produkt
> «Kanskje kunden har et gulv i tankene — de kan sende en link»

- Boten leser linken, henter pris, regner estimat med det produktet
- «Det tar et minutt, så det burde være et spørsmål mellom mens boten jobber»

**Handling:** Legg til mulighet for å sende produktlink. Vis mellomspørsmål mens AI scraper.

### 4. 🏢 Bedriftspersonlighet / tone
> «Du kan gi den en bedriftsstemme. Vil den være høflig? Jovial? Profesjonell?»

Magnus ville bare ha den «høflig». Foreslo at boten selv kan foreslå bedriftsprofil for Industrielle AS.

**Handling:** Generer bedriftspersonlighet-forslag for Magnus.

### 5. 📊 Kalibrering med ekte case
> «Man burde ta jobber man har gjort som man har data på, hva det faktisk koster»

**Kalibreringsprosess Magnus foreslår:**
1. Samle 5 ekte jobber med kjent kostnad (material + arbeid + profit)
2. Kjør samme jobb gjennom boten
3. Sammenlign bot-pris vs. faktisk pris
4. Juster opp/ned
5. De første ~100 jobbene: manuell kontroll av hvert estimat

**Handling:** Lag kalibreringsskjema. Magnus må levere 5 case.

### 6. 💰 Auto-aksept under terskel
> «Jobber under 70k kan den akseptere og booke inn i kalenderen. Over det må det sjekkes.»

**Handling:** Legg til terskel-innstilling i admin. Under X kr → auto-book. Over → godkjenning.

### 7. 📹 Video-befaring som neste steg
> «Befaringen kunne vært en videobefaring. Kunden betaler depositum 1500 kr, får et videointervju.»

**Flyt:**
Estimat → Depositum (1500 kr) → Video-befaring → Endelig pris → Start jobb

**Handling:** Fremtidig feature. Legg til i roadmap.

### 8. 🤖 «Alt går gjennom botten»
> «Du kan bare si: jeg priser ingenting lenger. Alt går gjennom denne AI-botten. Den er bedre, og jeg bruker for mye tid på det.»

Magnus ser for seg at ALLE prisforespørsler — inkl. venner/familie — sendes gjennom boten:
- Venner: «Kjør inn gjennom boten, så ser jeg hva jeg kan gjøre med prosentene»
- Margin er innbakt, så 10% rabatt er reell men ikke farlig

### 9. ⚠️ Vag produktbeskrivelse — VIKTIG
> «Du binder deg litt. Burde ikke skrive 'denne toaletten' eller 'klasse 2 lekter' — for da får kunden en annen og klager.»

**Magnus sitt poeng:** Estimatet bør bruke generiske kategorier, ikke spesifikke produktnavn.
- ❌ «Hunton vindsperre 2,7m x 1,2m»
- ✅ «Vindsperre, 3-4 veis diffusjonsåpen»
- ❌ «JELD-WEN Diplomat 2-fags»
- ✅ «Standard 2-fags vindu med isolerglass»

**Handling:** Gjennomgå alle estimat-linjer og gjør dem generiske.

## Prioritert TODO

1. **Fjern budget/standard/premium** → gi én pris (standard+margin)
2. **Generiske produktbeskrivelser** — ikke bind deg til merkevare/spesifikt produkt
3. **Forhandlingslogikk** — «det er litt dyrt» → «skal jeg gå ned på kvalitet?»
4. **Kalibrering** — Magnus leverer 5 case, vi sammenligner
5. **Auto-aksept terskel** — under 70k = auto-book
6. **Produktlink-støtte** — kunde sender link, bot scraper pris
7. **Bedriftspersonlighet** — generer forslag for Magnus
8. **Video-befaring** — roadmap (fremtidig)
