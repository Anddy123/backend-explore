const { Router } = require('express');
const passport = require('passport');


module.exports = Router()
  .get('/', passport.authenticate('discord'))
  .get('/redirect', passport.authenticate('discord', {
    failureRedirect: '/'
  }), (req, res) => {
    res.send(200);
  });
