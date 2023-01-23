
import {randomCard} from '../controllers/random.controller.js'


async function routes(fastify, options) {
  fastify.get('/randomCard', randomCard)
}

export default routes
