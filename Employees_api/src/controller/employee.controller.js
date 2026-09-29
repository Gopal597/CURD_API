const Employee = require("../models/employee.model");
class EmployeeController {
  async createEmployee(req, res) {
    try {
      const {
        name,
        email,
        phone,
        dateOfBirth,
        gender,
        designation,
        salary,
        department,
        employeeId,
        address,
        status,
      } = req.body;
      if (
        !name ||
        !email ||
        !phone ||
        !dateOfBirth ||
        !gender ||
        !designation ||
        !department ||
        !employeeId ||
        !address ||
        !status
      ) {
        return res.status(400).json({
          success: false,
          message: "All Employee data are requireds",
        });
      }

      const employeedata = new Employee({
        name,
        email,
        phone,
        dateOfBirth,
        gender,
        designation,
        salary,
        department: JSON.parse(department),
        employeeId,
        address: JSON.parse(address),
        status: JSON.parse(status),
      });
      if (req.files?.profileImage) {
        employeedata.profileImage = req.files.profileImage[0].path;
      }

      if (req.files?.resume) {
        employeedata.resume = req.files.resume[0].path;
      }
      const data = await employeedata.save();
      return res.status(202).json({
        success: true,
        message: "Employee data created succesfully",
        data: data,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
  async getemployeedata(req, res) {
    try {
      const getdata = await Employee.find();
      return res.status(201).json({
        success: true,
        message: "fetch Employeedata successfully",
        total: getdata.length,
        data: getdata,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
  async getsingleemployeedata(req, res) {
    try {
      const id = req.params.id;
      const singledata = await Employee.findById(id);
      return res.status(201).json({
        success: true,
        message: "fetch Employeedata successfully",
        data: singledata,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
 async Updateemployeeedata(req, res) {
  try {

    const id = req.params.id;

    const {
      name,
      email,
      phone,
      dateOfBirth,
      gender,
      designation,
      salary,
      department,
      employeeId,
      address,
      status
    } = req.body;

    const updatedata = await Employee.findByIdAndUpdate(
      id,
      {
        name,
        email,
        phone,
        dateOfBirth,
        gender,
        designation,
        salary,
        department: JSON.parse(department),
        employeeId,
        address: JSON.parse(address),
        status: JSON.parse(status)
      },
      {
        new: true
      }
    );

    
    if (req.files?.profileImage) {
      updatedata.profileImage =
        req.files.profileImage[0].path;
    }

  
    if (req.files?.resume) {
      updatedata.resume =
        req.files.resume[0].path;
    }

    await updatedata.save();

    return res.status(200).json({
      success: true,
      message: "Employee data updated successfully",
      data: updatedata
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message
    });

  }
}
 async deleteEmployeedata(req, res) {
    try {
      const id = req.params.id;
      const deletedata = await Employee.findByIdAndDelete(id);
      return res.status(201).json({
        success: true,
        message: "Delete Employee data successfully",
        data: deletedata,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
  async SearchingEmployeedata(req, res) {
    try {
      const { name } = req.query;
      const searchdata = await Employee.find({
        name: { $regex: name, $options: "i" },
      });
      return res.status(201).json({
        success: true,
        message: "Search Employee data successfully",
        data: searchdata,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
  async FilterBydesignation(req, res) {
    try {
      const designation = req.query.designation;
      const filterdata = await Employee.find({
        "designation": { $regex: designation, $options: "i" },
      });
      return res.status(201).json({
        success: true,
        message: "Filter Employee designation successfully",
        data: filterdata,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
   async FilterByDepartment(req, res) {
    try {
      const department = req.query.department;
      const filterdata = await Employee.find({
        "department.name": { $regex: department, $options: "i" },
      });
      return res.status(201).json({
        success: true,
        message: "Filter Employee Department successfully",
        data: filterdata,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
}

module.exports = new EmployeeController();
