const router = require('express').Router();

// const { checkToken } = require('./middleware');

const apiVideosRouter = require('./api/videos');
const apiSkillsRouter = require('./api/skills');


router.use('/videos', apiVideosRouter);
router.use('/skills', apiSkillsRouter);


module.exports = router;