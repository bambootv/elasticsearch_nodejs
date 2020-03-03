const esClient = require('./client');
const addMappingToIndex = async (indexName, mappingType, mapping) => {
  return await esClient.indices.putMapping({
    index: indexName,
    type: mappingType,
    body: mapping,
    include_type_name: true
  })
}

module.exports = addMappingToIndex;

async function test() {
  const mapping = {
    properties: {
      title: {
        type: "text"
      },
      tags: {
        type: "keyword"
      },
      body: {
        type: "text"
      },
      timestamp: {
        type: "date",
        format: "epoch_millis"
      }
    }
  }

  try {
    const resp = await addMappingToIndex('blog', 'ciphertrick', mapping);
    console.log("Add mapping OK", resp);
  } catch (error) {
    console.log(error);
  }
}

test();
