async function hasText(req, reply) {
  const collection = this.mongo.db.collection('cards')
  const target=req.query.text
  const limit=parseInt(req.query.limit)||10
  const skip=parseInt(req.query.skip)||0
  const result = await collection.find({ $text: { $search: target } }).skip(skip).limit(limit).toArray()
  if (result.length == 0) {
  return { 'error': 'No foods found' }
  } 
  reply.send(result)
}

export  {hasText}
