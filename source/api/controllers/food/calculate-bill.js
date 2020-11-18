module.exports = {


  friendlyName: 'Calculate bill',


  description: '',


  inputs: {
    listFood:{type:'ref', required:true},

  },


  exits: {

  },

  sync:true,
  fn: function (inputs) {
    let {listFood} = inputs;
    
    // All done.
    return;

  }


};
