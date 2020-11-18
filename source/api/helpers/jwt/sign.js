const jwt = require('jsonwebtoken')
module.exports = {


  friendlyName: 'Sign',


  description: 'Sign jwt.',


  inputs: {
    userInfo:{type:'json',required:true,
    description:{

    }
  
  }
  },


  exits: {

    success: {
      description: 'All done.',
    },

  },
  sync:true,

  fn: function (inputs,exits) {
    let {userInfo} = inputs
    let token = jwt.sign({
      data: userInfo
    }, process.env.SECRET_KEY, { expiresIn: 60 * 60*24*20 });
    return exits.success(token)
  }


};

