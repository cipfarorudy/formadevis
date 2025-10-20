# Instructions pour les agents IA sur ce projet

## Vue d'ensemble
Ce projet gère la création de devis de formation, avec une architecture séparée backend (API REST Node.js/Express) et frontend (React + TypeScript). Les interactions IA reposent sur le dossier `.snapshots` pour le contexte et la configuration.

## Architecture principale
- **Backend** (`backend/`) :
  - Point d’entrée : `src/app.js`
  - Dossiers clés :
    - `controllers/` : logique métier
    - `routes/` : endpoints API
    - `models/` : schémas DB (Sequelize/Prisma)
    - `services/` : génération PDF, envoi mail
    - `middleware/` : auth, validation
    - `config/` : configuration DB, SMTP, .env
  - Stockage temporaire des logos : `uploads/`
  - Fichiers importants : `.env.example`, `package.json`

- **Frontend** (`frontend/`) :
  - Point d’entrée : `src/App.tsx`, `src/main.tsx`
  - Dossiers clés :
    - `components/` : composants réutilisables
    - `pages/` : écrans principaux
    - `services/` : appels API
    - `context/` : AuthContext, etc.
    - `utils/` : helpers, formatage
  - Configuration UI : `tailwind.config.js`
  - Fichiers statiques : `public/logo-placeholder.png`, `package.json`

- **Intégrations** :
  - Base de données (PostgreSQL, via docker-compose ou config locale)
  - SMTP pour l’envoi de mails
  - Génération de PDF côté backend

## Conventions et patterns
- Respecter la séparation des responsabilités par dossier (ex : logique métier dans `controllers/`, API dans `routes/`).
- Utiliser les services pour toute logique transversale (PDF, mail).
- Les composants React sont typés (TypeScript) et organisés par réutilisabilité.
- Les appels API frontend passent par `frontend/src/services/`.
- Les fichiers de configuration et d’environnement sont centralisés dans `backend/src/config/` et `.env.example`.

## Workflows typiques
- **Démarrage backend** :
  - Installer les dépendances : `npm install` dans `backend/`
  - Lancer le serveur : `npm start` ou `node src/app.js`
- **Démarrage frontend** :
  - Installer les dépendances : `npm install` dans `frontend/`
  - Lancer l’UI : `npm start` ou `npm run dev`
- **Docker** :
  - Utiliser `docker-compose.yml` pour lancer la DB locale

## Snapshots IA
- Les snapshots sont stockés dans `.snapshots/` et suivent la config `.snapshots/config.json` (exclusion/inclusion de fichiers).
- Toujours inclure les fichiers listés dans `included_patterns` même s’ils sont dans des dossiers exclus.
- Utiliser `.snapshots/` comme source principale de contexte IA.

## Fichiers à consulter pour comprendre les patterns
- `backend/src/app.js`, `backend/src/controllers/`, `backend/src/services/`
- `frontend/src/App.tsx`, `frontend/src/components/`, `frontend/src/services/`
- `.snapshots/config.json`, `.snapshots/readme.md`

---

## Guide de création et d’installation du projet

Pour initialiser un nouveau projet FormaDevis, suivez ces étapes :

1. **Créer la structure du projet**
   - Dossier racine : `formadevis/`
   - Backend : `backend/src/{controllers,routes,models,services,middleware,config}`
   - Frontend : `frontend/public`, `frontend/src/{components,pages,services,context,utils}`

2. **Initialiser le dépôt Git**
   - `git init`

3. **Créer les fichiers essentiels**
   - Backend : `src/app.js`, `.env.example`, `package.json`
   - Frontend : `src/App.tsx`, `src/main.tsx`, `public/logo-placeholder.png`, `package.json`, `tailwind.config.js`, `src/index.css`
   - Racine : `docker-compose.yml`, `README.md`, `.gitignore`

4. **Installer les dépendances**
   - Backend : `npm install` dans `backend/`
   - Frontend : `npm install` dans `frontend/`

5. **Configurer Tailwind CSS**
   - Installer et initialiser Tailwind dans le frontend
   - Mettre à jour `tailwind.config.js` et `src/index.css`

6. **Configurer la base de données PostgreSQL**
   - Utiliser `docker-compose.yml` pour lancer la DB locale

7. **Variables d’environnement**
   - Compléter `backend/.env.example` et copier vers `.env`

8. **Lancer les serveurs**
   - Backend : `npm run dev` ou `node src/app.js`
   - Frontend : `npm run dev`

9. **Accès**
   - Frontend : http://localhost:5173
   - Backend : http://localhost:3000

---

**Astuce IA :** Pour toute analyse ou génération de code, se référer à la structure ci-dessus et aux fichiers de configuration pour garantir la cohérence avec les conventions du projet.

**Remarque :** Si la structure évolue, mettez à jour `.snapshots/config.json` et ce fichier pour garantir la cohérence des analyses IA.
