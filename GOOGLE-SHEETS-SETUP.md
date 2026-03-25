# Google Sheets — Oppsett for Industrielle Kalkulator

Følg disse stegene for å koble kalkulatoren til Google Sheets og lagre alle estimater automatisk.

---

## Steg 1: Lag et nytt Google Sheet

1. Gå til [sheets.google.com](https://sheets.google.com)
2. Lag et nytt ark og gi det navnet: **Industrielle Kalkulator — Leads**
3. I **rad 1** (header), fyll inn disse kolonnene (A → Q):

| Kolonne | Innhold |
|---------|---------|
| A | Tidsstempel |
| B | Kategori |
| C | Underkategori |
| D | Svar (JSON) |
| E | Material kr |
| F | Arbeid kr |
| G | Total lav |
| H | Total høy |
| I | Forhandlet |
| J | Forhandlet pris |
| K | Pakkepris |
| L | Pakke-detaljer |
| M | Navn |
| N | Telefon |
| O | Epost |
| P | Enhet |
| Q | Linjeposter (JSON) |

---

## Steg 2: Åpne Apps Script

1. I Google Sheets, klikk **Extensions → Apps Script**
2. Slett alt som er i editoren (function myFunction() {...})
3. Lim inn dette scriptet:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    new Date().toISOString(),
    data.kategori || '',
    data.underkategori || '',
    data.svar ? JSON.stringify(data.svar) : '',
    data.materialTotal || 0,
    data.arbeidTotal || 0,
    data.totalLav || 0,
    data.totalHoy || 0,
    data.forhandlet || 'nei',
    data.forhandletPris || '',
    data.pakkepris || 'nei',
    data.pakkeDetaljer || '',
    data.navn || '',
    data.telefon || '',
    data.epost || '',
    data.enhet || 'ukjent',
    data.items ? JSON.stringify(data.items) : ''
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({status: 'ok'}))
    .setMimeType(ContentService.MimeType.JSON);
}
```

4. Klikk **Lagre** (disk-ikonet) og gi prosjektet et navn, f.eks. *KalkulatorWebhook*

---

## Steg 3: Deploy som Web App

1. Klikk **Deploy → New deployment**
2. Klikk ⚙️-ikonet ved siden av "Type" og velg **Web app**
3. Fyll inn:
   - **Description:** Kalkulator webhook
   - **Execute as:** Me
   - **Who has access:** Anyone
4. Klikk **Deploy**
5. Godkjenn tillatelsene (klikk "Advanced" → "Go to KalkulatorWebhook" hvis du får advarsel)
6. **Kopier Web App URL-en** — den ser slik ut:
   ```
   https://script.google.com/macros/s/AKfycb.../exec
   ```

---

## Steg 4: Lim inn URL-en i kalkulatoren

Send URL-en til Sensei, eller gjør det selv:

Åpne `public/index.html` og finn denne linjen nær toppen av `<script>`-blokken:

```javascript
const SHEETS_WEBHOOK = ""; // Krisfred fyller inn Google Apps Script URL her
```

Erstatt `""` med URL-en din:

```javascript
const SHEETS_WEBHOOK = "https://script.google.com/macros/s/AKfycb.../exec";
```

Lagre filen og push:

```bash
cd /home/krisf/.openclaw/workspace/projects/industrielle-kalkulator
git add -A
git commit -m "Aktiverer Google Sheets webhook"
git push origin main
```

---

## Hva lagres?

Kalkulatoren sender data til Sheets på to tidspunkter:

1. **Etter estimat vises** — uten kontaktinfo (anonymt lead)
2. **Etter kontaktskjema sendes** — med navn, telefon og e-post (varmt lead)

Begge radene skrives uavhengig, slik at du ser:
- Hvor mange som **starter** kalkulatoren
- Hvor mange som **fullfører** med kontaktinfo
- Hvilke kategorier er mest populære
- Mobilandel vs desktop

---

## Feilsøking

**Ingenting dukker opp i Sheet?**
- Sjekk at `SHEETS_WEBHOOK` er satt i `index.html`
- Sjekk at "Who has access" er satt til **Anyone** (ikke "Anyone with Google account")
- Redeploy hvis du endret scripttet etter første deploy (du må lage en **New deployment**, ikke oppdatere gammel)

**CORS-feil i console?**
- Dette er normalt! Vi bruker `mode: 'no-cors'` som ikke returnerer svar, men dataen sendes likevel.
