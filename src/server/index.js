const express = require('express');
const mongoose = require('mongoose');

const app = express();

async function start() {
    try {
        await mongoose.connect('mongodb+srv://alex:632748@cluster0.yuezr.mongodb.net/mercury?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        app.listen(4000, () => console.log(`App has been started!`));

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
