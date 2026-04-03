# ichwillsicherheit.de

Website von **MG Solutions** — Cybersecurity-Dienstleistungen für KMU.

## Stack

- [Next.js](https://nextjs.org/) 13 (Pages Router)
- [Tailwind CSS](https://tailwindcss.com/) 3
- [Framer Motion](https://www.framer.com/motion/)
- [Nodemailer](https://nodemailer.com/) (Kontaktformular)
- Font Awesome (Icons)

## Seiten

| Route | Beschreibung |
|---|---|
| `/` | Startseite |
| `/about` | Über uns |
| `/pricing` | Preise & Pakete |
| `/exposure` | Exposure-Report |
| `/contact` | Kontakt |
| `/faq` | FAQ |
| `/roadmap` | Roadmap |
| `/select` | Paket wählen |
| `/agb`, `/privacy`, `/imprint`, `/cookies`, `/widerruf` | Rechtliches |

## Setup

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
npm run start
```

## Umgebungsvariablen

Kopiere `.env.local` und passe die Werte an:

```env
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=...
RECAPTCHA_SECRET_KEY=...
SMTP_HOST=...
SMTP_PORT=...
SMTP_USER=...
SMTP_PASS=...
MAIL_TO=...
```

## Lizenz

MIT © 2026 MG Solutions

