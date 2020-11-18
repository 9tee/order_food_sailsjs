/**
 * Shipper.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id: { type: 'number', autoIncrement: true, },
    name:{type:'string'},
    birthday:{type:'number'},
    phone:{type:'string'},
    identity_card_number:{type:'string'},
    image_id_card:{type:'json'},
    is_partner:{type:'boolean'},
  },

};

