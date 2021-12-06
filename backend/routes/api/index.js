// backend/routes/api/index.js
const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const spellsRouter = require('./spells')

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/spells', spellsRouter)

router.post('/test', (req, res) => {
  res.json({ requestBody: req.body });
});

module.exports = router;
