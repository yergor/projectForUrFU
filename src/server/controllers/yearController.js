const {Year} = require('../models/models');

class YearController {
  async addYear(req, res) {
    const {value} = req.body;
    const year = await Year.create({value});
    return res.json({year});
  };

  async getYear(req, res) {
    const query = req.query;
    res.json(query);
  };

  async getAllYears(req, res) {
    const years = await Year.findAll();
    return res.json(years);
  };

  async deleteYear(req, res) {

  };
}

module.exports = new YearController();