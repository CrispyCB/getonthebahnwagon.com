// const express = require('express')
// const path = require('path')
// const app = express()
// const port = process.env.PORT || 3000;
// app.set('views', './views')
// app.set('view engine', 'pug')
// app.use('/static', express.static(path.join( __dirname, 'static')));

// app.get('/', (req, res) => res.redirect('../about'))

// app.get('/about', (req, res) => res.render('about'))
// app.get('/about/programmer', (req, res) => res.render('programmer'))
// app.get('/about/communicator', (req, res) => res.render('communicator'))
// app.get('/about/student', (req, res) => res.render('student'))

// app.get('/career', (req, res) => res.render('career'))

// app.get('/documentation', (req, res) => res.render('documentation'))

// app.get('/projects', (req, res) => res.render('projects'))

// app.get('/contact', (req, res) => res.render('contact'))

// app.listen(port, () => console.log(`Example app listening on port ${port}!`))
const Hapi = require('hapi');
const Inert = require('inert');
const Vision = require('vision');
const Pug = require('pug');
const Path = require('path');

const server = Hapi.Server({
    port: 3000,
    routes: {
        files: {
            relativeTo: Path.join(__dirname, 'static/')
        }
    }
});

const rootHandler = (request, h) => {

    return h.view('index', {
        title: 'examples/pug/templates | Hapi ' + request.server.version,
        message: 'Hello Pug!'
    });
};

const provision = async () => {

    await server.register(Inert);
    await server.register(Vision);

    server.views({
        engines: { pug: Pug },
        relativeTo: __dirname,
        path: './views',
        layoutPath: './static/stylesheets',
        compileOptions: {
            // By default Pug uses relative paths (e.g. ../root.pug), when using absolute paths (e.g. include /root.pug), basedir is prepended.
            // https://pugjs.org/language/includes.html
            basedir: Path.join(__dirname)
        }
    });

    server.route({
        method: 'GET',
        path: '/static/{param*}',
        handler: {
            directory: {
                path: '.',
                redirectToSlash: true,
                index: true,
            }
        }
    });

    server.route({
        method: 'GET',
        path: '/about',
        handler: {
            view: 'about'
        }
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h)=>{
            return h.redirect('/about');
        }
    });

    await server.start();
    console.log('Server running at:', server.info.uri);
};

provision();