const Router = require('express');
const developerController = require('../controllers/developerController');

const router = new Router();

router.post('/', developerController.addDeveloper);
router.get('/:id', developerController.getDeveloper);
router.get('/', developerController.getAllDevelopers);
router.delete('/:id', developerController.deleteDeveloper);

module.exports = router;