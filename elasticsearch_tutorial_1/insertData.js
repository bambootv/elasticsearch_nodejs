'use strict'

const esClient = require('./client');
const insertDoc = async (indexName, _id, mappingType, data) => {
  return await esClient.index({
    index: indexName,
    type: mappingType,
    id: _id,
    body: data
  })
}

module.exports = insertDoc;

async function test() {
  const data = {
    title: "Learn elasticsearch",
    tags: ['NodeJS', 'Elasticsearch'],
    body: 'Lot of content here ...'
  }
  try {
    const resp = await insertDoc('blog', 2, 'ciphertrick', data)
  } catch (error) {
    console.log(error);
  }
}

test()
