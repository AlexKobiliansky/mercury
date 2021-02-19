const {Router} = require('express');
const router = Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const {check, validationResult} = require('express-validator');
const jwt = require('jsonwebtoken');
const config = require('config');

// api/auth/register
router.post(
  '/register',
  [
    // TODO: add normal validation rules according to rules in front-end (forms validation)
    check('username', 'Username is too short').isLength({min: 13}),
    check('password', 'Password is too short').isLength({min: 8})
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      console.log('test')

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'Wrong data during registration!',
          test: 'fuck off'
        })
      }

      const {username, password} = req.body;

      const candidate = await User.findOne({username});

      if (candidate) {
        return res.status(400).json({message: `User with username "${username} already exists"`})
      }

      const hashedPassword = await bcrypt.hash(password, 7);
      const user = new User({username, password: hashedPassword});

      await user.save();

      res.status(201).json({message: 'Registration success'});

    } catch (e) {
      res.status(500).json({message: 'Server Error! Something is wrong! Try again...'})
    }
  });


// api/auth/login
router.post(
  '/login',
  // TODO: add normal validation rules according to rules in front-end (forms validation)
  check('username', 'Username is too short').isLength({min: 13}),
  check('password', 'Password is too short').isLength({min: 8}),
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'Wrong data during entring!'
        })
      }

      const {username, password} = req.body;

      const user = await User.findOne({username});

      if (!user) {
        return res.status(400).json({message: 'User not exsists!'})
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({message: 'Wrong password. Try again!'})
      }

      const token = jwt.sign(
        {userId: user.id},
        config.get('jwtSecret'),
        {expiresIn: '1h'}
      );

      res.json({token, userId: user.id});

    } catch (e) {
      res.status(500).json({message: 'Server Error! Something is wrong! Try again...'})
    }
  });

module.exports = router
