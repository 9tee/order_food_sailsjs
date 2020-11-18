
module.exports = {


  friendlyName: 'Get all',


  description: '',


  inputs: {
    skip:{type:'number'},
    limit:{type:'number'}
  },


  exits: {

  },
  sync:true,
  fn:function (inputs,exits) {
    let {skip,limit} = inputs;
    User.find().skip((skip-1)*limit).limit(limit).then(function (user){
      if (!user) {
         return res.notFound();
         }
        
      return exits.success(
        {
            code:200,
            message: 'OK',
            success: true,
            data:user
        });
    }).catch(function (err) { 
      console.error(err)
      return exits.success({
        code:403,
        message: 'bad request',
        success: false
        
      }); 
    });
  }

};
