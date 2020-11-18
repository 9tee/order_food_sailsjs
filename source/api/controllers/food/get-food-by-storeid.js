module.exports = {


  friendlyName: 'Get food by storeid',


  description: '',


  inputs: {
    store_id: { type: 'number' }
  },


  exits: {

  },

  sync: true,
  fn: function (inputs, exits) {
    let { store_id } = inputs;
    Food.find({ store_id: store_id })
      .then((foodInfos) => {
        if (!foodInfos) {
          return exits.success({
            message: "Không có dữ liệu danh mục",
            success: false
          })
        }
        return exits.success({
          message: "Thành công",
          success: true,
          data: {
            foodInfos
          }
        })
      })

  }


};
