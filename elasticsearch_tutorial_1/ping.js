const esClient = require('./client');

esClient.ping({
  requestTimeout: 1000
}, (error) => {
  if (error) {
    console.log('Elasticsearch cluster is down!');
  } else {
    console.log('All is well');
  }
})
