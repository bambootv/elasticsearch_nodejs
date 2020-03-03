'use strict'

const esClient = require('./client');
const searchDoc = async (indexName, mappingType, payload) => {
  return await esClient.search({
    index: indexName,
    type: mappingType,
    body: payload
  })
}

module.exports = searchDoc;

async function test(){
  const body = {
    query: {
      // match: {
      //   "title": "Learn"
      // }
      match_phrase_prefix: {
        "title": "Lea"
      }
    }
  }
  try {
    const resp = await searchDoc('blog', 'ciphertrick', body);
    console.log(resp);
    resp.hits.hits.forEach(el => {
      console.log(el);
    })
  } catch (error) {
    console.log(error);
  }
}

test();
