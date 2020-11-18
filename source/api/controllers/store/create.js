module.exports = {


  friendlyName: 'Create',


  description: 'Create store.',


  inputs: {
    name: { type: 'string' }
  },


  exits: {

  },

  sync:true,
  fn: function (inputs) {
    let name = inputs;

    Store.findOne({ name: name })
    .then((data) => {
      if (data) {
        return exits.success(
          {
            code: 200,
            message: 'Cửa hàng này đã tồn tại',
            success: true,
            data: {
              inputs
            }
          });
      }
        Store.create({
          name: name
        }).then(()=>{
          return exits.success(
            {
              code: 201,
              message: 'Đăng ký cửa hàng thành công',
              success: true,
            });
        }).catch(()=>{
          return exits.success(
            {
              message: 'Đăng ký cửa hàng thất bại',
              success: false,
            });
        })
    })
    
  }


};
