const express=require("express")
const {handleShortURL,handleNewURL,handleGetAnalytics}=require("../controllers/url")
const router=express.Router()

router.post('/url/new',handleShortURL)
router.get("/:shortId",handleNewURL)
router.get("/analytics/:shortId",handleGetAnalytics)
module.exports=router