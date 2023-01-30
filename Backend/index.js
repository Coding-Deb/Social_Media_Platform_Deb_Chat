const express = require('express')
const { default: mongoose } = require('mongoose')
const Route = require('./Routes/routes')
const app = express()
const port = 5000

//Deb_Chat_1234 -Password
//Deb_Chat -Username
//mongodb+srv://Deb_Chat:Deb_Chat_1234@all-data.ntu5q7t.mongodb.net/All-Data?retryWrites=true&w=majority


mongoose.set('strictQuery', false);


mongoose.connect('mongodb+srv://Deb_Chat:Deb_Chat_1234@all-data.ntu5q7t.mongodb.net/All-Data?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    () => {
        console.log('Connected To Database');
    })


//JSON Format
app.use(express.json())

// Route Path
app.use('/userdata', Route)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))