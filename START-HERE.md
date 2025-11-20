# 🚀 ByteBridge - How to Start the Development Server

## Quick Start (Easiest Method)

**Just run this ONE command in PowerShell:**

```powershell
.\start-dev.ps1
```

That's it! The script will:
1. Activate Node.js automatically
2. Start the development server
3. Show you the localhost URL

---

## Manual Method (If you prefer step-by-step)

### Step 1: Open PowerShell
Navigate to your project folder:
```powershell
cd "C:\Users\Kirtan Chanllawala\bytebridge-site"
```

### Step 2: Activate Node.js
```powershell
.\use-node.ps1
```

You should see:
```
Node.js activated successfully!
Node version: v22.21.1
NPM version: 10.9.4
```

### Step 3: Start the Development Server
```powershell
npm run dev
```

### Step 4: Open Your Browser
Look for a line like this in the terminal:
```
➜  Local:   http://localhost:5173/
```

Open that URL in your browser (usually `http://localhost:5173`)

---

## ⚠️ Troubleshooting

### If you see "npm is not recognized":
- Make sure you ran `.\use-node.ps1` first
- Or use the `.\start-dev.ps1` script which does it automatically

### If the page is blank:
- Check the browser console (F12) for errors
- Make sure the dev server is running (you should see "VITE" in the terminal)
- Try refreshing the page (Ctrl+F5)

### If you see build errors:
- Make sure all dependencies are installed: `npm install`
- Check that all component files exist in `src/components/`

---

## 📝 Notes

- **Keep the terminal open** while the dev server is running
- **Press Ctrl+C** in the terminal to stop the server
- Every time you open a **new** PowerShell window, you need to activate Node.js again (or use `start-dev.ps1`)

---

## 🎯 What You Should See

When everything works:
1. Terminal shows: `VITE v5.x.x ready in xxx ms`
2. Terminal shows: `➜ Local: http://localhost:5173/`
3. Browser shows: Your beautiful ByteBridge website with animations!

