const client = require('./connection')
const inputfile = require("./constituencies.json");
var bulk = [];

inputfile.forEach(el => {
  bulk.push(
    { index: { _index: 'gov', _type: 'constituencies', _id: el.PANO } },
    {
      'constituencyname': el.ConstituencyName,
      'constituencyID': el.ConstituencyID,
      'constituencytype': el.ConstituencyType,
      'electorate': el.Electorate,
      'validvotes': el.ValidVotes,
      'regionID': el.RegionID,
      'county': el.County,
      'region': el.Region,
      'country': el.Country
    }
  );
});

console.log("Bulk content prepared");

client.bulk({
  maxRetries: 5,
  index: 'gov',
  type: 'constituencies',
  body: bulk
}, function (err, resp, status) {
  if (err) {
    console.log(err);
  }
  else {
    console.log(resp.items);
  }
})

// client.index({
//   index: 'gov',
//   id: 1,
//   type: 'constiduencies',
//   body: {
//     "ConstituencyName": "Ipswich",
//     "ConstituencyID": "E14000761",
//     "ConstituencyType": "Borough",
//     "Electorate": 74499,
//     "ValidVotes": 48694,
//   }
// }, (err, res, status) => {
//   console.log(err, res, status);
// })
