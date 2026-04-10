# 長跑達人 Pro-Running Club

React + Vite website for Pro-Running Club.

---

## 🖼 Images Needed

Place these files in `public/images/`:

| File | Used in |
|------|---------|
| `ProRC-logo.png` | Navbar & Footer logo |
| `hero.jpg` | Hero section background |
| `technique-correction.jpg` | Pillar 1 - 改進跑步技術 |
| `tough-training.jpg` | Pillar 2 - 課表強度適中 |
| `team.jpg` | Pillar 3 - 訓練團隊合作 |
| `team2.jpg` | Philosophy section |
| `club.jpg` | About section |
| `running-shoes.jpg` | Article card |
| `woody.png` | Testimonial - Woody |
| `dave.png` | Testimonial - David |
| `cookie.png` | Testimonial - Nicole |
| `nip.png` | Testimonial - 啊聶 |
| `leo.png` | Testimonial - Leo |
| `fer.png` | Testimonial - 怪獸 |

> All original images can be found on the existing WordPress site at prorunningclub.com.

---

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:5173

---

## ☁️ Deploy to Vercel

### Option A — Vercel CLI
```bash
npm i -g vercel
vercel
```
Follow the prompts. Vercel auto-detects Vite.

### Option B — Vercel Dashboard
1. Push this folder to a GitHub repo
2. Go to https://vercel.com/new
3. Import the repo → Vercel detects Vite automatically
4. Click **Deploy** ✅

No extra config needed — `vite build` outputs to `dist/` which Vercel handles by default.

---

## 📁 Project Structure

```
pro-running-club/
├── public/
│   └── images/          ← Put all images here
├── src/
│   ├── App.jsx          ← Main component
│   ├── App.css          ← All styles
│   └── main.jsx         ← Entry point
├── index.html
├── package.json
└── vite.config.js
```
