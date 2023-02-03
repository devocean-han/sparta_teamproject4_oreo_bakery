const { User } = require('../models/index.js');
const Sequelize = require('sequelize');

class UserRepository {
  constructor(UserModel) {
    this.userModel = UserModel;
  }

  // 회원 목록 조회(관리자)
  userlistget = async () => {
    try {
      const userlist = await this.userModel.findAll({
        attributes: ['user_id', 'phone', 'email', 'address'],
      });
      return userlist;
    } catch (error) {
      console.log(error);
      error.name = 'Database Error';
      error.message = '요청을 처리하지 못하였습니다.';
      error.status = 400;
      throw error;
    }
  };

  
  // 회원 정보 조회(개인)
  FindUserInfo = async (user_id) => {
    try {
      const userinfo = await this.userModel.findByPk(user_id);
      return userinfo;
    } catch (err) {
      console.log(err);
      err.name = 'Database Error';
      err.message = '요청을 처리하지 못하였습니다.';
      err.status = 400;
      throw err;
    }
  };

}



module.exports = UserRepository;
