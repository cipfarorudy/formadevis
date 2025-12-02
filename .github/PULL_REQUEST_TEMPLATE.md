# Titre de la PR

chore/feat/fix(scope): résumé concis des changements

## Objet

Décrire en 1-2 phrases le but de la PR (contexte et résultat attendu).

## Changements

- [dossier] Point clé 1 (fichier/s concerné/s)
- [dossier] Point clé 2

## Pourquoi

Motiver les choix (bug résolu, dette technique, nouvelle fonctionnalité, DX, perf, sécurité…).

## Comment tester

```powershell
# Exemple frontend
cd frontend
npm install
npm run dev
npx vitest run

# Exemple backend
cd backend
npm install
npm run dev
```

## Impact

- Portée: frontend/backend/infra/CI
- Compatibilité: breaking change ? migration nécessaire ?
- Perf/Sécurité: remarques pertinentes si applicables

## Checklist

- [ ] Tests passent en local
- [ ] CI passe (lint/build/tests)
- [ ] Docs mises à jour si nécessaire (`.github/copilot-instructions.md`, README)
- [ ] Variables d'environnement/documentation de déploiement mises à jour (si besoin)

## Notes de déploiement (si applicable)

Étapes manuelles, migrations DB, variables d'env (`backend/.env`).

## Liens

- Issue liée: #
- PRs liées / dépendances: #
