const express = require('express');

//Express App
const app = express();
// let path = './views';

//Register View Engine
app.set('view engine','ejs');

//Listen For Request
app.listen(3000);

//Response Request
app.get('/', (req, res) => {
    //Menggantikan res.setHeader
    // res.send('<h1>Halo Semua</h1>');
    res.sendFile(`./views/index.html`, { root: __dirname });
});

app.get('/about', (req, res) => {
    res.sendFile(`./views/about.html`, { root: __dirname });
});

//Redirecting
app.get('/about-us', (req, res) => {
    res.redirect('/about');
});

//404 Page
//Middleware
app.use((req, res) => { 
    res.sendFile('./views/404.html',{root : __dirname});
});