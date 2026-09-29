const express = require("express");
const Route = express.Router();
const upload = require("../utils/multer");
const studentController = require("../controller/student.controller");
Route.post(
  "/create/student",
  upload.single("image"),
  studentController.createStudent,
);
Route.get("/students", studentController.getstudentdata);
Route.get("/students/search", studentController.Searchingstudentdata);
Route.get("/students/course", studentController.FilterByCourse);
Route.get("/students/department", studentController.FilterByDepartment);
Route.get("/students/:id", studentController.getsinglestudentdata);
Route.put("/students/update/:id", studentController.Updatestudentdata);
Route.delete("/students/delete/:id", studentController.deletestudentdata);
module.exports = Route;
