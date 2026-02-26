const router = require("express").Router();
const aiController = require("../controllers/aiController")

router.post("/",aiController.getAISuggestions);

module.exports = router;