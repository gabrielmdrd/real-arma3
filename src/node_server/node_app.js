var fs = require('fs');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();



app.use(bodyParser.json());
app.use(cors());



app.get('/', function(req, res){

    const config = fs.readFileSync('../data.json');
    const itemsFile = JSON.parse(config);
    const dataLen = itemsFile.length;

    let tab = []; //Contient la réponse JSON
    let itemsPerPage = 8; //nombre d'articles par page

    .
    let tmp;
    let nbPages = Math.ceil(dataLen / itemsPerPage); //nombre de pages en fcontion du nombre d'articles

    if(req.query.nb > nbPages || req.query.nb == null || req.query.nb == 1) //Vérification de l'exsitence du paramètre et qu'il est supérieur à nombre de pages
    {
        for(i = 0;i < itemsPerPage;i++)
        {
            tab.push(itemsFile[i]);
        }
    }
    else
    {
        if(req.query.nb > 1)
        {
            tab = [];
            lastLine = itemsPerPage * req.query.nb;
            tmp = lastLine - itemsPerPage;
            if(lastLine > dataLen)
            {
                for(i = tmp;i < dataLen;i++)
                {
                    tab.push(itemsFile[i]);
                }
            }
            else
            {
                for(i = tmp;i < lastLine;i++)
                {
                    tab.push(itemsFile[i]);
                }
            }
        }
    }
    res.send(tab);
});

app.get('/len', function(req, res){
    const config = fs.readFileSync('../data.json');
    const itemsFile = JSON.parse(config);
    const dataLen = itemsFile.length;
    let itemsPerPage = 8;
    let nbPages = Math.ceil(dataLen / itemsPerPage);

    res.send({nbPages: nbPages});

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