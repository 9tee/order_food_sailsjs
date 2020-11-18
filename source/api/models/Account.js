/**
 * Account.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id: { type: 'number', autoIncrement: true, },
    username:{type:'string', unique:true},
    password:{type:'string'},
    type:{type:'string', isIn:['customer','shipper','store']},
    typeId:{type:'number'},
    status:{type:'boolean',defaultsTo:false}
  },

};

