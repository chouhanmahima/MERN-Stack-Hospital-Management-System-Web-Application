const userModel = require("../models/userSchema");
const catchAsyncError = require("./catchAsyncError");
const { ErrorHandler } = require("./error");
const jwt = require("jsonwebtoken");

// Admin Authentication
const isAdminAuthenticated = catchAsyncError(async (req, res, next) => {
    const token = req.cookies.adminToken;
    if(!token){
        return next(new ErrorHandler("Dashboard User Not Authenticated!", 400));
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = await userModel.findById(decoded.id);
    // authorization
    if(req.user.role !== "Admin"){
        return next(new ErrorHandler(`${req.user.role} not authorized for this resources!`, 403));
    }
    next();
});

// Patient Authentication
const isPatientAuthenticated = catchAsyncError(async(req, res, next) => {

    const token = req.cookies.patientToken;
    if(!token){
        return next(new ErrorHandler("Patient Not Authenticated", 400));
    }

    const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = await userModel.findById(decode.id);
    // authorization
    if(req.user.role !== "Patient"){
        return next(new ErrorHandler(`${req.user.role} Not Authorized for this Resourse !`, 403));
    }
    next();
});

// container of function to export
const authContainer = {
    isAdminAuthenticated,
    isPatientAuthenticated
}

module.exports = authContainer;