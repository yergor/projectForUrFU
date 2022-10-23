const {Category} = require('../models/models');
const ApiError = require('../error/apiError');

class CategoryController {
  async addCategory(req, res) {
    const {name} = req.body;
    const category = await Category.create({name});
    return res.json(category);
  };

  async getCategory(req, res, next) {
    const {id} = req.params;
    const category = await Category.findOne({where: {id}});
    if (!category) {
      return next(ApiError.badRequest('Category ID is invalid'));
    }
    return res.json(category);
  };

  async getCategories(req, res) {
    const years = await Category.findAll();
    return res.json(years);
  };

  async deleteCategory(req, res, next) {
    const {id} = req.params;
    const category = await Category.findOne({where: {id}});
    if (!category) {
      return next(ApiError.badRequest('Category ID is invalid'));
    }
    await Category.destroy({where: {id}});
    return res.json({message: `${category.name} was deleted`});
  };
}

module.exports = new CategoryController();