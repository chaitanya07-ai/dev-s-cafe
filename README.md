# My App — React + FastAPI + MongoDB

A full-stack web application with:
- **Frontend**: React 18, Tailwind CSS, shadcn/ui, craco
- **Backend**: FastAPI (Python), async with motor
- **Database**: MongoDB

---

## Project Structure

```
├── backend/
│   ├── server.py          # FastAPI app
│   ├── requirements.txt   # Python deps
│   ├── Dockerfile
│   └── .env.example       # Copy to .env
├── frontend/
│   ├── src/
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── index.css      # Tailwind + shadcn vars
│   │   └── lib/utils.js
│   ├── public/index.html
│   ├── package.json
│   ├── tailwind.config.js
│   ├── craco.config.js
│   ├── Dockerfile
│   └── .env.example       # Copy to .env
├── docker-compose.yml     # Run everything locally
└── render.yaml            # Deploy to Render.com
```

---

## Local Development (Recommended)

### Option A — Docker Compose (easiest)

```bash
docker compose up --build
```

- Frontend: http://localhost:3000
- Backend: http://localhost:8000
- MongoDB: localhost:27017

### Option B — Manual

**1. MongoDB** — Install and run locally or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (free tier).

**2. Backend:**
```bash
cd backend
cp .env.example .env        # edit MONGO_URL, DB_NAME, CORS_ORIGINS
pip install -r requirements.txt
uvicorn server:app --reload --port 8000
```

**3. Frontend:**
```bash
cd frontend
cp .env.example .env        # set REACT_APP_BACKEND_URL=http://localhost:8000
npm install
npm start
```

---

## Deployment Options

### 🟣 Render.com (Free tier — recommended for beginners)

1. Push this repo to GitHub.
2. Go to [render.com](https://render.com) → New → Blueprint → connect your repo.
3. It reads `render.yaml` automatically.
4. Set environment variables in the Render dashboard:
   - Backend: `MONGO_URL` (use MongoDB Atlas connection string), `CORS_ORIGINS` (your frontend URL)
   - Frontend: `REACT_APP_BACKEND_URL` (your backend Render URL)

### 🔵 Railway.app

1. Push to GitHub.
2. New project → Deploy from GitHub repo.
3. Add a MongoDB plugin or use Atlas.
4. Set env vars under each service.

### ⚡ Vercel + Render split

- **Frontend** → Deploy `frontend/` folder to [Vercel](https://vercel.com) (free, instant).
- **Backend** → Deploy `backend/` folder to [Render](https://render.com) as a web service.

### 🐳 Any VPS (Docker)

```bash
git clone <your-repo>
cd <your-repo>
# Edit docker-compose.yml with real MONGO_URL / CORS_ORIGINS
docker compose up -d --build
```

---

## API Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/` | Health check |
| POST | `/api/status` | Create a status check |
| GET | `/api/status` | List all status checks |

Interactive docs available at `http://localhost:8000/docs` when running.

---

## Environment Variables

### Backend (`backend/.env`)

| Variable | Description | Example |
|----------|-------------|---------|
| `MONGO_URL` | MongoDB connection string | `mongodb://localhost:27017` |
| `DB_NAME` | Database name | `app_database` |
| `CORS_ORIGINS` | Allowed frontend origins | `http://localhost:3000` |

### Frontend (`frontend/.env`)

| Variable | Description | Example |
|----------|-------------|---------|
| `REACT_APP_BACKEND_URL` | Backend base URL | `http://localhost:8000` |

---

## GitHub Setup

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```
