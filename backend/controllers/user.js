const bcrypt = require('bcrypt');
const jwt  = require('jsonwebtoken');

var User = require('../models/user');

exports.userLogin = (req, res, next) => {
    let fetchedUser;
    User.findOne({ email: req.body.email })
    .then(usr => {
        if (!usr) {
          return res.status(401).json({
            message: "Auth failed"
          });
        }
        fetchedUser = usr;
        return bcrypt.compare(req.body.password, usr.password);
    })
    .then(result => {
      if (!result) {
        return res.status(401).json({
          message: "Auth failed"
        });
      }
      const token = jwt.sign({userId: fetchedUser._id }, process.env.JWT_KEY, { expiresIn: "1h" });
      res.status(200).json({
        token: token,
        expiresIn: 3600,
        userId: fetchedUser._id
      });
    })
    .catch(err => {
        console.log(err);
        return res.send(err);
    });
  }
 
  exports.userLogout = (req, res, next) => {
    let fetchedUser;
    User.findOne({ email: req.body.email })
    .then(usr => {
      if(!usr){
        console.log("logout failure");
      }
      else{
        jwtr.destroy(token)
        console.log("logout success");
      }
        fetchedUser = usr;
        return bcrypt.compare(req.body.password, usr.password);
    })
    .catch(err => {
      console.log(err);
      return res.send(err);
  });
  }