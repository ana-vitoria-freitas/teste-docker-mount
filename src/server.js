// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })
const routeUsuarios = require('./usuarios');

fastify.register(routeUsuarios);

// Declare a route
fastify.get('/', async (request, reply) => {
  return { hello: 'worldizinho aninha vitoria' }
})

fastify.get('/aninha', async(request, reply) =>{
  return {msg: 'rota aninha settada'};
})

fastify.get('/oie', async(request, reply) =>{
  return {msg: 'rota oie settada'};
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000,"0.0.0.0")
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()