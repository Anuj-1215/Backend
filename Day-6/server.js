const app = require('./src/app')

const mongoose = require('mongoose')

function connectToDb(){
    mongoose.connect('mongodb+srv://Anuj:8A6lMSlquuj6Kbr2@cluster0.vbklcf.mongodb.net/Day-6')
    .then(()=>{
        console.log('====================================');
        console.log('Connected to DataBase');
        console.log('====================================');
    })
}

connectToDb()

app.listen(3000, ()=>{
    console.log('====================================');
    console.log("Server is running on port 3000");
    console.log('====================================');
})