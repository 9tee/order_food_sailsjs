/**
 * Food.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id: { type: 'number', autoIncrement: true, },
    name:{type:'string'},
    init_price:{type:'string'},
    sale_price:{type:'string'},
    image:{type:'string'},
    title:{type:'string'},
    content:{type:'string'},
    rate_avg:{type:'number'},
    rate_one:{type:'number'},
    rate_two:{type:'number'},
    rate_three:{type:'number'},
    rate_four:{type:'number'},
    rate_five:{type:'number'},
    total_like:{type:'number'},
    store_id:{type:'number'},
    category_id:{type:'number'}

  },

};

