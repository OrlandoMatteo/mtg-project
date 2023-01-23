import Fastify from 'fastify'
import fastifyPlugin from 'fastify-plugin'
import fastifyMongo from '@fastify/mongodb'
/**
 * @type {import('fastify').FastifyInstance} Instance of Fastify
 */
import dbConnector from './utils/dbConnector.js'
import types from './routes/types.js'
import colors from './routes/colors.js'
import text from './routes/text.js'
import random from './routes/random.js'
import imageSrc from './routes/imageSrc.js'

const fastify = Fastify({
  logger: true
})
const PORT = process.env.PORT || 5000
const ADDRESS = process.env.NODE_ENV == 'production' ? '0.0.0.0' : '127.0.0.1'
console.log(ADDRESS)
fastify.register(dbConnector)
fastify.register(types)
fastify.register(colors)
fastify.register(text)
fastify.register(random)
fastify.register(imageSrc)

fastify.listen({ port: PORT, host: ADDRESS }, function(err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  // Server is now listening on ${address}
})
