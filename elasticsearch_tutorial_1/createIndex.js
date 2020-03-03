const esClient = require('./client');

const createIndex = async (indexName) => {
  return await esClient.indices.create({
    index: indexName
  })
}

module.exports = createIndex;

async function test(){
  try {
    const resp = await createIndex('blog');
    console.log(resp);
  } catch (error) {
    console.log(error);
  }
}

test()
