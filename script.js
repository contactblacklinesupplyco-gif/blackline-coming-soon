# Blackline Supply Co. — Coming Soon (site statique)

Site statique HTML / CSS / JS, prêt pour GitHub Pages.

## Déploiement
1. Créez un dépôt GitHub et poussez tous ces fichiers à la racine.
2. Settings > Pages > Source : branche `main`, dossier `/ (root)`.
3. Le fichier `.nojekyll` est déjà présent (obligatoire).

## Modifier facilement
- **Liens réseaux + bouton CTA** : objet `LINKS` en haut de `script.js`.
- **Textes FR / EN** : objet `COPY` dans `script.js` (et le HTML pour le FR par défaut).
- **Couleurs / typo** : variables `:root` en haut de `styles.css`.
- **Durée du splash** : `SPLASH_DURATION` dans `script.js`.
- **Favicon** : remplacez `favicon.png`.
- **Logos** : remplacez les fichiers dans `assets/`.
