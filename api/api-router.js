const router = require('express').Router();

const authRouter = require('./auth/auth-router.js');
const usersRouter = require('./users/users-router.js');

router.use('/', authRouter);
router.use('/users', usersRouter);

module.exports = router;