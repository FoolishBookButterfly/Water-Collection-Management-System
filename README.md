# ZmMH Water Collection Management System 💧

A web-based water collection payment tracking system for **Zea Mays Men's Hall (ZmMH)**. Built with Flask, Tailwind CSS, and Firebase Realtime Database.

## ✨ Features

- **Occupant View** — search by name to check payment balance with expandable history
- **Admin View** — manage occupants, track payments per collection date, record purchases
- **Real-time Sync** — data syncs across devices via Firebase Realtime Database
- **Offline-First** — data is cached in localStorage and works even without internet
- **CSV Export** — download payment records as a spreadsheet (Excel/Google Sheets compatible)
- **Date Management** — add/edit/delete collection dates with per-date payment amounts
- **Modern UI** — clean, professional design with ZmMH brand colors (maroon & forest green)

## 🚀 Quick Start

### Prerequisites

- Python 3.7+
- Flask

### Installation

```bash
# Install Flask
pip install flask

# Run the development server
python app.py
```

Then open `http://localhost:5000` in your browser.

### Testing Safely (Without Touching Live Data)

Create a copy of `templates/index.html` with a modified Firebase path (`dormWaterApp_TEST`) to test without affecting live data.

## 📁 Project Structure

```
├── app.py                  # Flask application server
├── templates/
│   └── index.html          # Main page template (Jinja2)
├── static/
│   ├── css/
│   │   └── style.css       # Custom design system (brand colors, components)
│   ├── js/
│   │   └── app.js          # Application logic (Firebase, state, UI rendering)
│   └── assets/
│       └── zmmh-logo.png   # Hall logo
├── seed_data.json          # Seed roster data (used as fallback)
├── read_excel_v3.py        # Excel converter (generates seed_data.json)
└── record.xlsx             # Source Excel roster file
```

## 🎨 Brand Colors

The UI follows the ZmMH brand identity:

| Color | Hex | Usage |
|-------|-----|-------|
| Primary (Maroon) | `#6C1600` | Primary buttons, branding, active states |
| Secondary (Forest Green) | `#013300` | Success states, positive indicators |
| Background (Cream) | `#FAF8F3` | Page background |
| Surface | `#FFFFFF` | Cards, modals |
| Danger | `#DC2626` | Delete actions, unpaid indicators |
| Warning | `#D97706` | Partial payments |

## 🔄 Updating the Roster

The roster data lives in `seed_data.json` and is also embedded in `static/js/app.js` as `SEED_DATA`.

### Workflow:

1. **Update `record.xlsx`** with the latest roster/payment data
2. **Run the Excel converter:**
   ```bash
   python read_excel_v3.py
   ```
   This generates a new `seed_data.json`
3. **Update the embedded `SEED_DATA` in `static/js/app.js`:**
   - Copy the contents of `seed_data.json`
   - Replace the `const SEED_DATA = {...}` value in `static/js/app.js`
4. **Increment `ROSTER_VERSION`** in `static/js/app.js` (currently `2`) — this tells the app there's a new roster

## ☁️ Firebase Setup

### Configuration

The Firebase config is embedded in `static/js/app.js`:

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

**⚠️ Note:** Preview URLs connect to the **same Firebase database** as the live site. Use a local copy with an isolated Firebase path for any data-changing tests.

## 🧰 Tech Stack

- **Flask** — Python web server (serves templates and static files)
- **Tailwind CSS** — via CDN with custom brand color configuration
- **Custom CSS Design System** — Brand-aligned components in `static/css/style.css`
- **Firebase Realtime Database** — cloud sync

## 🔐 Security Notes

- The admin password is **hardcoded in client-side JavaScript** — this is NOT real security
- Anyone can view page source (Ctrl+U) and see the password
- Real authentication (Firebase Auth) is planned for a future phase

## 📝 License

Private project for Zea Mays Men's Hall.