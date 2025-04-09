const admin = require('firebase-admin');

// Initialisation de Firebase Admin
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  projectId: 'vroomiq-2ab14'
});

const db = admin.firestore();

module.exports = { admin, db }; 