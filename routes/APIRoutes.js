
'use strict';
module.exports = function (app) {
  var api = require('../controllers/APIController'); 
  app.post('/api/withdraw', api.withdraw);
}
// withdraw ticket to FLP token
//localhost:3000/api/withdraw
/*
{
  "address" : "0x65aB56750E10a7FC04e4f6423cde149833D1F7e4", 
  "amount":50
}
*/