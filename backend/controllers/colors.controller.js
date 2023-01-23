
async function hasColor(req, reply) {
  const collection = this.mongo.db.collection('cards')
  const target=req.params.color
  const result = await collection.find({colors:target}).toArray()
  if (result.length == 0) {
    return { 'error': 'No foods found' }
  } 
  reply.send(result)
}

async function hasColors(req, reply) {
  const collection = this.mongo.db.collection('cards')
  const target=req.query.colors
  const limit=parseInt(req.query.limit)||10
  const skip=parseInt(req.query.skip)||0
  const result = await collection.find({colors:target}).skip(skip).limit(limit).toArray()
  if (result.length == 0) {
  return { 'error': 'No foods found' }
  } 
  reply.send(result)
}

export {hasColor,hasColors} 
