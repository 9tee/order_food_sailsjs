const bcrypt = require('bcrypt')
module.exports = {


  friendlyName: 'Verify',


  description: 'Verify bscrypt.',


  inputs: {
    password:{type:'string',required:true},
    hash:{type:'string',required:true}
  },


  exits: {

    success: {
      description: 'All done.',
    },

  },
  sync:true,

  fn: function (inputs,exits) {
    let {password,hash}=inputs;
    let compare = bcrypt.compareSync(password, hash);
    return exits.success(compare);
  }


};

