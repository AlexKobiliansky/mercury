const express = require('express');
const mongoose = require('mongoose');
const config = require('config');

const app = express();

const PORT = config.get('port') || 5000;

app.use('/api/auth', require('./routes/auth.routes'));

async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        app.listen(PORT, () => console.log(`App has been started! Port ${PORT}`));

        // insert
        // const testTable = mongoose.model('Test Table', {name: String});
        // const testValue = new testTable({name: 'sss'});
        // testValue.save().then(() => console.log('test value added!'));
    } catch (e) {
        console.log('Server Error', e.message);
        process.exit(1);
    }
}



start();
