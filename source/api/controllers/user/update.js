module.exports = {


  friendlyName: 'Update',


  description: 'Update user.',


  inputs: {
    phone: { type: 'string', required: true },
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
    let { user_name, full_name, address, mobile, email, password, password2} = inputs;

    Account.findOne({ id: this.req.userInfo.id ,username: user_name , type: this.req.typeUser })
      .then((data) => {
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
          User.updateOne({
            id: this.req.userInfo.id
          }).set({
            full_name:full_name,
            address:address,
            mobile:mobile,
            email:email,
          }).then(()=>{
            Account.update({
              type:this.req.typeUser,
              typeId:this.req.userInfo.id
            }).set({
              password:passwordHash,
            })
            console.log("hihi")
            return exits.success(
              {
                code: 200,
                message: 'Cập nhật thành công',
                success: true,
                
              });
          }).catch(()=>{
            console.log("haha")
            return exits.success(
              {
                message: 'Cập nhật thất bại',
                success: false,
              });
          })
      })

  }


};
