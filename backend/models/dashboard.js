const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const autopopulate = require('mongoose-autopopulate');

var masterModelObj = {};

const studentSchema = new Schema({
f_name: { type: String, required: true},
l_name: { type: String, required: true},
reg_no: { type: Number, required: true, unique: true },
roll_no: { type: String, required: true, unique: true },
email: { type: String, required: true, unique: true },
dob: { type: Date, required: true },
addr: { type: String, required: true },
ph_no: { type: Number, required: true },
gender: { type: String, required: true },
year: { type: Number, required: true },
dept: { type: String, required: true },
sem: { type: Number, required: true },
active: { type: Boolean, required: true },
createdBy: ObjectId,
updatedBy: ObjectId
}, {
versionKey: false,
timestamps: true
});
studentSchema.plugin(autopopulate);


const staffSchema = new Schema({
    f_name: { type: String, required: true},
    l_name: { type: String, required: true},
    email: { type: String, required: true, unique: true },
    dob: { type: Date, required: true },
    addr: { type: String, required: true },
    ph_no: { type: Number, required: true },
    gender: { type: String, required: true },
    dept: { type: String, required: true },
    active: { type: Boolean, required: true },
    createdBy: ObjectId,
    updatedBy: ObjectId
    }, {
    versionKey: false,
    timestamps: true
    });
    staffSchema.plugin(autopopulate); 

    masterModelObj.staffModel = mongoose.model("Staff", staffSchema, "Staff");
    masterModelObj.studentModel = mongoose.model("Student", studentSchema, "Student");

module.exports = masterModelObj;  
