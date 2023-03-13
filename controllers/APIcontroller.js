'use strict';
const SmartContractDAO = require('../data/SmartContractDAO');
const helper = require('./helper.js');
exports.withdraw = async function withdraw(req, res) {
  try {
    // get the address, amount from request body
    let { address, amount } = req.body;
    if (address === undefined || amount === undefined || amount <= 0) {
      return res.status(400).json(helper.APIReturn(101, "bad request"));
    }
    console.log("APIcontroller = ", address)
    console.log("call smart contract");
    // send token
    let dao = new SmartContractDAO();
    // console.log("dao = ", dao)
    let trans = await dao.withdraw(address, amount);
    // console.log("trans = ", trans)
    console.log("response = ", res)
    return res.status(200).json(helper.APIReturn(0, {
      "to": address,
      "amount": amount,
      "txHash": trans
    }, "success"));
  }
  catch (error) {
    console.log(error);
    return res.status(500).json(helper.APIReturn(101, "something is wrong"));
  }
}