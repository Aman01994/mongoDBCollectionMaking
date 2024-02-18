const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();

require('dotenv').config();
const mongoDBUser = process.env.MONGO_USER
const mongoDBPass = process.env.MONGO_PASS
const PORT = process.env.PORT

async function  ConnectMongo(){
    return await mongoose.connect(`mongodb+srv://${mongoDBUser}:${mongoDBPass}@cluster0.redzkol.mongodb.net/?retryWrites=true&w=majority`)
}

ConnectMongo().then((data)=>{
    console.log(`Connection with MongoDB established successfully`)
    const student = mongoose.model('Student',{name : String})

    const student1 = new student({name : "Amandeep Singh"})
    student1.save().then((data)=>{
        console.log(data)
    const student2 = new student({name : "Gagandeep Singh"})
    student2.save().then((data)=>{
        console.log(data)
    })

    }).catch((err)=>{
        console.log(err)
    })
}).catch((err)=>{
    console.log(err);
});

app.listen(PORT,()=>{
    console.log(`Server listening on ${PORT}`)
})