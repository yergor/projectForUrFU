const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const User = sequelize.define('user', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  email: {type: DataTypes.STRING, unique: true},
  password: {type: DataTypes.STRING},
  role: {type: DataTypes.STRING, defaultValue: "USER"},
});

const Game = sequelize.define('game', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, unique: true},
  info: {type: DataTypes.STRING, unique: true},
  ref: {type: DataTypes.STRING, unique: true}
});

const Category = sequelize.define('category', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, unique: true},
});

const Developer = sequelize.define('developer', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, unique: true},
});

const Year = sequelize.define('year', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  value: {type: DataTypes.INTEGER, unique: true}
});

const DeveloperCategory = sequelize.define('developer_category', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
});

const DeveloperYear = sequelize.define('developer_year', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
});

const CategoryYear = sequelize.define('category_year', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
});

User.hasMany(Game);
Game.belongsTo(User);

Developer.hasMany(Game);
Game.belongsTo(Developer);

Category.hasMany(Game);
Game.belongsTo(Category);

Year.hasMany(Game);
Game.belongsTo(Year);

Developer.belongsToMany(Category, {through: DeveloperCategory});
Category.belongsToMany(Developer, {through: DeveloperCategory});

Developer.belongsToMany(Year, {through: DeveloperYear});
Year.belongsToMany(Developer, {through: DeveloperYear});

Category.belongsToMany(Year, {through: CategoryYear});
Year.belongsToMany(Category, {through: CategoryYear});

module.exports = {
  User,
  Developer,
  Category,
  Game,
  Year,
  DeveloperCategory,
  DeveloperYear,
  CategoryYear
}