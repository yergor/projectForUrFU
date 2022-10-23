const {Developer} = require('../models/models')
const ApiError = require('../error/apiError');

class DeveloperController {
  async addDeveloper(req, res) {
    const {name} = req.body;
    const developer = await Developer.create({name});
    return res.json(developer);
  };

  async getDeveloper(req, res, next) {
    const {id} = req.params;
    const dev = await Developer.findOne({where: {id}});
    if (!dev) {
      return next(ApiError.badRequest('Category ID is invalid'));
    }
    return res.json(dev);
  };

  async getAllDevelopers(req, res) {
    const devs = await Developer.findAll();
    return res.json(devs);
  };

  async deleteDeveloper(req, res) {

  };
}

module.exports = new DeveloperController();