const hapi = require('hapi');
const inert = require('inert');
const path = require('path');

let server = new hapi.Server({  
    host: 'localhost',
    port: 3000
  })

//starts server
const start = async () => {

    await server.register(require('inert'));

    //sets root route
    server.route({
        method: 'GET',
        path: '/about',
        handler: function (request, h) {

            return h.file('../about/about.html');
        }
    });

    await server.start();

    console.log('Server running at:', server.info.uri);
};

start();