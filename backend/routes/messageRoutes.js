const express = require("express");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router()

// router.route('/').post(protect, sendMesssages)
// router.route('/:chatId').get(protect, sendMesssages)

module.exports = router;