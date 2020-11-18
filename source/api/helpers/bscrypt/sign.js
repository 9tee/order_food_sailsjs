const bcrypt = require('bcrypt')
module.exports = {


  friendlyName: 'Sign',


  description: 'Sign bscrypt.',


  inputs: {
    password:{type:'string',required:true}
  },


  exits: {

    success: {
      description: 'All done.',
    },

  },
  sync:true,

  fn: function (inputs,exits) {
    let {password}=inputs;
    const saltRounds = 10;
    // bcrypt.hash(password, saltRounds).then(function(hash) {
    //   return exits.success(hash);
    // });
    let passwordHash = bcrypt.hashSync(password, saltRounds);
    return exits.success(passwordHash);
  }


};

