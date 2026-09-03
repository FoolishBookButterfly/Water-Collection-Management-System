# ZmMH Water Collection Management System 💧

A web-based water collection payment tracking system for **Zea Mays Men's Hall (ZmMH)**. Built with vanilla HTML/CSS/JavaScript, Tailwind CSS, and Firebase Realtime Database.

## ✨ Features

- **Occupant View** — search by name to check payment balance and history
- **Admin View** — manage occupants, track payments per collection date, record purchases
- **Real-time Sync** — data syncs across devices via Firebase Realtime Database
- **Offline-First** — data is cached in localStorage and works even without internet
- **CSV Export** — download payment records as a spreadsheet (Excel/Google Sheets compatible)
- **Date Management** — add/edit/delete collection dates with per-date payment amounts

## 🚀 Quick Start

### Local Development

```bash
# Serve the files with a simple HTTP server
python -m http.server 8080
```

Then open `http://localhost:8080` in your browser.

### Testing Safely (Without Touching Live Data)

`index-test.html` uses the `dormWaterApp_TEST` Firebase path — completely isolated from the live app.

```bash
# Open the test copy
http://localhost:8080/index-test.html
```

Use this for testing admin actions (adding dates, toggling payments, etc.) without affecting real data.

## 📁 Project Structure

```
├── index.html          # Main application (all-in-one)
├── index-test.html     # Test copy with isolated Firebase path
├── seed_data.json      # Seed roster data (used as fallback)
├── assets/
│   └── zmmh-logo.png   # Hall logo
├── read_excel.py       # Excel reader (v1 - simple dump)
├── read_excel_v2.py    # Excel reader (v2 - header detection)
├── read_excel_v3.py    # Excel reader (v3 - full data extraction)
└── record.xlsx         # Source Excel roster file
```

## 🔄 Updating the Roster

The roster data lives in `seed_data.json` and is also embedded in `index.html` as `SEED_DATA`.

### Workflow:

1. **Update `record.xlsx`** with the latest roster/payment data
2. **Run the Excel converter:**
   ```bash
   python read_excel_v3.py
   ```
   This generates a new `seed_data.json`
3. **Update the embedded `SEED_DATA` in `index.html`:**
   - Copy the contents of `seed_data.json`
   - Replace the `const SEED_DATA = {...}` value in `index.html`
4. **Increment `ROSTER_VERSION`** in `index.html` (currently `2`) — this tells the app there's a new roster

## ☁️ Firebase Setup

### Configuration

The Firebase config is embedded in `index.html`:

```js
const firebaseConfig = {
    apiKey: "...",
    authDomain: "...",
    databaseURL: "https://zmmh-water-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "zmmh-water",
    ...
};
```

### Security Rules

**WARNING:** Your database rules are critical. If they're set to public read/write (default for testing), anyone could wipe your data.

Recommended rules for the Firebase Console → Realtime Database → Rules:

```json
{
  "rules": {
    ".read": true,
    ".write": "auth != null"
  }
}
```

- **Read**: Public — occupants can view their balance without logging in
- **Write**: Authentication required — prevents unauthorized data modification

**Note:** This will break admin writes until real authentication is added in a future phase.

## 🚢 Deployment (Netlify)

### Option 1: GitHub Auto-Deploy (Recommended)

1. Push changes to the `main` branch on GitHub
2. In Netlify: **Add new site → Import from Git → Your GitHub repo**
3. Netlify auto-deploys on every push to `main`

### Option 2: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy a draft (test URL, doesn't affect production)
netlify deploy

# Deploy to production
netlify deploy --prod
```

### Testing on Netlify Preview

Create a PR on GitHub — Netlify automatically generates a preview URL like:
```
https://deploy-preview-7--yoursite.netlify.app
```

**⚠️ Note:** Preview URLs connect to the **same Firebase database** as the live site. Use `index-test.html` locally for any data-changing tests.

## 🧰 Tech Stack

- **HTML/CSS/JS** — no build tools needed
- **Tailwind CSS** — via CDN
- **Firebase Realtime Database** — cloud sync
- **Firebase Local Emulator** — for local development (see `firestore-debug.log`)

## 🔐 Security Notes

- The admin password is **hardcoded in client-side JavaScript** — this is NOT real security
- Anyone can view page source (Ctrl+U) and see the password
- Real authentication (Firebase Auth) is planned for a future phase

## 📝 License

Private project for Zea Mays Men's Hall.