require("dotenv").config()
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;


passport.use(new GoogleStrategy({
    clientID:     process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: `http://localhost:${process.env.APP_PORT}/auth/google/callback`,
    passReqToCallback   : true
  },
  function(request ,accessToken, refreshToken, profile, done) {
    // Por ahora, simplemente pasamos el perfil del usuario.
    return done(null, profile);
  }
));

// Serializar y deserializar usuario para la sesión.
passport.serializeUser((user, done) => {
    done(null, user);
  });
  
  passport.deserializeUser((user, done) => {
    done(null, user);
  });