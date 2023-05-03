const ActivityModel = require('../models/activityModel');
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'asimmm';
const { activityModel } = ActivityModel;

const responseModel = ({ status, message, data }) => {
    return { status: status ?? false, message: message ?? '', data: data ?? {} }
}
 const authMiddleware= (req, res, next) => {
    // try{
        const token= req.headers.authorization;
        console.log(req.headers)
        if(!token){
            res.status(401).send("Error, You are unauthorized")
        }
        else{
        jwt.verify(token,SECRET_KEY,(err)=>{
            if(err){
                res.status(401).send("Error! Invalid Token")
            }
            else{
                next()
            }
        })
        }
    // }
    // catch(err){
    //     if(err){
            
    //         res.status(401).send({Error:err})
    //     }
    // }

}


const addActivity = async (req, res) => {
    const { uid, name, activity, description, duration, date } = req.body;

    try {
        const result = await activityModel.create({
            name: name,
            activity: activity,
            description: description,
            duration: duration,
            date: date,
            uid: uid
        });
        // await result.save();

        res.status(201).json(responseModel({ status: true, data: result, message: "Data added successfully" }));
    } catch (error) {
        res.status(500).json(responseModel({ message: 'something went wrong' }));
    }
}

const updateActivity = async (req, res) => {
    const { uid, id, name, activity, description, duration, date } = req.body;

    try {
        const result = await activityModel.findByIdAndUpdate({ _id: id }, {
            $set: {
                name: name,
                activity: activity,
                description: description,
                duration: duration,
                date: date,
                uid: uid
            }
        });
        await result.save();

        res.status(201).json(responseModel({ status: true, data: result, message: "Data updated successfully" }));
    } catch (error) {
        res.status(500).json(responseModel({ message: 'something went wrong' }));
    }
}

const getActivity = async (req, res) => {
    try {
        if (req.params?.uid) {
            // console.log('req:', req.body.params?.uid);
            const result = await activityModel.find({ uid: req.params.uid });
            res.status(201).json(responseModel({ status: true, data: result, message: "Data retrieved successfully" }));
        }
    } catch (error) {
        res.status(500).json(responseModel({ message: 'something went wrong' }));
    }
}

const deleteActivity = async (req, res) => {
    const { id } = req.body;
    try {
        const result = await activityModel.findByIdAndDelete({ _id: id });
        res.status(201).json(responseModel({ status: true, data: result, message: "Record deleted successfully" }));
    } catch (error) {
        res.status(500).json(responseModel({ message: 'something went wrong' }));
    }
}

module.exports = { addActivity, updateActivity, getActivity, deleteActivity,authMiddleware }