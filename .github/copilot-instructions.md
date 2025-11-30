# Instructions pour les agents IA - FormaDevis

## Vue d'ensemble
Application de creation de devis de formation avec architecture monorepo : backend Node.js/Express + frontend React/TypeScript/Vite.

## Architecture actuelle

```
formadevis/
 backend/           # API REST Express
    src/app.js     # Point d'entree (Express minimal)
    .env.example   # Variables d'environnement requises
 frontend/          # SPA React + Vite + Tailwind
    src/App.tsx    # Composant racine
    src/main.tsx   # Bootstrap React
    index.html     # Template HTML
 docker-compose.yml # PostgreSQL local
```

## Stack technique
| Couche | Technologies |
|--------|-------------|
| Backend | Express 4, PostgreSQL (pg), JWT, bcrypt, Puppeteer (PDF), Nodemailer |
| Frontend | React 18, TypeScript, Vite 4, Tailwind CSS 3 |
| Tests | Vitest + Testing Library (frontend) |
| Infra | Docker Compose pour PostgreSQL |

## Commandes essentielles

```bash
# Base de donnees PostgreSQL (docker requis)
docker-compose up -d

# Backend (port 3000)
cd backend && npm install && npm run dev  # nodemon avec hot-reload

# Frontend (port 5173)
cd frontend && npm install && npm run dev # Vite dev server
```

## Variables d'environnement backend
Copier `backend/.env.example` vers `backend/.env` :
- `DB_*` : connexion PostgreSQL (localhost:5432, user/pass: postgres, db: formadevis)
- `JWT_SECRET` : cle de signature JWT
- `SMTP_*` : configuration mail (optionnel)

## Conventions a suivre

### Structure backend (a creer)
```
backend/src/
 controllers/   # Logique metier par entite
 routes/        # Definition des endpoints
 models/        # Schemas DB (Sequelize ou Prisma)
 services/      # PDF, mail, logique transversale
 middleware/    # Auth JWT, validation
 config/        # Configuration centralisee
```

### Structure frontend (a creer)
```
frontend/src/
 components/    # Composants reutilisables
 pages/         # Ecrans/vues principales
 services/      # Appels API (fetch/axios)
 context/       # Contextes React (Auth, etc.)
 utils/         # Helpers, formatage
```

### Patterns cles
- **API Frontend** : centraliser dans `frontend/src/services/`, utiliser `VITE_API_URL` pour l'URL backend
- **Auth** : JWT stocke cote client, middleware backend pour validation
- **Typage** : TypeScript strict cote frontend, JSDoc cote backend
- **CSS** : classes utilitaires Tailwind, eviter CSS custom

## Tests
```bash
cd frontend && npm test  # Vitest avec jsdom
```
Exemple de test : `frontend/src/App.test.tsx` utilise `@testing-library/react`

## Etat du projet
Le projet est en phase de scaffolding. Les dossiers `controllers/`, `routes/`, `models/`, `services/`, `components/`, `pages/` ne sont pas encore crees. Creer la structure au fur et a mesure des developpements.
