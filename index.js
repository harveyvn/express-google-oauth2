const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oath20').Strategy;

const app = express();

passport.use(new GoogleStrategy());

app.get('/', (req, res) => {
  res.send({ hello: 'world' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);
