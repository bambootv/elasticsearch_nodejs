var client = require('./connection.js');

client.indices.putMapping({
  index: 'gov',
  type: 'constituencies',
  includeTypeName: true, // Add parameter for your put mapping.
  body: {
    properties: {
      'constituencyname': {
        'type': 'keyword'
      },
      'electorate': {
        'type': 'integer'
      },
      'validvotes': {
        'type': 'integer'
      }
    }
  }
}, function (err, resp, status) {
  if (err) {
    console.log(err);
  }
  else {
    console.log(resp);
  }
});
