// const shortid=require("shortid")

const { nanoid } = require('nanoid');

const URL = require("../models/url");

async function handleGenerateNewShortURL(req, res) {
    const body = req.body;
    if (!body.URL) return res.status(404).json({ error: "url is required" });

    const shortID = nanoid(5);

    await URL.create({
        shortId: shortID,
        redirectUrl: body.URL,
        visitHistory: [],
    });

    return res.json({ id: shortID });
}
async function handleShortIdURL(req,res){
    const shortId=req.params.shortId
    const entry=await URL.findOneAndUpdate({
        shortId,
    },{
        $push:{
            visitHistory:{
                timestamp:Date.now(),
            },
        }
    })
    res.redirect(entry.redirectUrl)

}

async function handlesAnalytics(req,res){
    const shortId=req.params.shortId
    const result=await URL.findOne({shortId})
    return res.json({totalclicks:result.visitHistory.length})
}

module.exports = {
    handleGenerateNewShortURL,
    handleShortIdURL,
    handlesAnalytics,
};
