async function hasType(req, reply) {
  const collection = this.mongo.db.collection('cards')
  const target=req.params.type
  const result = await collection.find({types:target}).toArray()
  if (result.length == 0) {
    return { 'error': 'No foods found' }
  } 
  reply.send(result)
}

async function hasTypes(req, reply) {
  const collection = this.mongo.db.collection('cards')
  const target=req.query.type
  const result = await collection.find({types:target}).toArray()
  if (result.length == 0) {
  return { 'error': 'No foods found' }
  } 
  reply.send(result)
}

export {hasType,hasTypes} 
