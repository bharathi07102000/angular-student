const bcrypt = require('bcrypt');
const jwt  = require('jsonwebtoken');

var masterModel = require('../models/dashboard');

exports.addStudent = (req, res, next) => {
    req.body.active = true;
    dashboardModel.studentModel.create(req.body, (err, r_student) => {
        if(err) {
            console.log(err);
            res.status(503).send(err);
        } else {
            res.send(r_student);
        }
    });
}

exports.addStaff = (req, res, next) => {
    req.body.active = true;
    dashboardModel.staffModel.create(req.body, (err, r_staff) => {
        if(err) {
            console.log(err);
            res.status(503).send(err);
        } else {
            res.send(r_staff);
        }
    });
}