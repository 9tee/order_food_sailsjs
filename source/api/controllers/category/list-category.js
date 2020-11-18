module.exports = {


  friendlyName: 'List catrgory',


  description: '',


  inputs: {
    skip: { type: 'number'},
    limit: { type: 'number' }
  },


  exits: {

  },
  sync:true,


  fn: function (inputs, exits) {
    let {skip,limit} = inputs;
    sails.sendNativeQuery(`select * from Category where is_active = 1`).then((data)=>{
      return exits.success({
        code:200,
        message:'OK',
        success:true,
        data:{
          listCategory:data.rows
        }
      });
    });

    

  }


};
