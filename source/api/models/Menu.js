/**
 * Menu.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id: { type: 'number', autoIncrement: true, },
    name: { type: 'string' },
    store_id: { type: 'number' }
  },
  getListMenu: (store_id) => {
    Menu.find({ store_id: store_id })
      .then((menuInfo) => {
        if (!menuInfo) {
          throw "Không có thông tin menu"
        }
        return menuInfo;
      })
  }
};

