const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const EmployeeSchema = new Schema({
   name: {
      type: String,
      required: true
    },

    email: {
      type: String,
      required: true
    },

    phone: {
      type: String,
      required: true
    },

    dateOfBirth: {
      type: Date
    },

    gender: {
      type: String
    },

    designation: {
      type: String,
      required: true
    },

    salary: {
      type: Number,
      required: true
    },

    department: {
      name: {
        type: String,
        required: true
      },

      code: {
        type: String
      }
    },

    employeeId: {
      type: String,
      required: true,
      unique: true
    },

   profileImage: {
  type: String,
  required: false,
  default:"uploads/gopal.jpg"
},

resume: {
  type: String,
  required: false,
  default:"uploads/gopal-resume.pdf"
  
},

    address: {
      city: String,
      state: String,
      country: String,
      pincode: Number
    },

    status: {
      active: {
        type: Boolean,
        default: true
      },

      remarks: String
    }
  },
{
 timestamps: true
});

const EmployeeModel = mongoose.model("employee", EmployeeSchema);
module.exports = EmployeeModel;
