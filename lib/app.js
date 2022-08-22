const discord = require('./controllers/discord');
const express = require('express');
const passport = require('passport');
const session = require('express-session');
const discordStrat = require('./utils/discord-strat');

const app = express();

// Built in middleware
app.use(express.json());
app.use(session({
  secret: process.env.SESSION_SECRET,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
  },
  saveUninitialized: false
}));


// Passport middleware
app.use(passport.initialize());
app.use(passport.session());
// App routes
app.use('/auth', discord);

// Error handling & 404 middleware for when
// a request doesn't match any app routes
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
