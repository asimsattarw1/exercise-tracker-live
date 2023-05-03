const mongoose = require('mongoose');

/* signup model*/
const activitySchema = mongoose.Schema({
    uid: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    activity: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    duration: {
        type: String,
        require: true
    },
    date: {
        type: String,
        require: true
    }
});
const activityModel = mongoose.model('all_activitie', activitySchema);

module.exports = { activityModel };