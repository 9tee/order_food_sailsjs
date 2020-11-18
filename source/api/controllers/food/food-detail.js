module.exports = {


  friendlyName: 'Food detail',


  description: '',


  inputs: {
    foodId: { type: 'number', required: true }
  },


  exits: {

  },

  sync: true,
  fn: function (inputs, exits) {
    let { foodId } = inputs;
    Food.findOne({ id: foodId })
      .then((foodInfo) => {
        if (!foodInfo) {
          return exits.fail({
            code: 403,
            message: 'Food not existed'
          })
        }
        return { foodInfo, foodId };
      })
      .then((data) => {
        FoodImage.find({ food_id: data.foodId })
          .then((foodImageInfo) => {
            data.foodInfo.foodImages = foodImageInfo;
            return exits.success({
              code: 200,
              message: "OK",
              success: true,
              data: {
                foodInfo: data.foodInfo
              }
            })
          })

      })
  },

  fn: function (params) {
    
  } 

};
