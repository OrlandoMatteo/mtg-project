
import { hasText} from '../controllers/text.controller.js'


async function routes(fastify, options) {
  fastify.get('/hasText',hasText )
}

export default routes
