# Dolamani Meher — Portfolio

A modern, dark-themed developer portfolio built with **React + Vite + Tailwind CSS**.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

## 📁 Project Structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Fixed top nav with mobile menu
│   │   ├── Hero.jsx            # Landing hero with typewriter effect
│   │   ├── Skills.jsx          # Skill groups with tags
│   │   ├── Experience.jsx      # Work experience cards
│   │   ├── Projects.jsx        # Project cards with GitHub/Live links
│   │   ├── Education.jsx       # Education timeline
│   │   ├── Certifications.jsx  # Certification cards
│   │   ├── Footer.jsx          # Contact section + footer
│   │   ├── SectionDivider.jsx  # Reusable divider
│   │   └── ScrollToTop.jsx     # Floating scroll-to-top button
│   ├── data/
│   │   └── portfolio.js        # ⭐ ALL your content lives here
│   ├── App.jsx                 # Root component
│   ├── main.jsx                # React entry point
│   └── index.css               # Tailwind + global styles
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## ✏️ Customizing Content

**All content is in one file: `src/data/portfolio.js`**

- Update your name, bio, email, GitHub, LinkedIn links
- Add/remove projects — each project has `github` and `live` fields
- Add/remove skills, experience, education, certifications
- Replace `🔁` placeholders with your real URLs

## 🌐 Deploying

### Vercel (recommended)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag & drop the `dist/` folder to netlify.com
```

### GitHub Pages
```bash
npm install --save-dev gh-pages
# Add to package.json scripts: "deploy": "gh-pages -d dist"
npm run build && npm run deploy
```

## 🎨 Tech Stack

- **React 18** — UI framework
- **Vite 5** — build tool
- **Tailwind CSS 3** — utility-first styling
- **Space Mono + Syne** — typography (Google Fonts)
