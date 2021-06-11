async function routes(fastify, options) { 
    fastify.get('/usuarios', async (request, reply) => { 
        reply.send({ hello: 'usuarios' }) 
    }) 

    fastify.get('/empresas', async (request, reply) => { 
        reply.send({ hello: 'empresas' }) 
    }) 
} 
module.exports= routes