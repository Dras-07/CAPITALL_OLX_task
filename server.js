const express = require('express');
const cors=require('cors');
const mongoose = require('mongoose');
require('dotenv').config()
const app = express();

//---------------Middleware-------//
app.use(cors());



//-----------MongoDB Connection-------//
const mongoURI=process.env.mongoURI;
const mongoEssentials={
    useNewUrlParser:true,
    useUnifiedTopology:true,
};
mongoose.connect(mongoURI,mongoEssentials,(error)=>{
    if(error){
        console.log(error);
    }else{
        console.log('MongoDB Connected');
    }
});


//-----------Routes-------//
app.use(require('./Routes/Auth/Auth'));
app.use(require('./Routes/Upload/Upload'));
app.use(require('./Routes/Fetch/Fetch'));

//---Sserver congigs and connections---//
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Server started on port ' + PORT);
});

app.get('/', function(req, res){
    res.send('GeeksforGeeks' );
});