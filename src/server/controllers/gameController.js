const {Game} = require('../models/models');
const ApiError = require('../error/apiError');
const uuid = require('uuid');
const path = require('path');

class GameController {
  async addGame(req, res, next) {
    try {
      const {name, info, developerId, yearId, categoryId, ref} = req.body;
      const game = await Game.create({
        name, 
        info, 
        developerId, 
        yearId, 
        categoryId, 
        ref
      });
      return res.json(game);
    } catch(e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getGames(req, res, next) {
    let {developerId, yearId, categoryId} = req.query;
    let games;
    if (!developerId && !yearId && !categoryId) {
      games = await Game.findAll();
      return res.json(games);
    }
    else if (developerId && !yearId && !categoryId) {
      games = await Game.findAll({where:{developerId}});
      return res.json(games);
    }
    else if (!developerId && yearId && !categoryId) {
      games = await Game.findAll({where: {yearId}});
      return res.json(games);
    }
    else if (!developerId && !yearId && categoryId) {
      games = await Game.findAll({where: {categoryId}});
      return res.json(games);
    }
    else {
      next(ApiError.badRequest)
    }

  }

  async getGame(req, res, next) {
    const {id} = req.params;
    const game = await Game.findOne({where: {id}});
    if (!game) {
      return next(ApiError.badRequest('Invalid ID'));
    }
    return res.json(game);
  }

  async deleteGame(req, res, next) {
    const {id} = req.params;
    const game = await Game.findOne({where: {id}});
    if (!game) {
      return next(ApiError.badRequest('Invalid ID'));
    }
    await Game.destroy({where:{id}});
    return res.json({message: `${game.name} was deleted`});
  }
}

module.exports = new GameController();