// Générer un nouveau code exploitant basé sur les codes existants
function generateNewExploitantCode() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = ss.getSheetByName(NOUVELLE_COHORTE_SHEET_NAME);
  const data = sheet.getDataRange().getValues();
  
  // Trouver l'index de la colonne 'Code Exploitant'
  const headers = data[0];
  const codeExploitantIndex = headers.indexOf('Code Exploitant');
  
  if (codeExploitantIndex === -1) {
    return '0001'; // Code par défaut si la colonne n'est pas trouvée
  }
  
  // Extraire tous les codes exploitants existants
  const existingCodes = data.slice(1) // Ignorer l'en-tête
    .map(row => row[codeExploitantIndex])
    .filter(code => code && code.toString().trim() !== ''); // Filtrer les valeurs vides
  
  if (existingCodes.length === 0) {
    return '0001'; // Premier code si aucun code existant
  }
  
  // Trouver le code numérique le plus élevé
  let maxCode = 0;
  existingCodes.forEach(code => {
    // Extraire la partie numérique du code
    const numericPart = parseInt(code.toString().replace(/[^0-9]/g, ''), 10);
    if (!isNaN(numericPart) && numericPart > maxCode) {
      maxCode = numericPart;
    }
  });
  
  // Incrémenter et formater le nouveau code
  const nextCode = maxCode + 1;
  return nextCode.toString().padStart(4, '0');
}// Calculer la tranche d'âge en fonction de l'année de naissance
function calculateTrancheAge(anneeNaissance) {
  if (!anneeNaissance || isNaN(parseInt(anneeNaissance))) {
    return '';
  }
  
  const anneeActuelle = new Date().getFullYear();
  const age = anneeActuelle - parseInt(anneeNaissance);
  
  return age <= 35 ? 'JEUNE' : 'ADULTE';
}// Configuration globale
const SPREADSHEET_ID = '#######';
const NOUVELLE_COHORTE_SHEET_NAME = '#######';
const LISTE_OP_SHEET_NAME = '#######';

// Définition des champs obligatoires
const REQUIRED_FIELDS = [
  'Période d\'Adhésion',
  'Nom Exploitant',
  'Prénom Exploitant',
  'Sexe',
  'Année naissance',
  'Tranche d\'âge',
  'Contact 1 (sans +229 01)',
  'Types conseils',
  'Dénomination l\'OP',
  'Pôle',
  'Département',
  'Commune',
  'Arrondissement',
  'Village',
  'Saison',
  'Type spéculation'
];

// Fonction pour créer le menu personnalisé dans Google Sheets
function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('Application Cohorte')
    .addItem('Ouvrir l\'application', 'openWebApp')
    .addToUi();
}

// Fonction pour ouvrir l'application web
function openWebApp() {
  const webAppUrl = ScriptApp.getService().getUrl();
  SpreadsheetApp.getUi().showModalDialog(
    HtmlService.createHtmlOutput(`<script>window.open('${webAppUrl}', '_blank')</script>`),
    'Ouverture de l\'application...'
  );
}

// Point d'entrée pour l'application web
function doGet() {
  return HtmlService.createTemplateFromFile('Index')
    .evaluate()
    .setTitle('Gestion Cohorte Agricole')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

// Fonction pour inclure d'autres fichiers HTML
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

// Fonctions de service pour accéder aux données

// Vérifier si une entrée est complète (tous les champs obligatoires sont remplis)
function isEntryComplete(record) {
  // Vérifier chaque champ obligatoire
  for (const field of REQUIRED_FIELDS) {
    if (!record[field] || record[field].toString().trim() === '') {
      return false; // Champ obligatoire manquant
    }
  }
  return true; // Tous les champs obligatoires sont remplis
}

// Récupérer toutes les données de Nouvelle Cohorte
function getAllCohorteData() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = ss.getSheetByName(NOUVELLE_COHORTE_SHEET_NAME);
  const data = sheet.getDataRange().getValues();
  
  const headers = data[0];
  const records = data.slice(1).map((row, index) => {
    const record = {};
    headers.forEach((header, colIndex) => {
      record[header] = row[colIndex];
    });
    record.rowIndex = index + 2; // +2 car les données commencent à la ligne 2 (après l'en-tête)
    
    // Vérifier si l'entrée est complète (tous les champs obligatoires remplis)
    record.isComplete = isEntryComplete(record);
    
    return record;
  });
  
  return {
    headers: headers,
    records: records,
    requiredFields: REQUIRED_FIELDS
  };
}

// Récupérer toutes les données de Liste OP
function getAllListeOPData() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = ss.getSheetByName(LISTE_OP_SHEET_NAME);
  const data = sheet.getDataRange().getValues();
  
  const headers = data[0];
  const records = data.slice(1).map(row => {
    const record = {};
    headers.forEach((header, colIndex) => {
      record[header] = row[colIndex];
    });
    return record;
  });
  
  return {
    headers: headers,
    records: records
  };
}

// Convertir les valeurs de texte en majuscules
function convertValuesToUppercase(data) {
  const result = {};
  
  for (const key in data) {
    if (typeof data[key] === 'string') {
      result[key] = data[key].toUpperCase();
    } else {
      result[key] = data[key];
    }
  }
  
  return result;
}

// Ajouter une nouvelle entrée dans Nouvelle Cohorte
function addCohorteEntry(newEntry) {
  // Convertir les valeurs en majuscules
  newEntry = convertValuesToUppercase(newEntry);
  
  // Validation des champs obligatoires
  const missingFields = REQUIRED_FIELDS.filter(field => 
    !newEntry[field] || newEntry[field].toString().trim() === '');
  
  if (missingFields.length > 0) {
    return {
      success: false,
      message: `Champs obligatoires manquants : ${missingFields.join(', ')}`
    };
  }
  
  try {
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = ss.getSheetByName(NOUVELLE_COHORTE_SHEET_NAME);
    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    
    // S'assurer que la tranche d'âge correspond à l'année de naissance
    if (newEntry['Année naissance']) {
      newEntry['Tranche d\'âge'] = calculateTrancheAge(newEntry['Année naissance']);
    }
    
    // Préparer la nouvelle ligne de données
    const newRow = headers.map(header => {
      return newEntry[header] || '';
    });
    
    // Ajouter la nouvelle ligne
    sheet.appendRow(newRow);
    
    return {
      success: true,
      message: 'Entrée ajoutée avec succès.'
    };
  } catch (error) {
    return {
      success: false,
      message: `Erreur lors de l'ajout : ${error.toString()}`
    };
  }
}

// Mettre à jour une entrée existante dans Nouvelle Cohorte
function updateCohorteEntry(rowIndex, updatedEntry) {
  // Convertir les valeurs en majuscules
  updatedEntry = convertValuesToUppercase(updatedEntry);
  
  // Validation des champs obligatoires
  const missingFields = REQUIRED_FIELDS.filter(field => 
    !updatedEntry[field] || updatedEntry[field].toString().trim() === '');
  
  if (missingFields.length > 0) {
    return {
      success: false,
      message: `Champs obligatoires manquants : ${missingFields.join(', ')}`
    };
  }
  
  try {
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = ss.getSheetByName(NOUVELLE_COHORTE_SHEET_NAME);
    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    
    // S'assurer que la tranche d'âge correspond à l'année de naissance
    if (updatedEntry['Année naissance']) {
      updatedEntry['Tranche d\'âge'] = calculateTrancheAge(updatedEntry['Année naissance']);
    }
    
    // Préparer les données mises à jour
    const updatedRow = headers.map(header => {
      return updatedEntry[header] !== undefined ? updatedEntry[header] : '';
    });
    
    // Mettre à jour la ligne
    sheet.getRange(rowIndex, 1, 1, updatedRow.length).setValues([updatedRow]);
    
    return {
      success: true,
      message: 'Entrée mise à jour avec succès.'
    };
  } catch (error) {
    return {
      success: false,
      message: `Erreur lors de la mise à jour : ${error.toString()}`
    };
  }
}

// Supprimer une entrée dans Nouvelle Cohorte
function deleteCohorteEntry(rowIndex) {
  try {
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = ss.getSheetByName(NOUVELLE_COHORTE_SHEET_NAME);
    
    // Supprimer la ligne
    sheet.deleteRow(rowIndex);
    
    return {
      success: true,
      message: 'Entrée supprimée avec succès.'
    };
  } catch (error) {
    return {
      success: false,
      message: `Erreur lors de la suppression : ${error.toString()}`
    };
  }
}

// Récupérer les valeurs uniques pour les champs de référence
function getReferenceData() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const cohorteSheet = ss.getSheetByName(NOUVELLE_COHORTE_SHEET_NAME);
  const listeOPSheet = ss.getSheetByName(LISTE_OP_SHEET_NAME);
  
  // Récupérer les données des feuilles
  const cohorteData = cohorteSheet.getDataRange().getValues();
  const listeOPData = listeOPSheet.getDataRange().getValues();
  
  // Extraire les en-têtes
  const cohorteHeaders = cohorteData[0];
  const listeOPHeaders = listeOPData[0];
  
  // Fonction pour obtenir des valeurs uniques d'une colonne
  function getUniqueValuesFromColumn(data, headerName, headerRow) {
    const colIndex = headerRow.indexOf(headerName);
    if (colIndex === -1) return [];
    
    // Extraire les valeurs de la colonne (en ignorant la première ligne d'en-tête)
    const values = data.slice(1).map(row => row[colIndex]).filter(val => val !== '');
    
    // Retourner les valeurs uniques
    return [...new Set(values)].sort();
  }
  
  // Liste prédéfinie des départements du Bénin
  const departements = [
    'ATLANTIQUE',
    'COLLINES',
    'COUFFO',
    'MONO',
    'OUÉMÉ',
    'PLATEAU',
    'ZOU'
  ];
  
  // Liste prédéfinie des communes du Bénin
  const communes = [
    'ABOMEY-CALAVI',
    'ALLADA',
    'KPOMASSÈ',
    'OUIDAH',
    'TOFFO',
    'ZÈ',
    'BANTÈ',
    'DASSA-ZOUMÉ',
    'GLAZOUÉ',
    'OUÈSSÈ',
    'SAVALOU',
    'SAVÈ',
    'APLAHOUÉ',
    'DJAKOTOMEY',
    'DOGBO',
    'KLOUÉKANMEY',
    'LALO',
    'ATHIÉMÉ',
    'BOPA',
    'COMÉ',
    'GRAND-POPO',
    'HOUÉYOGBÉ',
    'LOKOSSA',
    'ADJOHOUN',
    'AVRANKOU',
    'DANGBO',
    'SÈMÈ-KPODJI',
    'ADJA-OUERE',
    'IFANGNI',
    'KÉTOU',
    'POBÈ',
    'SAKÉTÉ',
    'AGBANGNIZOUN',
    'COVE',
    'DJIDJA',
    'OUINHI',
    'ZAGNANADO',
    'ZOGBODOMEY'
  ];
  
  // Liste prédéfinie des types de conseils
  const typesConseils = [
    'CEF',
    'CdG-OP',
    'CTS'
  ];
  
  // Liste prédéfinie des saisons
  const saisons = [
    'GRANDE',
    'PETITE'
  ];
  
  return {
    departements: departements, // Utiliser la liste prédéfinie au lieu des valeurs extraites
    communes: communes, // Utiliser la liste prédéfinie des communes
    periodesAdhesion: getUniqueValuesFromColumn(listeOPData, 'Période d\'adhésion', listeOPHeaders),
    denominationsOP: getUniqueValuesFromColumn(listeOPData, 'Dénomination OP', listeOPHeaders),
    poles: getUniqueValuesFromColumn(cohorteData, 'Pôle', cohorteHeaders),
    arrondissements: getUniqueValuesFromColumn(cohorteData, 'Arrondissement', cohorteHeaders),
    villages: getUniqueValuesFromColumn(cohorteData, 'Village', cohorteHeaders),
    saisons: saisons, // Utiliser la liste prédéfinie des saisons
    typesSpeculation: getUniqueValuesFromColumn(cohorteData, 'Type spéculation', cohorteHeaders),
    typesConseils: typesConseils // Utiliser la liste prédéfinie des types de conseils
  };
}

// Fonction pour filtrer les données de Nouvelle Cohorte
function filterCohorteData(filterCriteria) {
  const allData = getAllCohorteData();
  
  if (!filterCriteria || Object.keys(filterCriteria).length === 0) {
    return allData; // Pas de critères de filtrage, retourner toutes les données
  }
  
  // Vérifier s'il y a un filtre spécial pour les entrées incomplètes
  const showOnlyIncomplete = filterCriteria['Incomplet'] === 'true';
  if (showOnlyIncomplete) {
    delete filterCriteria['Incomplet']; // Retirer ce critère pour le filtrage standard
  }
  
  // Filtrer les enregistrements selon les critères
  let filteredRecords = allData.records.filter(record => {
    // Appliquer le filtre pour les entrées incomplètes si nécessaire
    if (showOnlyIncomplete && record.isComplete) {
      return false; // Exclure les entrées complètes si on veut uniquement les incomplètes
    }
    
    return Object.entries(filterCriteria).every(([field, value]) => {
      if (!value) return true; // Ignorer les critères vides
      
      const recordValue = record[field];
      if (recordValue === undefined || recordValue === null) return false;
      
      // Vérifier si la valeur du champ correspond au critère (insensible à la casse)
      return recordValue.toString().toLowerCase().includes(value.toString().toLowerCase());
    });
  });
  
  return {
    headers: allData.headers,
    records: filteredRecords,
    requiredFields: REQUIRED_FIELDS
  };
}