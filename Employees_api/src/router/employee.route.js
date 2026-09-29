const express = require("express");
const Route = express.Router();
const upload = require("../utils/multer");
const EmployeeController = require("../controller/employee.controller");
Route.post(
  "/create/employee",
  upload.fields([
    { name: "profileImage", maxCount: 1 },
    { name: "resume", maxCount: 1 },
  ]),
  EmployeeController.createEmployee,
);
Route.get("/employees", EmployeeController.getemployeedata);
Route.get("/employees/search", EmployeeController.SearchingEmployeedata);
Route.get("/employees/department", EmployeeController.FilterByDepartment);
Route.get("/employees/designation", EmployeeController.FilterBydesignation);
Route.get("/employees/:id", EmployeeController.getsingleemployeedata);
Route.put(
  "/employees/update/:id",
  upload.fields([
    { name: "profileImage", maxCount: 1 },
    { name: "resume", maxCount: 1 },
  ]),
  EmployeeController.Updateemployeeedata,
);
Route.delete("/employees/delete/:id", EmployeeController.deleteEmployeedata);
module.exports = Route;
