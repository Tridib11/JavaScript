const express=require("express")
const {handleGenerateNewShortURL,handleShortIdURL}=require("../controllers/url")
const router=express.Router()

router.post("/",handleGenerateNewShortURL)
router.get("/:shortId",handleShortIdURL)

module.exports=router