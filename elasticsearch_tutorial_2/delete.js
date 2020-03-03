const client = require('./connection')

client.indices.delete({
  index: 'gov'
}, (err, res, status) => {
  console.log('Delete', err, res, status);
})
