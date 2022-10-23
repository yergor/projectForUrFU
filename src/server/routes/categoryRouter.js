const Router = require('express');
const categoryController = require('../controllers/categoryController');

const router = new Router();

router.post('/', categoryController.addCategory);
router.get('/', categoryController.getCategories);
router.get('/:id', categoryController.getCategory);
router.delete('/:id', categoryController.deleteCategory);

module.exports = router;