const hapi = require('hapi');
const inert = require('inert');
const path = require('path');

let server = new hapi.Server({  
    host: 'localhost',
    port: 3000
  })

  async function start () {  
    // start your server
    try {
      await server.start()
    } catch (err) {
      console.error(err)
      process.exit(1)
    }
  
    console.log('Server running at: ', server.info.uri)
  }
  
  start()  