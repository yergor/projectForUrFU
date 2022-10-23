const ApiError = require('../error/apiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {User} = require('../models/models');

const generateJWT = (id, email, role) => {
  return jwt.sign({id, email, role}, process.env.SEC_KEY, {expiresIn: '24h'});
}
class UserController {
  //регистрация
  async registration(req, res, next) {
    const {email, password, role} = req.body;
    if (!email || !password){
      return next(ApiError.badRequest('Email or password was not entered'));
    }
    const human = await User.findOne({where: {email}});
    if (human){
      return next(ApiError.badRequest('User exists with this email'));
    }
    //в данном случае пароль будет хэшироваться 5 раз
    const hashPassword = await bcrypt.hash(password, 5);
    const user = await User.create({email, role, password: hashPassword});
    const token = generateJWT(user.id, user.email, user.role);
    return res.json({token});
  }

  //вход
  async login(req, res, next) {
    const {email, password} = req.body;
    const user  = await User.findOne({where: {email}});
    if (!user) {
      return next(ApiError.internal('User was not found'));
    }
    let comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword) {
      return next(ApiError.internal('Invalid password'));
    }
    const token = generateJWT(user.id, user.email, user.role);
    return res.json({token});
  }

  //проверка пользователя
  async checkAuth(req, res, next) {
    const token = generateJWT(req.user.id, req.user.email, req.user.role);
    return res.json({token});

    // const {id} = req.query;
    // console.log(id);
    // if (!id || isNaN(String(parseInt(id, 10)))) {
    //   return next(ApiError.badRequest('User ID is not defined!'));
    // }
    // else return res.json({message: `Got info about user with ID = ${String(parseInt(id, 10))}`});
  }
}

module.exports = new UserController();