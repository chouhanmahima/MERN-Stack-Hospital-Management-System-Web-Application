const express = require("express");
const {patientRegistration, login, addNewAdmin, getAllDoctors, getUserDetails, logoutAdmin, logoutPatient, addNewDoctor} = require("../controllers/userController");
const { isAdminAuthenticated, isPatientAuthenticated } = require("../middlewares/auth");

const router = express.Router();

// User Registration
router.post("/patient/register", patientRegistration);

// User Login
router.post("/login", login);

// Admin Registration
router.post("/admin/addnew", isAdminAuthenticated, addNewAdmin);

// Get Doctors Details
router.get("/doctors", getAllDoctors);

// Get Admin Details
router.get("/admin/me", isAdminAuthenticated, getUserDetails)

// Get Patient Details
router.get("/patient/me", isPatientAuthenticated, getUserDetails);


// Get Admin Logout
router.get("/admin/logout", isAdminAuthenticated, logoutAdmin);

// Get Patient Logout
router.get("/patient/logout", isPatientAuthenticated, logoutPatient);

// Add New Doctor
router.post("/doctor/addnew", isAdminAuthenticated, addNewDoctor);

// // Message Send
// router.post("/send", sendMessage);

// // Get All Message
// router.get("/getall", isAdminAuthenticated, getAllMessages);

module.exports = router;