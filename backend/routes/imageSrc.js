

import {imageSrc} from '../controllers/image.controller.js'


async function routes(fastify, options) {
  fastify.get('/imageSrc/:scryfallOracleId', imageSrc)
}

export default routes
