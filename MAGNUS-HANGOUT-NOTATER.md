# Magnus Hangout — Nøkkelpunkter
**Dato:** 25. mars 2026
**Varighet:** ~100 min (30 min substans, resten uformell prat)

---

## Chatbot-gjennomgang — Magnus godkjenner og utdyper

### 1. Forhandlingsbot — detaljert eksempel fra Magnus

Magnus ga et konkret vindu-eksempel på hvordan forhandlingen bør fungere:

**Trinn 1 — Premium priset inn automatisk:**
- Trelagsglass, aluminiumsbekledd, med ventiler, eventuelt selvrensende glass
- Boten forklarer HVORFOR premium er valgt: «Vi ønsker at du ikke skal trenge å vedlikeholde vinduet»

**Trinn 2 — Kunden sier dyrt:**
- Bot: «Nå er det priset inn høy kvalitet. Ønsker du at vi går ned?»
- Bot forklarer konsekvensene: «Vi går fra trelagsglass til tolagsglass, dropper aluminiumsbekledning. Da sparer du X kroner.»

**Trinn 3 — Ytterligere ned:**
- Bot: «Vi kan vurdere PVC-vindu, men vår anbefaling er dette fordi...»
- Boten prøver å overbevise kunden tilbake — en fullverdig salgsrådgiver

**Gulv-eksempel:**
- Premium parkett priset inn har 10mm eiketopp — kan slipes ned flere ganger
- Billigere gulv kan bare slipes én gang, kortere levetid
- Boten forklarer forskjellen aktivt

### 2. Punkt-for-punkt godkjenning

Magnus gikk gjennom alle 9 punkter:

| # | Punkt | Status |
|---|-------|--------|
| 1 | Fjern budget/standard/premium — én pris | ✅ OK |
| 2 | Generiske produktbeskrivelser | ✅ OK — «ikke pris spesifikke merkevarer, de koster noen ganger dobbelt» |
| 3 | Pris opp | ✅ **50% økning** (vi satte 35%, Magnus vil ha 50%) |
| 4 | Forhandlingslogikk | ✅ OK — godkjent |
| 5 | Produktlink-støtte | ⚠️ **Skeptisk** — men ser verdien i at boten leser produktinfo (løpemeter, spesifikasjoner, svinn) |
| 6 | Auto-aksept under terskel | ✅ OK |
| 7 | Videobefaring | ✅ OK |
| 8 | Kalibrering | ✅ OK |
| 9 | Bedriftsprofil | ✅ OK — «Boten kan godt ha et norsk navn» |

### 3. Viktige tilleggspunkter

**Boten som salgsrådgiver:**
- Ikke bare priskalkulator — den skal rådgi kunden om produktvalg
- Forklare HVORFOR premium er anbefalt (vedlikehold, levetid, kvalitet)
- Kunder vil vite spesifikasjoner — boten skal kunne svare

**Produktlink — mer enn bare pris:**
- Hvis kunde linker kledning: produktbeskrivelsen inneholder løpemeter per m², svinntall
- Boten kan beregne eksakt materialforbruk med svinn innbakt
- Magnus ser potensialet men er skeptisk til implementering

**Chatbot-navn:**
- Magnus vil at boten har et norsk navn (ikke «Industrielle Chatbot»)
- Ikke bestemt ennå — foreslå opsjoner

## TODO basert på hangout

- [ ] **Øk priser fra 35% til 50%** — Magnus sin korreksjon
- [ ] **Forhandlingsbot: legg til forklaringer** — hvorfor premium er valgt (vedlikehold, levetid)
- [ ] **Gi chatboten et norsk navn** — foreslå til Magnus
- [ ] **Produktlink: vurder implementering** — les produktspecs, beregn med svinn
