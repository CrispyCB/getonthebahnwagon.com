const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000;
app.set('views', './views')
app.set('view engine', 'pug')
app.use('/static', express.static(path.join( __dirname, 'static')));

app.get('/', (req, res) => res.redirect('../about'))

app.get('/about', (req, res) => res.render('about'))
app.get('/about/programmer', (req, res) => res.render('programmer'))
app.get('/about/communicator', (req, res) => res.render('communicator'))
app.get('/about/student', (req, res) => res.render('student'))

app.get('/career', (req, res) => res.render('career'))

app.get('/documentation', (req, res) => res.render('documentation'))

app.get('/projects', (req, res) => res.render('projects'))

app.get('/contact', (req, res) => res.render('contact'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))