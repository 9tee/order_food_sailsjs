module.exports = {


  friendlyName: 'Get one',


  description: '',


  inputs: {
    userId: { type: 'number' }
  },


  exits: {

  },

  sync:true,
  fn: function (inputs, exits) {
    let userId = inputs;
    User.findOne({
      id: inputs.userId
    })
    .then(function (user) {
      if (!user) { return exits.notFound(); }
      return exits.success(
        {
          code: 200,
          message: 'OK',
          success: true,
          data: user
        });
    }).catch(function (err) {
      console.error(err)
      return exits.success({
        code: 404,
        message: 'USER DOES NOT EXSIT',
        success: false
      });
    });

  }


};
