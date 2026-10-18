const mongoose = require('mongoose')

function connectToDb(){
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log('====================================');
        console.log('Connected to Database');
        console.log('====================================');
    })
}


module.exports = connectToDb