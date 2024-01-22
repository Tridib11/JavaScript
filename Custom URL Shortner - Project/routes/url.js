const express=require("express")
const {handleGenerateNewShortURL,handleShortIdURL,handlesAnalytics}=require("../controllers/url")
const router=express.Router()

router.post("/url",handleGenerateNewShortURL)
router.get("/url/:shortId",handleShortIdURL)
router.get("/analytics/:shortId",handlesAnalytics)

module.exports=router