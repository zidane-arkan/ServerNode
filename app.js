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
    const blogData = [
        { title: 'Lupa sunat saat makan', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { title: 'Meninjau proses minum', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { title: 'Kenapa anda gila ?', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }
    ];
    //Menggantikan res.setHeader
    // res.sendFile(`./views/index.ejs`, { root: __dirname });
    res.render('index', { title: 'Home', blogData });
});

app.get('/about', (req, res) => {
    res.render('about',{title : 'About'});
});

app.get('/blogs/create', (req, res) => { 
    res.render('create', {title : "Create New Blog"});
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