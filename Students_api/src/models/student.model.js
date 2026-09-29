const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const studentSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is Required"],
    },
    email: {
      type: String,
      required: [true, "Email is Required"],
      unique: true,
    },
    phone: {
      type: Number,
      required: [true, "PhoneNumber is Required"],
      unique: true,
    },
    dateofbirth: {
      type: Date,
      required: [true, "dateofbirth is Required"],
    },
     image: {
      type: String,
      required: false,
      default: "C:\Users\Gopaclassical-Tshirt.png",
    },
    gender: {
      type: String,
      required: [true, "Gender is Required"],
    },
    course: {
      type: String,
      requirerd: [true, "Course is required"],
    },

    department: {
      type: String,
      requirerd: [true, "Department is required"],
    },

    registrationNumber: {
      type: Number,
      requirerd: [true, "registrationNumber is required"],
    },
    address: {
      type: String,
      requirerd: [true, "Cityr is required"],
    },
    status: {
      type: Boolean,
      default: true,
    },
      createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  },
);

const studentmodel = mongoose.model("student", studentSchema);
module.exports = studentmodel;
