const express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
const ActivityController = require('../controllers/activityController');
mongoose.set("strictQuery", false);
mongoose.connect('mongodb://127.0.0.1:27017/exercise_tracker');


var conn = mongoose.connection;

conn.on('connected', function () {
    console.log('Connected successfully');
})

conn.on('disconnected', function () {
    console.log('Disonnected successfully');
});

conn.on('error', function () {
    console.log('Error detected');
})

router.post('/add', ActivityController.authMiddleware, ActivityController.addActivity);
router.get('/get/:uid', ActivityController.authMiddleware, ActivityController.getActivity);
router.post('/delete', ActivityController.authMiddleware, ActivityController.deleteActivity);
router.post('/update', ActivityController.authMiddleware, ActivityController.updateActivity);

module.exports = router;