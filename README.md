# 長跑達人 Pro-Running Club

React + Vite website. Ready for Vercel deployment.

---

## 📁 Project Structure

```
pro-running-club/
├── public/
│   └── images/               ← PUT ALL IMAGES HERE
│       ├── ProRC-logo.png
│       ├── hero.jpg
│       ├── technique-correction.jpg
│       ├── tough-training.jpg
│       ├── team.jpg
│       ├── team2.jpg
│       ├── club.jpg
│       ├── running-shoes.jpg
│       ├── woody.png
│       ├── dave.png
│       ├── cookie.png
│       ├── nip.png
│       ├── leo.png
│       └── fer.png
├── src/
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── vercel.json               ← fixes 404 on Vercel
```

---

## 🖥 Local Development

```bash
npm install
npm run dev
# Opens at http://localhost:3000
```

---

## ☁️ Deploy to Vercel (Step-by-step)

### Method 1 — GitHub + Vercel Dashboard (Recommended)

1. Create a new repo on GitHub
2. Push this entire folder:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/pro-running-club.git
   git push -u origin main
   ```
3. Go to https://vercel.com → New Project → Import your repo
4. Vercel auto-detects Vite. Leave all settings as default.
5. Click **Deploy** ✅

### Method 2 — Vercel CLI

```bash
npm install -g vercel
vercel
# Follow prompts, accept all defaults
```

---

## ✅ Why the 404 was happening

The `vercel.json` file is now included — it tells Vercel to serve `index.html`
for all routes, which is required for single-page React apps.

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```
