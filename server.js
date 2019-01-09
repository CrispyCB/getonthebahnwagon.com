const express = require('express')
const path = require('path')
const app = express()
const port = 3000
app.set('views', '../views')
app.set('view engine', 'pug')
app.use('/stylesheets', express.static(path.join( __dirname, 'stylesheets')));

app.get('/about', (req, res) => res.render('about'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))