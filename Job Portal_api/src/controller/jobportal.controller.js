const Jobportal = require("../models/jobportal.model");
class jobController {
  async createjobportal(req, res) {
    // console.log(req.body);
    try {
      const {
        title,
        description,
        companyName,
        location,
        salary,
        experience,
        employmentType,
        skills,
        qualification,
        applicationDeadline,
        status,
      } = req.body;

      if (
        !title ||
        !description ||
        !companyName ||
        !location ||
        !salary ||
        !experience ||
        !employmentType ||
        !skills ||
        !qualification ||
        !applicationDeadline ||
        !status
      ) {
        return res.status(400).json({
          success: false,
          message: "All job data are requireds",
        });
      }
      const jobdata = new Jobportal({
        title,
        description,
        companyName,
        location,
        salary,
        experience,
        employmentType,
        skills,
        qualification,
        applicationDeadline,
        status,
      });
      if (req.file) {
        jobdata.companyLogo = req.file.path;
      }
      const data = await jobdata.save();
      return res.status(201).json({
        success: true,
        message: "job data created successfully",
        data: data,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
  async getJobdata(req, res) {
    try {
      const getdata = await Jobportal.find();
      return res.status(201).json({
        success: true,
        message: "fetch jobdata successfully",
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
  async getsingeJobdata(req, res) {
    try {
      const id = req.params.id;
      const getsingledata = await Jobportal.findById(id);
      return res.status(201).json({
        success: true,
        message: "get single job data successfully",
        data: getsingledata,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
  async Updatejobdata(req, res) {
    try {
      const id = req.params.id;
      const {
        title,
        description,
        companyName,
        location,
        salary,
        experience,
        employmentType,
        skills,
        qualification,
        applicationDeadline,
        status,
      } = req.body;
      const updatedata = await Jobportal.findByIdAndUpdate(
        id,
        {
          title,
          description,
          companyName,
          location,
          salary,
          experience,
          employmentType,
          skills,
          qualification,
          applicationDeadline,
          status,
        },
        { new: true },
      );
      return res.status(201).json({
        success: true,
        message: "Update Job data successfully",
        data: updatedata,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  async SearchByjobdata(req, res) {
    try {
      const { title } = req.query;
      const Searchdata = await Jobportal.find({
        title: { $regex: title, $options: "i" },
      });
      return res.status(201).json({
        success: true,
        message: "get Search job data successfully",
        data: Searchdata,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
  async FilterByLocation(req, res) {
    try {
      const { location } = req.query;
      const filterLocation = await Jobportal.find({
        location: { $regex: location, $options: "i" },
      });
      return res.status(201).json({
        success: true,
        message: "get Filter Job location  data successfully",
        data: filterLocation,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
   async FilterByExperience(req, res) {
    try {
      const { experience } = req.query;
      const filterExperience= await Jobportal.find({
        experience: { $regex: experience, $options: "i" },
      });
      return res.status(201).json({
        success: true,
        message: "get Filter Job experience  data successfully",
        data: filterExperience,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
    async FilterByemploymentType(req, res) {
    try {
      const { employmentType } = req.query;
      const filteremploymentType= await Jobportal.find({
        employmentType: { $regex: employmentType, $options: "i" },
      });
      return res.status(201).json({
        success: true,
        message: "get Filter Job experience  data successfully",
        data: filteremploymentType,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

}

module.exports = new jobController();
