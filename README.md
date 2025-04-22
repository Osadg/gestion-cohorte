# FR

# Gestion Cohorte

Application web développée avec Google Apps Script pour la gestion des exploitants agricoles et des organisations de producteurs dans le cadre d'une convention de partenariat productif entre une faitière nationale et un projet de développement agricole.

## 📋 Présentation

Cette application a été développée pour l'assurance qualité des données au sein d'une Organisation de Producteur Agricole (OPA) dans le cadre du suivi-évaluation de sa troisième convention avec un projet de développement agricole. Elle permet de gérer efficacement les données des exploitants agricoles de la cohorte 3, ainsi que leurs Organisations de Producteurs (OP) associées, en offrant une interface conviviale pour l'ajout, la modification, la suppression et la consultation des données, avec des fonctionnalités de filtrage avancées.

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

2. **Configurer les fichiers du projet d'application web**
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

Cette application a été développée par le service de suivi-évaluation de l'OPA pour un usage interne. Les modifications et améliorations sont gérées en interne par le développeur responsable.

Pour suggérer des améliorations ou signaler des problèmes, veuillez contacter directement le développeur au sein de l'OPA.

## 📄 Licence

Ce projet d'application web est développé pour usage interne à l'OPA. Tous droits réservés.

## 📞 Contact

Pour toute question concernant cette application, veuillez me contacter directement.

---

Développé dans le cadre du partenariat entre ladite OPA et ledit projet de développement agricole © 2025


------------------------------------------------------------------------------------------------


# EN

# Cohort Management

Web application developed with Google Apps Script for managing agricultural producers and producer organizations as part of a productive partnership agreement between a national farmers' organization and an agricultural development project.

## 📋 Overview

This application was developed for data quality assurance within an Agricultural Producer Organization (APO) as part of monitoring and evaluation of its third agreement with an agricultural development project. It efficiently manages data for farmers in cohort 3, as well as their associated Producer Organizations (POs), providing a user-friendly interface for adding, modifying, deleting, and viewing data, with advanced filtering capabilities.

## ✨ Key Features

- **Complete management of agricultural producers**
  - Adding new producers with automatic code generation
  - Modifying existing data
  - Deleting entries
  - Visualizing data in an interactive table

- **Management of producer organizations**
  - Viewing PO data
  - Linking producers to their respective POs

- **Advanced features**
  - Multi-criteria filtering (name, department, municipality, PO, etc.)
  - Identification of incomplete entries
  - Automatic age group calculation
  - Automatic conversion to uppercase
  - Photo preview

- **Intuitive user interface**
  - Responsive design with Bootstrap 5
  - Tab navigation
  - Forms organized by collapsible sections
  - Clear icons with Font Awesome

## 🛠️ Technologies Used

- **Backend**
  - Google Apps Script (GAS)
  - Google Sheets (data storage)

- **Frontend**
  - HTML5 / CSS3
  - JavaScript
  - Bootstrap 5.3
  - Font Awesome 6.0

## 📊 Data Structure

The application uses two main sheets in a Google Sheets spreadsheet:

1. **New_Cohort**: Contains data for agricultural producers
2. **PO_List**: Contains data for producer organizations

### Main producer fields

- Personal information (code, last name, first name, gender, age, contacts)
- Organization and location (PO, hub, department, municipality, village)
- Production information (crop type, area, seeds)
- Economic data (costs, labor, expenses)
- Results (harvest, yield, activity product, margins)

## 🚀 Installation and Deployment

1. **Create a new Google Apps Script project**
   - Open [Google Drive](https://drive.google.com)
   - Create a new Google Sheets spreadsheet or use an existing one
   - Go to Extensions > Apps Script

2. **Configure the web application project files**
   - Create the following files:
     - `Code.gs`
     - `Index.html`
     - `JavaScript.html`
   - Copy the respective source code into each file

3. **Configure deployment**
   - Click on "Deploy" > "New deployment"
   - Select "Web application"
   - Configure access options (typically "Anyone with Google access")
   - Click "Deploy"

4. **Configure spreadsheets**
   - Create two sheets named "New_Cohort" and "PO_List"
   - Ensure the headers match those expected by the application

## 👨‍💻 Usage

### Accessing the application

- Open the Google Sheets spreadsheet
- Click on the custom menu "Cohort Application"
- Select "Open application"

### Managing producers

1. **Add a producer**
   - Click on "New Producer"
   - Fill in the fields in the form (fields marked with * are required)
   - Click "Save"

2. **Modify a producer**
   - Locate the producer in the table
   - Click on the edit icon (pencil)
   - Update the information
   - Click "Save"

3. **Delete a producer**
   - Locate the producer in the table
   - Click on the delete icon (trash)
   - Confirm deletion

### Filtering data

- Use the filters at the top of the page to search for specific producers
- Click "Search" to apply filters
- Use "Show only incomplete entries" to identify missing data

## 📝 Maintenance and Updates

1. **Code updates**
   - Modify files in the Google Apps Script editor
   - Save changes
   - Create a new deployment to apply changes

2. **Backup**
   - Regularly export data from the Google Sheets spreadsheet
   - Keep copies of the source code in this GitHub repository

## 🔒 Security and Privacy

- The application is subject to Google Workspace security policies
- Access is controlled according to configured deployment settings
- Sensitive data must be handled in accordance with data protection laws

## 🤝 Contribution

This application was developed by the APO's monitoring and evaluation service for internal use. Modifications and improvements are managed internally by the responsible developer.

To suggest improvements or report issues, please contact the developer directly within the APO.

## 📄 License

This web application project is developed for internal use by the APO. All rights reserved.

## 📞 Contact

For any questions regarding this application, please contact me directly.

---

Developed as part of the partnership between the APO and the agricultural development project © 2025