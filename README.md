# svaagan.github.io/rullo/

Nettsiden til Rullo (het Knips og lå på knipspics.no til 2026-11-10), servert av GitHub Pages fra repoet
`svaagan/rullo` under fellessiden. Alle stier begynner med `/rullo/`. knipspics.no sendes videre hit fra Domeneshop. Statiske filer, ingen byggsteg.

- `index.html` – forsiden.
- `en/` – engelsk utgave av de tre sidene: `en/index.html`, `en/privacy/` og `en/support/`. Samme CSS, JS og fonter
  (absolutte stier fra rota). Hver side har en liten «English»/«Norsk»-lenke i bunnen og `hreflang`-tagger
  (`nb`, `en` og `x-default` → engelsk). Tekstene følger `../docs/sprak/en.md` og skrives for hånd, ikke ord for ord;
  endres faktaene på en norsk side, må den engelske følge med.
- `404.html` – «Fant ikke siden». QR-lenkene `/e/<kode>` fra event-utgaven (TestFlight-bygg 1–2) havner også her og
  får en forklaring; appen har ikke event lenger. Siden er felles for begge språk (GitHub Pages har bare én 404),
  så den har en kort engelsk linje med lenke til `/en/`.
- `personvern/` og `support/` – personvernerklæringen og hjelp (støttelenken i App Store Connect).
- `site.js` – `APP_URL` er lenken nedlastingsknappen går til (TestFlight under testing, så App Store). Knappeteksten
  velges etter `<html lang>` (`nb` eller `en`).
- `fonts/` – appens egne fonter, kuttet ned til latinske tegn, med OFL-lisensene.

Kilden til appen ligger i et eget, privat repo.
