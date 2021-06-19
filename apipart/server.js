const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 2000;

app.use(bodyParser.json({limit: '100mb'}));
app.use(cors());

app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT,GET,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

app.get('/click', (req, res) =>{
    res.send({"response":"Oi this is a greeting"})
});

app.post('/myPostEndpoint', function (req, res) {
    let bodyOfTheRequest = req.body;
    let fullName = `The full name is ${bodyOfTheRequest.firstname} ${bodyOfTheRequest.lastname}`
    res.send({
        "status": "OK",
        "message": fullName
    }
    );
})

app.listen(port, function(){
    console.log("Live on the port")
});