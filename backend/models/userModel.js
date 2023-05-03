const mongoose = require('mongoose');

/* signup model*/
const SignupSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
});
const signupModel = mongoose.model('signup', SignupSchema);

module.exports = { signupModel };