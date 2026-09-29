const Student = require("../models/student.model");
class studentController {
  async createStudent(req, res) {
    // console.log(req.body);
    try {
      const {
        name,
        email,
        phone,
        dateofbirth,
        gender,
        course,
        department,
        registrationNumber,
        address,
        status,
      } = req.body;

      if (
        !name ||
        !email ||
        !phone ||
        !dateofbirth ||
        !gender ||
        !course ||
        !department ||
        !registrationNumber ||
        !address ||
        !status
      ) {
        return res.status(400).json({
          success: false,
          message: "All Student data are requireds",
        });
      }
      const studentdata = new Student({
        name,
        email,
        phone,
        dateofbirth,
        gender,
        course,
        department,
        registrationNumber,
        address,
        status,
      });
      if (req.file) {
        studentdata.image = req.file.path;
      }
      const data = await studentdata.save();
      return res.status(201).json({
        success: true,
        message: "Student created successfully",
        data: data,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
  async getstudentdata(req, res) {
    try {
      const getdata = await Student.find();
      return res.status(201).json({
        success: true,
        message: "fetch studentdata successfully",
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
  async getsinglestudentdata(req, res) {
    try {
      const id = req.params.id;
      const getsingledata = await Student.findById(id);
      return res.status(201).json({
        success: true,
        message: "get single student data successfully",
        data: getsingledata,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
  async Updatestudentdata(req, res) {
    try {
      const id = req.params.id;
      const {
        name,
        email,
        phone,
        dateofbirth,
        gender,
        course,
        department,
        registrationNumber,
        address,
        status,
      } = req.body;
      const updatedata = await Student.findByIdAndUpdate(
        id,
        {
          name,
          email,
          phone,
          dateofbirth,
          gender,
          course,
          department,
          registrationNumber,
          address,
          status,
        },
        { new: true },
      );
      return res.status(201).json({
        success: true,
        message: "Update student data successfully",
        data: updatedata,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
  async deletestudentdata(req, res) {
    try {
      const id = req.params.id;
      const deletedata = await Student.findByIdAndDelete(id);
      return res.status(201).json({
        success: true,
        message: "Delete student data successfully",
        data: deletedata,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
  async Searchingstudentdata(req, res) {
    try {
      const { name } = req.query;
      const searchdata = await Student.find({
        name: { $regex: name, $options: "i" },
      });
      return res.status(201).json({
        success: true,
        message: "Search student data successfully",
        data: searchdata,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
  async FilterByCourse(req, res) {
    try {
      const course = req.query.course;
      const filterdata = await Student.find({
        course: { $regex: course, $options: "i" },
      });
      return res.status(201).json({
        success: true,
        message: "Filter student Course successfully",
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
      const filterdata = await Student.find({
        department: { $regex: department, $options: "i" },
      });
      return res.status(201).json({
        success: true,
        message: "Filter student Department successfully",
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
module.exports = new studentController();
