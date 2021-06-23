
const mongoose = require('mongoose');

require('dotenv').config({
    path: '.env'
});

mongoose.connect("mongodb://localhost:27017/ecommerce",{
    useUnifiedTopology: true,
    useNewUrlParser: true
});

mongoose.Promise = global.Promise;

mongoose.connection.on('error', (err) => {
    console.log(`Erreur de connexion a MongoDB -> ${err.message}`);
});

require('./Backend/Models/cafes.model');

const app = require('./app')


const server = app.listen(3000, () => {
    console.log(`Le serveur est demarré sur le port ${server.address().port}`)
})

