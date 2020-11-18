const jwt = require('jsonwebtoken')
module.exports = {


  friendlyName: 'Verify',


  description: 'Verify jwt.',


  inputs: {
    token:{type:'string',}
  },


  exits: {

    success: {
      description: 'All done.',
    },

  },
  sync:true,

  fn: function (inputs) {
    let {token} = inputs;
    let decoded = jwt.verify(token, process.env.SECRET_KEY);
    return decoded;
  }


};

