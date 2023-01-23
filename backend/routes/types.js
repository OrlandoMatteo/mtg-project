
import { hasType, hasTypes } from '../controllers/types.controller.js'


async function routes(fastify, options) {
  fastify.get('/hastype/:type', hasType)
  fastify.get('/hastypes', hasTypes)
}

export default routes
