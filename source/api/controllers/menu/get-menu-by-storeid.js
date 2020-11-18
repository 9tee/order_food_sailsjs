const Menu = require("../../models/Menu");

module.exports = {


  friendlyName: 'Get menu by id',


  description: '',


  inputs: {
    store_id: { type: 'number' }
  },


  exits: {

  },


  fn: async function (inputs, exits) {
    let { store_id } = inputs
    Menu.find({ store_id: store_id })
      .then((menuInfo) => {
        if (!menuInfo) {
          return exits.success({
            message: "Không có dữ liệu cửa hàng",
            success: false
          })
        }
        return exits.success({
          message: "Thành công",
          success: true,
          data: {
            menuInfo
          }
        })
      })
  }


};
