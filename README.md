## IP Hub – Developer Log (README-dev)

### ✅ Session Summary – May 22–23, 2025

#### 🧱 Infrastructure Setup
- Initialized new `iphub/` directory structure
- Installed and configured React frontend using Vite in `client/`
- Installed and configured Node.js backend using Express in `server/`
- Successfully pushed to GitHub (`iphub-main` repo)

#### 🖼️ Frontend Progress
- Created `LandingPage.jsx` with Sell/Browse buttons and center-aligned bowl+halo logo
- Created `SellPage.jsx` with:
  - Asset hash input
  - License type dropdown
  - Submit button with POST request to backend
- Implemented routing using React Router
- Verified app is accessible via `http://143.110.151.0:5173`

#### 🌐 Backend API Setup
- Created `server.js` with Express
- Enabled CORS and JSON parsing middleware
- Defined `POST /api/listings` endpoint
- Successfully received and logged JSON payloads from frontend form

#### ✅ Git & Repo
- Initialized new local Git repo
- Added all files including `README-dev.md`
- Linked to remote GitHub: https://github.com/see-bear/iphub-main
- Force pushed initial MVP state

---

To do next:
- Add listing persistence (in-memory or JSON file)
- Display listings on `/browse`
- Begin basic RAG logic or placeholder recommendation engine
- Enable HTTPS (with Let's Encrypt or behind Cloudflare)
- Update favicon, title, and meta for production polish
