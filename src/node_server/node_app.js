var fs = require('fs');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();



app.use(bodyParser.json());
app.use(cors());



app.get('/', function(req, res){
    config = fs.readFileSync('../data.json');
    res.send(config.toString())
});

app.get('/taille', function(req, res){
    config = fs.readFileSync('../data.json');
    res.send(config.toString().length)
});

app.post('/post', function(req, res){
    config = fs.readFileSync('../data.json', 'utf8');
    config = JSON.parse(config.toString());
    config.push(req.body.body);
    fs.writeFileSync('../data.json', JSON.stringify(config));
    console.log(req.body.body);
});

app.listen(3000, function(){
    console.log('en écoute');
});