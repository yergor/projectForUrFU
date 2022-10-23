const Router = require('express');
const gameController = require('../controllers/gameController');

const router = new Router();

router.post('/', gameController.addGame);
router.get('/', gameController.getGames);
router.get('/:id', gameController.getGame);
router.delete('/:id', gameController.deleteGame);

module.exports = router;