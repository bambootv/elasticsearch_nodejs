const client = require('./connection')

client.search({
  index: 'gov',
  type: 'constituencies',
  body: {
    query: {
      match: { 'constituencyname': 'Ipswich' }
      // wildcard: { "constituencyname": "???wich" }
      // regexp: { "constituencyname": ".+wich" }
    }
  }
}, (err, res, status) => {
  if (err) {
    console.log(err);
  } else {
    console.log("--- Response ---");
    console.log(res);
    console.log("--- Hits ---");
    res.hits.hits.forEach(function (hit) {
      console.log(hit);
    })
  }
})
