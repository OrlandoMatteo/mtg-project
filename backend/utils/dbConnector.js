import fastifyPlugin from 'fastify-plugin'
import fastifyMongo from '@fastify/mongodb'
/**
 * @param {FastifyInstance} fastify
 * @param {Object} options
 */


const MONGO_URI=process.env.MONGO_URI||'mongodb://localhost:27018/data'
async function dbConnector (fastify, options) {
  fastify.register(fastifyMongo, {
    url: MONGO_URI
  })
}

 export default fastifyPlugin(dbConnector)

