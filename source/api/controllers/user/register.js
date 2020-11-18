module.exports = {


  friendlyName: 'Register',


  description: 'Register user.',


  inputs: {
    user_name: { type: 'string', required: true },
    full_name: { type: 'string', required: true },
    address: { type: 'string', required: true },
    mobile: { type: 'string', required: true },
    email: { type: 'string', required: true },
    password: { type: 'string', required: true },
    password2: { type: 'string', required: true }
  },


  exits: {

  },
  sync: true,

  fn: function (inputs, exits) {
    let { user_name, full_name, address, mobile, email, password, password2, } = inputs;

    Account.findOne({ username: user_name, type:this.req.typeUser })
      .then((data) => {
        if (data) {
          return exits.success(
            {
              code: 200,
              message: 'Tài khoản đã tồn tại',
              success: true,
              data: {
                inputs
              }
            });
        }
        if (password !== password2) {
          return exits.success(
            {
              code: 200,
              message: 'Xác nhận mật khẩu sai',
              success: true,
              data: {
                inputs
              }
            });
        }
        let passwordHash = sails.helpers.bscrypt.sign(password);
          User.create({
            full_name:full_name,
            address:address,
            mobile:mobile,
            email:email,
          }).fetch().then((userInfo)=>{
            Account.create({
              username: user_name,
              password:passwordHash,
              type:this.req.typeUser,
              typeId:userInfo.id
            }).then(()=>{})
            return exits.success(
              {
                code: 201,
                message: 'Đăng ký thành công',
                success: true,
                
              });
          })
        
        
          
       
        
      })

  }


};
