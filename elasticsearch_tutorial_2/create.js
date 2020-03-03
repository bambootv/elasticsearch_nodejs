const client = require('./connection')

client.indices.create({
  index: 'gov'
}, (err, res, status) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Create', res);
  }
})
