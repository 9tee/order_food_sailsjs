module.exports = {


  friendlyName: 'List food',


  description: '',


  inputs: {
    skip: { type: 'number', required: true },
    limit: { type: 'number', required: true },
    sort: { type: 'string' }
  },


  exits: {
    success: { code: 200 }
  },

  sync: true,
  fn: function (inputs, exits) {
    let { skip, limit, sort } = inputs;
      Food
        .find()
        .skip(skip)
        .limit(limit)
        .then(function(food){
          if(food.length===0){
            return exits.success(
              {
                  code:200,
                  message: 'Food not existed',
                  success: true,
                  data:{
                    food:[]
                  }
              });
          }
          return exits.success(
            {
                code:200,
                message: 'OK',
                success: true,
                data:{food}
            });
        });
        
    


  }


};
