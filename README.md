# Bhavya Patel — Portfolio Website ⚡

> **B.Tech Computer Science & Engineering Student | Web Development & AI**  
> Indus Institute of Technology and Engineering, Ahmedabad (2024–2028)

A high-performance, modern dark-themed portfolio engineered with React, Vite, and Vanilla CSS. Built with 21st.dev & Uiverse-inspired micro-interactions, an interactive developer terminal CLI (`novibecoded` style), mouse spotlight glow cards, custom trailing cursor, and zero gradient text for high-contrast clarity.

---

## 🚀 Live Demo & Deployment
- **GitHub Repository**: [https://github.com/PSG72-cmd/portfolio](https://github.com/PSG72-cmd/portfolio)
- **Deployment Platform**: Ready for **Vercel** / **Netlify** (configured with `vercel.json` and zero-config build).

---

## ✨ Key Features & Interactive UI
- **Solid High-Contrast Typography**: Elegant, crisp typography using Google Fonts (*Plus Jakarta Sans* & *JetBrains Mono*) strictly without gradient text masks.
- **Custom Trailing Cursor**: Smooth spring-interpolated cursor ring with hover reactions over buttons and cards.
- **21st.dev Spotlight Glow Cards**: Radial spotlight glow that dynamically tracks the cursor coordinates across bento grid cards.
- **Uiverse.io Shimmer & Micro-Interactions**: Shimmer buttons, floating glass navbar, and pulsing live status indicators.
- **Interactive Terminal CLI (`novibecoded` style)**: In-browser terminal where users can run commands (`help`, `bio`, `skills`, `projects`, `education`, `contact`, `hire`, `clear`) or tap quick shortcut chips.
- **Audio Synthesizer FX**: Web Audio API sound effects for subtle UI clicks, chime confirmations, and celebration confetti, with a quick mute toggle.
- **Full Printable Resume Modal**: Complete structured resume viewer matching Bhavya's credentials with one-click print/PDF export and copy shortcuts.
- **Local Time Clock**: Live Ahmedabad, Gujarat (IST GMT+5:30) clock and contact hub.

---

## 🛠️ Tech Stack
- **Framework**: React 19 + Vite 8
- **Styling**: Vanilla CSS (CSS Variables, Glassmorphism, Responsive Grid)
- **Icons**: Lucide React + Custom SVG Icons
- **Celebration Effects**: Canvas Confetti
- **Audio**: Web Audio API Synthesizer

---

## 📂 Project Structure
```
bhavya_portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── CustomCursor.jsx       # Smooth trailing cursor
│   │   ├── Navbar.jsx             # Floating glass navigation bar
│   │   ├── Hero.jsx               # Hero banner with status pills & bento cards
│   │   ├── SkillsSection.jsx      # Filterable skills bento grid
│   │   ├── ProjectsSection.jsx    # Projects showcase & filters
│   │   ├── ExperienceEducation.jsx# Education & certification timeline
│   │   ├── TerminalSection.jsx    # Interactive developer terminal CLI
│   │   ├── ContactSection.jsx     # Contact cards with IST clock & form
│   │   ├── ResumeModal.jsx        # Printable resume preview modal
│   │   ├── ProjectDetailModal.jsx # Deep-dive architecture modal
│   │   ├── Footer.jsx             # Footer with back-to-top button
│   │   └── Icons.jsx              # Standalone SVG icons
│   ├── utils/
│   │   └── audio.js               # Web Audio API sound effects
│   ├── App.jsx                    # Root app layout & ambient glow
│   ├── index.css                  # Design system tokens & animations
│   └── main.jsx                   # React entry point
├── vercel.json                    # Vercel deployment rewrite rules
├── package.json
└── README.md
```

---

## 💻 Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/bhavyapatel1415/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start local development server**:
   ```bash
   npm run dev
   ```

4. **Build production bundle**:
   ```bash
   npm run build
   ```

---

## 👤 Profile & Contact
- **Developer**: Bhavya Patel
- **Email**: [5012.sktbhavidi@gmail.com](mailto:5012.sktbhavidi@gmail.com)
- **Phone**: +91 89884 40496
- **Location**: Ahmedabad, Gujarat, India
