const Router = require('express');
const userRouter = require('./userRouter');
const gameRouter = require('./gameRouter');
const catRouter = require('./categoryRouter');
const yearRouter = require('./yearRouter');
const devRouter = require('./developerRouter');

const router = new Router();

router.use('/user', userRouter);
router.use('/developer', devRouter);
router.use('/category', catRouter);
router.use('/year', yearRouter);
router.use('/game', gameRouter);

module.exports = router;