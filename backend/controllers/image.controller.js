import axios from 'axios'
async function imageSrc(req, reply) {
  const target = req.params.scryfallOracleId
  console.log(target)
  const collection = this.mongo.db.collection('identifiers')
  const _result = await collection.find({ "identifiers.scryfallOracleId": target }).limit(1).toArray()
  const scryfallId = _result[0].identifiers.scryfallId
  const url = "https://api.scryfall.com/cards/" + scryfallId + "?format=json"
  console.log(url)
  await axios.get(url).then(response => {
    const info = response.data
    const result = { "uri": info.image_uris.art_crop }
    if (result.length == 0) {
      return { 'error': 'No foods found' }
    }
    reply.send(result)
  })
}

export { imageSrc }
