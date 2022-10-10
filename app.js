const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

//Express App
const app = express();

//Connect to Mongo Db Atlas
const dbURI = 'mongodb://admin:1234@ac-geelcqo-shard-00-00.eumshzl.mongodb.net:27017,ac-geelcqo-shard-00-01.eumshzl.mongodb.net:27017,ac-geelcqo-shard-00-02.eumshzl.mongodb.net:27017/?ssl=true&replicaSet=atlas-4i5mwg-shard-0&authSource=admin&retryWrites=true&w=majority';
mongoose
    .connect(dbURI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    .then((result) => app.listen(3000, () => {
        console.log('Database Is Connected');
    }))
    .catch((err) => console.log(err));

//Register View Engine
app.set('view engine', 'ejs');

//Listen For Request
// app.use((req,res,next) => {
//     console.log('New Request Made');
//     console.log('Host :',req.hostname);
//     console.log('Path: ', req.path);
//     console.log('Method: ', req.method);
//     next();
// });

//Middleware & Static Files
app.use(express.static('public'));
app.use(morgan('dev'));


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
    res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: "Create New Blog" });
});

//Redirecting
// app.get('/about-us', (req, res) => {
//     res.redirect('/about');
// });

//404 Page
app.use((req, res) => {
    res.status(404).render('404');
});