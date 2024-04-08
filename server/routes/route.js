const express = require("express")
const submitCampaignHandler = require("../submit-campaign-handler")


const router = express.Router()

router.post("/submit-campaign", submitCampaignHandler)


module.exports = router