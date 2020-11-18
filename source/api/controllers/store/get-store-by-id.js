const searchFood = require("../food/search-food");

module.exports = {


  friendlyName: 'Get store by id',


  description: '',


  inputs: {
    store_id: { type: 'number' }
  },


  exits: {

  },


  fn: async function (inputs, exits) {
    let { store_id } = inputs;
    Store.findOne({ id: store_id })
      .then((storeInfo) => {
        if (!storeInfo) {
          return exits.success({
            message: "Không có dữ liệu cửa hàng",
            success: false
          })
        }
        return exits.success({
          message: "Thành công",
          success: true,
          data: {
            storeInfo
          }
        })
      })
      .catch((err) => {
        console.log("store/get-store-by-id: ", err.message);
        return exits.success({
          code: 401,
          message: "lỗi hệ thống",
          success: false,

        })
      })

  }


};
