const express=require("express")
const {handleGenerateNewShortURL,handleShortIdURL,handlesAnalytics,handleHomePage}=require("../controllers/url")
const router=express.Router()

router.post("/url/new",handleGenerateNewShortURL)
router.get("/url/:shortId",handleShortIdURL)
router.get("/url/analytics/:shortId",handlesAnalytics)
// router.get("/home",handleHomePage)

module.exports=router