const express = require('express');

//Express App
const app = express();
// let path = './views';

//Register View Engine
app.set('view engine', 'ejs');

//Listen For Request
app.listen(3000);

//Response Request
app.get('/', (req, res) => {
    //Menggantikan res.setHeader
    // res.sendFile(`./views/index.ejs`, { root: __dirname });
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/blogs/create', (req, res) => { 
    res.render('create');
});

//Redirecting
// app.get('/about-us', (req, res) => {
//     res.redirect('/about');
// });

//404 Page
//Middleware
app.use((req, res) => {
    res.status(404).render('404');
});