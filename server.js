const express = require("express");
const app = express();

app.use(express.static(__dirname + "/css"))
app.use(express.static(__dirname + "/js"))
app.use(express.static(__dirname + "/img"))

const server = app.listen(8080,()=>{
    console.log('start Server : localhost:8080');
});


app.set('views', __dirname + '/views');
// app.set('views', __dirname + '/css');
// app.set('views', __dirname + '/img');
// app.set('views', __dirname + '/js');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/',function(req,res){
    res.render('index.html')
})

app.get('/babo',function(req,res){
    res.render('ss.html')
})

app.get('/dex',function(req,res){
    res.render('index2.html')
})

app.get('/bar',function(req,res){
    res.render('barKo.html')
})

app.get('/En',function(req,res){
    res.render('barEn.html')
})

app.get('/se',function(req,res){
    res.render('search.html')
})