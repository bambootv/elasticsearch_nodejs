const client = require('./connection')

client.indices.getMapping({
  index: 'gov',
  type: 'constituencies',
  includeTypeName: true // Add parameter for your put mapping.
},
  function (error, response) {
    if (error) {
      console.log(error.message);
    }
    else {
      console.log("Mappings:\n", response.gov.mappings.constituencies.properties);
    }
  });

client.indices.getMapping({
  index: 'gov',
  type: 'petitions',
},
  function (error, response) {
    if (error) {
      console.log(error.message);
    }
    else {
      console.log('Mappings:\n', response.gov.mappings.petitions.properties);
    }
  });
