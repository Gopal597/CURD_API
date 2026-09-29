const express = require("express");
const Route = express.Router();
const upload = require("../utils/multer");
const jobController = require("../controller/jobportal.controller");
Route.post("/create/jobportal",upload.single("companyLogo"),jobController.createjobportal)
Route.get("/jobportal/search", jobController.SearchByjobdata);
Route.get("/jobportal", jobController.getJobdata);
Route.get("/jobportal/location", jobController.FilterByLocation);
Route.get("/jobportal/experience", jobController.FilterByExperience);
Route.get("/jobportal/employmentType", jobController.FilterByemploymentType);
Route.get("/jobportal/:id", jobController.getsingeJobdata);
Route.put("/jobportal/update/:id",  upload.single("companyLogo"),jobController.Updatejobdata);
module.exports=Route