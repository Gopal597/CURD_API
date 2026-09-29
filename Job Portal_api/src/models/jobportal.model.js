const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    companyName: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },

    salary: {
      type: Number,
      required: true,
    },

    experience: {
      type: String,
      required: true,
    },

    employmentType: {
      type: String,
      enum: ["Full Time", "Part Time", "Contract", "Internship"],
      required: true,
    },
    companyLogo: {
      type: String,
      required: false,
      default: "C:\Users\Gopal Ch. Pandit\Downloads\company logo.jpg",
    },
    skills: {
      type: [String],
      required: true,
    },

    qualification: {
      type: String,
      required: true,
    },

    applicationDeadline: {
      type: Date,
      required: true,
    },

    status: {
      type: String,
      enum: ["Active", "Closed", "Draft"],
      default: "Active",
    },
  },
  {
    timestamps: true,
  },
);

const Jobmodel = mongoose.model("Jobportal", jobSchema);

module.exports = Jobmodel;
