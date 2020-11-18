module.exports = {


  friendlyName: 'Login',


  description: 'Login user.',


  inputs: {
    user_name: { type: 'string', required: true },
    password: { type: 'string', required: true },
    captra: { type: 'string' }
  },


  exits: {

  },

  sync: true,
  fn: function (inputs,exits) {
    let { user_name, password, captra } = inputs;
    Account.findOne({ username: user_name })
      .then((accountInfo) => {
        if (!accountInfo) {
          return exits.success(
            {
              code: 200,
              message: 'Không tồn tại người dùng vui lòng đăng ký ',
              success: true,
            });
        }
        let checkPassword = sails.helpers.bscrypt.verify(password, accountInfo.password)
        if (accountInfo.username !== user_name || !checkPassword) {
          return exits.success(
            {
              code: 200,
              message: 'Bạn nhập sai mật khẩu hoặc password',
              success: true,
            });
        }
        let user = {
          id: accountInfo.typeId,
        }
        let token = sails.helpers.jwt.sign(user);
        delete accountInfo.password;
        delete accountInfo.type;
        delete accountInfo.typeId;
        return exits.success({
          code: 200,
          message: 'OK',
          success: true,
          accountInfo:accountInfo,
          token:token
        })
      })
  

  }


};
