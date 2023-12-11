const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const { sendMesssage, allMessages } = require("../controllers/messageControllers");

const router = express.Router()

router.route('/').post(protect, sendMesssage)
router.route('/:chatId').get(protect, allMessages)

module.exports = router;