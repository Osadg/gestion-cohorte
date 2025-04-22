# Gestion Cohorte

Application web développée avec Google Apps Script pour la gestion des exploitants agricoles et des organisations de producteurs dans le cadre d'une convention de partenariat productif entre une faitière nationale et un projet de développement agricole.

## 📋 Présentation

Cette application a été développée pour l'assurance qualité des données au sein de la faitière nationale dans le cadre du suivi-évaluation de sa troisième convention avec le projet. Elle permet de gérer efficacement les données des exploitants agricoles de la cohorte 3, ainsi que leurs organisations de producteurs (OP) associées, en offrant une interface conviviale pour l'ajout, la modification, la suppression et la consultation des données, avec des fonctionnalités de filtrage avancées.

## ✨ Fonctionnalités principales

- **Gestion complète des exploitants agricoles**
  - Ajout de nouveaux exploitants avec génération automatique des codes
  - Modification des données existantes
  - Suppression d'entrées
  - Visualisation des données dans un tableau interactif

- **Gestion des organisations de producteurs**
  - Consultation des données des OP
  - Liaison des exploitants à leurs OP respectives

- **Fonctionnalités avancées**
  - Filtrage multicritère des données (nom, département, commune, OP, etc.)
  - Identification des entrées incomplètes
  - Calcul automatique de la tranche d'âge
  - Conversion automatique en majuscules
  - Prévisualisation des photos

- **Interface utilisateur intuitive**
  - Design responsive avec Bootstrap 5
  - Navigation par onglets
  - Formulaires organisés par sections dépliables
  - Icônes explicites avec Font Awesome

## 🛠️ Technologies utilisées

- **Backend**
  - Google Apps Script (GAS)
  - Google Sheets (stockage de données)

- **Frontend**
  - HTML5 / CSS3
  - JavaScript
  - Bootstrap 5.3
  - Font Awesome 6.0

## 📊 Structure des données

L'application utilise deux feuilles principales dans un classeur Google Sheets :

1. **Nouvelle_Cohorte** : Contient les données des exploitants agricoles
2. **Liste_OP** : Contient les données des organisations de producteurs

### Champs principaux des exploitants

- Informations personnelles (code, nom, prénom, sexe, âge, contacts)
- Organisation et localisation (OP, pôle, département, commune, village)
- Informations de production (spéculation, superficie, semences)
- Données économiques (coûts, main d'œuvre, charges)
- Résultats (récolte, rendement, produit d'activité, marges)

## 🚀 Installation et déploiement

1. **Créer un nouveau projet Google Apps Script**
   - Ouvrez [Google Drive](https://drive.google.com)
   - Créez un nouveau classeur Google Sheets ou utilisez un existant
   - Allez dans Extensions > Apps Script

2. **Configurer les fichiers du projet**
   - Créez les fichiers suivants :
     - `Code.gs`
     - `Index.html`
     - `JavaScript.html`
   - Copiez le code source respectif dans chaque fichier

3. **Configurer le déploiement**
   - Cliquez sur "Déployer" > "Nouvelle déploiement"
   - Sélectionnez "Application web"
   - Configurez les options d'accès (généralement "Toute personne ayant accès à Google")
   - Cliquez sur "Déployer"

4. **Configurer les feuilles de calcul**
   - Créez deux feuilles nommées "Nouvelle_Cohorte" et "Liste_OP"
   - Assurez-vous que les en-têtes correspondent à ceux attendus par l'application

## 👨‍💻 Utilisation

### Accès à l'application

- Ouvrez la feuille de calcul Google Sheets
- Cliquez sur le menu personnalisé "Application Cohorte"
- Sélectionnez "Ouvrir l'application"

### Gestion des exploitants

1. **Ajouter un exploitant**
   - Cliquez sur "Nouvel Exploitant"
   - Remplissez les champs dans le formulaire (les champs marqués * sont obligatoires)
   - Cliquez sur "Enregistrer"

2. **Modifier un exploitant**
   - Localisez l'exploitant dans le tableau
   - Cliquez sur l'icône de modification (crayon)
   - Mettez à jour les informations
   - Cliquez sur "Enregistrer"

3. **Supprimer un exploitant**
   - Localisez l'exploitant dans le tableau
   - Cliquez sur l'icône de suppression (poubelle)
   - Confirmez la suppression

### Filtrage des données

- Utilisez les filtres en haut de la page pour rechercher des exploitants spécifiques
- Cliquez sur "Rechercher" pour appliquer les filtres
- Utilisez "Afficher uniquement les entrées incomplètes" pour identifier les données manquantes

## 📝 Maintenance et mise à jour

1. **Mise à jour du code**
   - Modifiez les fichiers dans l'éditeur Google Apps Script
   - Sauvegardez les modifications
   - Créez un nouveau déploiement pour appliquer les changements

2. **Sauvegarde**
   - Exportez régulièrement les données du classeur Google Sheets
   - Gardez des copies du code source dans ce dépôt GitHub

## 🔒 Sécurité et confidentialité

- L'application est soumise aux politiques de sécurité de Google Workspace
- L'accès est contrôlé selon les paramètres de déploiement configurés
- Les données sensibles doivent être traitées conformément aux lois sur la protection des données

## 🤝 Contribution

Cette application a été développée par le service de suivi-évaluation de la faitière nationale pour un usage interne. Les modifications et améliorations sont gérées en interne par le développeur responsable.

Pour suggérer des améliorations ou signaler des problèmes, veuillez contacter directement le développeur au sein de la faitière nationale.

## 📄 Licence

Ce projet est développé pour usage interne à la faitière nationale. Tous droits réservés.

## 📞 Contact

Pour toute question concernant cette application, veuillez me contacter directement.

---

Développé dans le cadre du partenariat entre la faitière nationale et le projet de développement agricole © 2025