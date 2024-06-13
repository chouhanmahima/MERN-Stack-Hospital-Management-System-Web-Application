const express = require("express");
const {sendMessage, getAllMessages} = require("../controllers/messageController");
const {isAdminAuthenticated} = require("../middlewares/auth")

const router = express.Router();

// Message Send
router.post("/send", sendMessage);

// Admin will see and Get All Messages
router.get("/getall", isAdminAuthenticated, getAllMessages);

module.exports = router;