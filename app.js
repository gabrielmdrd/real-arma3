const fs = require('fs');
const express = require('express');
const multer = require('multer');
const cors = require('cors');
const bodyParser = require('body-parser');
var session = require('express-session');
const admZip = require("adm-zip");
const app = express();

const upload = multer({
    dest: '../../src/assets/img/store/'
});


app.use(bodyParser.json());
app.use(cors());



app.get('/', function(req, res){

    const config = fs.readFileSync('../data.json');
    const itemsFile = JSON.parse(config);
    const dataLen = itemsFile.length;

    let tab = []; //Contient la réponse JSON
    let itemsPerPage = 8; //nombre d'articles par page

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

app.post('/upload', upload.single("file"),  function(req, res)
{
    fs.renameSync('../../src/assets/img/store/'+req.file.filename,'../../src/assets/img/store/'+req.file.originalname);

    config = fs.readFileSync('../data.json', 'utf8');
    config = JSON.parse(config.toString());
    config[config.length - 1].img_src = req.file.originalname;
    fs.writeFileSync('../data.json', JSON.stringify(config));
});

app.post('/uploadMod', upload.single("mod"),  function(req, res)
{
    fs.renameSync('../../src/assets/img/store/'+req.file.filename,'../../src/assets/mods/'+req.file.originalname);

    config = fs.readFileSync('../data.json', 'utf8');
    config = JSON.parse(config.toString());
    config[config.length - 1].mod_src = req.file.originalname;

    if(config[config.length - 1].mod_src === "") {
    }
    else
    {
        fs.writeFileSync('../data.json', JSON.stringify(config));
    }
});

app.post('/post', function(req, res){
    config = fs.readFileSync('../data.json', 'utf8');
    config = JSON.parse(config.toString());
    let last_id = config[config.length - 1].id;
    req.body.body.id = last_id + 1;
    config.push(req.body.body);

    console.log(req.body.body);
    fs.writeFileSync('../data.json', JSON.stringify(config));

});

app.post('/auth',function(req, res){
    config = fs.readFileSync('../users.json', 'utf8');
    config = JSON.parse(config.toString());

    console.log(config);
    let loginInfos = req.body.body;

    //0 = erreur de mot de passe
    //1 = connecté
    //2= connecté + administrateur
    console.log(req.body.body);
    for(i = 0;i < config.length;i++)
    {
        if(config[i].login === loginInfos.login && config[i].pwd === loginInfos.pwd)
        {
            if(config[i].isAdmin == 1)
            {
                res.send('2');
            }
            else
            {
                res.send('1');
            }
            console.log("connecté");
        }
        else
        {
            //res.send('0');
        }
    }

});

app.get('/getLastImgs', function(req, res){ //pour alimenter la carousel
    config = fs.readFileSync('../data.json', 'utf8');
    config = JSON.parse(config.toString());

    let len = config.length;
    lastImgs = [config[len - 1],
                config[len - 2],
                config[len - 3]];

    console.log(lastImgs);

    res.send(lastImgs);
});

app.get('/download', function(req, res){
    const modPath = "../../src/assets/mods/";
    const cheminzip = "../../src/assets/mods/att.zip";


    let zip = new admZip();

    Object.entries(req.query).forEach(entry => {
        zip.addLocalFile(modPath+entry[1]);
    });
    zip.writeZip('../../src/assets/mods/att.zip');
    res.download(cheminzip);

    console.log(req.query);
});


app.listen(3000, function(){
    console.log('en écoute');
});