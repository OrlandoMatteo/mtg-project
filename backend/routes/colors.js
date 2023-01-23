
import { hasColor, hasColors } from '../controllers/colors.controller.js'


async function routes(fastify, options) {
  fastify.get('/hasColor/:color', hasColor)
  fastify.get('/hasColors', hasColors)
}

export default routes
