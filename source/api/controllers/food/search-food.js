module.exports = {


  friendlyName: 'Search food',


  description: '',


  inputs: {
    search:{type:'string'}
  },


  exits: {

  },

  sync:true,
  fn: function (inputs,exits) {
    let {search} = inputs;

    sails.sendNativeQuery(`select * from food where name like concat('%',$1,'%')`,[search])
    .then((data)=>{
      
      return exits.success({
        code:200,
        message:"Thành công",
        success:true,
        data:{
          search:data.rows
        }
      })
    })

  }


};
