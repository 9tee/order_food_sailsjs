/**
 * Permision.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id: { type: 'number', autoIncrement: true, },//Trường này ko xóa được nhé
    role_id:{type:'number'},
    usergroup_id:{type:'number'}
   
  },

};

