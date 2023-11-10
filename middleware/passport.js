const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const db = require('../db').db

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
}

module.exports = function(passport) {
    passport.use(new JwtStrategy(opts, async function(payload, done) {
        try {
            const user = await db.users.findByPk(payload.userId,{
                attributes: ['login', 'id']
            });

            if(user) {
                done(null, user)
            } else {
                done(null, false)
            }
        } catch(e) {
            console.log(e)
        }

    }));
}