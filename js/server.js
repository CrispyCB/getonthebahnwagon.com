let Hapi = require('hapi');

let server = new Hapi.Server({  
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
  
