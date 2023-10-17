'use strict';

const mongoose = require('mongoose');
const password = '4koMd6L5XChFPQrm';
const connectionString = `mongodb+srv://rafacabanillasm:${password}@cluster0.tw7ldrw.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp`;
const app = require('./app');
const port = process.env.PORT || 3700;

mongoose.Promise = global.Promise;
mongoose.connect(connectionString)
    .then(() => {
        console.log('MongoDB Connected with success…')

        // Crear servidor
        app.listen(port, () => {
            console.log('Servidor corriendo en puerto: ' + port);
        });
    })
    .catch(err => console.log(err));
    