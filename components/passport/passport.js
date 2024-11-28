const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const {User} = require('../../library/models');

module.exports = (passport) => {
    passport.use(
        new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
          
            try {
                console.log("test1: ",email);
                console.log("testq2: ",await User.findOne({ where: { email } }));
                const user = await User.findOne({ where: { email } });
                console.log("test2: ",user);
                if (!user) {
                    return done(null, false, { message: 'User not found.' });
                }


                const isPasswordValid = await bcrypt.compare(password, user.password);
                if (!isPasswordValid) {
                    return done(null, false, { message: 'Invalid credentials.' });
                }

                return done(null, user);
            } catch (error) {
                return done(error);
            }
        })
    );

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser(async (id, done) => {
        try {
            const user = await User.findByPk(id,{
                attributes: ['id', 'fullName', 'email'] 
            });
            done(null, user);
        } catch (error) {
            done(error, null);
        }
    });
};
