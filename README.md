# XHome Menue Landing Page

Eine moderne, responsive Landing Page für die XHome Menue MacOS App.

## Features

- 🎨 **Tailwind CSS** - Modernes, utility-first CSS Framework
- 🖼️ **Custom Lightbox** - Einfache, schnelle Bildgalerie ohne externe Abhängigkeiten
- 📱 **Responsive Design** - Optimiert für alle Bildschirmgrößen
- ⚡ **GSAP Animationen** - Smooth Scroll-Animationen und Transitions
- 🔧 **Live Server** - Hot-reload Development Server

## Installation

```bash
npm install
```

## Development

Starte den Development Server:

```bash
npm run dev
```

Die Seite wird unter `http://localhost:3000` verfügbar sein.

## Build

Erstelle optimierte CSS-Dateien:

```bash
npm run build:tailwind
```

## Projekt-Struktur

```
├── assets/              # Bilder und statische Dateien
│   ├── logo/           # Logo-Dateien
│   └── screenshots/    # App Screenshots
├── css/                # CSS-Dateien
│   ├── index.css      # Custom CSS
│   └── tailwind*.css  # Tailwind Build-Dateien
├── index.html          # Haupt-HTML-Datei
├── index.js           # JavaScript für Animationen
└── package.json       # NPM Konfiguration
```

## Features

### Custom Lightbox

- Einfache JavaScript-Implementierung
- Vollbild-Bildanzeige
- Keyboard-Navigation (ESC zum Schließen)
- Touch/Click zum Schließen

### Animationen

- GSAP ScrollTrigger für Reveal-Animationen
- Smooth Dashboard-Transformation
- FAQ Accordion-Funktionalität

## Browser-Unterstützung

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## Lizenz

Alle Rechte vorbehalten - Stephan Tomforde
