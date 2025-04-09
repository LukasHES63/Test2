const { db } = require('./firebase-admin');

// Données des véhicules à migrer
const vehicles = {
    'scenic3': {
        marque: 'Renault',
        modele: 'Scenic III',
        generation: '2009-2016',
        carburant: 'Diesel',
        motorisation: '1.5 dCi 110ch',
        vmax: 180,
        acceleration: 12.3,
        consommation: 4.1,
        critair: 2,
        url: 'https://www.renault.fr/vehicules/vehicules-particuliers.html'
    },
    'peugeot3008': {
        marque: 'Peugeot',
        modele: '3008',
        generation: '2016-2023',
        carburant: 'Diesel',
        motorisation: '1.5 BlueHDi 130ch',
        vmax: 189,
        acceleration: 11.5,
        consommation: 4.0,
        critair: 2,
        url: 'https://www.peugeot.fr/nos-vehicules/3008.html'
    },
    'tiguan': {
        marque: 'Volkswagen',
        modele: 'Tiguan',
        generation: '2016-2023',
        carburant: 'Essence',
        motorisation: '1.5 TSI 150ch',
        vmax: 200,
        acceleration: 9.2,
        consommation: 6.5,
        critair: 1,
        url: 'https://www.volkswagen.fr/fr/modeles/tiguan.html'
    },
    'tucson': {
        marque: 'Hyundai',
        modele: 'Tucson',
        generation: '2020-2023',
        carburant: 'Hybride',
        motorisation: '1.6 T-GDi 230ch',
        vmax: 193,
        acceleration: 8.0,
        consommation: 5.6,
        critair: 1,
        url: 'https://www.hyundai.com/fr/fr/modeles/tucson.html'
    },
    'qashqai': {
        marque: 'Nissan',
        modele: 'Qashqai',
        generation: '2021-2023',
        carburant: 'Mild Hybrid',
        motorisation: '1.3 DIG-T 158ch',
        vmax: 198,
        acceleration: 9.2,
        consommation: 6.3,
        critair: 1,
        url: 'https://www.nissan.fr/vehicules/neufs/qashqai.html'
    }
};

async function migrateData() {
    try {
        const vehiclesRef = db.collection('vehicles');
        
        for (const [id, vehicle] of Object.entries(vehicles)) {
            await vehiclesRef.doc(id).set(vehicle);
            console.log(`Véhicule ${id} migré avec succès`);
        }
        
        console.log('Migration terminée avec succès');
        process.exit(0);
    } catch (error) {
        console.error('Erreur lors de la migration:', error);
        process.exit(1);
    }
}

migrateData(); 