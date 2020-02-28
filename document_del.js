const client = require('./connection')

client.delete({
  index: 'gov',
  id: 1,
  type: 'constiduencies'
}, (err, res, status) => {
  console.log(err, res, status);
})
