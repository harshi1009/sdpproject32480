const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/sdpproject32';

const mongoDB = async () => {
    try{
        mongoose.connect(mongoURI)
        // mongoose.set('strictQuery', false)
        console.log('Connected to the Database');
    }
    catch(error){
        console.log(console.log(error))
    }
}



module.exports = mongoDB;