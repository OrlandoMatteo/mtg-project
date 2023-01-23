
async function randomCard(_req, reply) {
  const collection = this.mongo.db.collection('cards')
  const result = await collection.aggregate([{ $sample: { size: 1 } }]).toArray()
  if (result.length == 0) {
  return { 'error': 'No foods found' }
  } 
  reply.send(result)
}

export  {randomCard}
