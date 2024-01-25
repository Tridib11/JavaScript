const shortid = require("shortid");
const URL = require("../model/url");
async function handleShortURL(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: `url is required` });
  const shortID = shortid(8);
  await URL.create({
    shortId: shortID,
    redirectURL: body.url,
    visitHistory: [],
  });
  return res.render("home",{
    id:shortID
  })
  // return res.json({ id: shortID });
}

async function handleNewURL(req, res) {
  try {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
      { shortId },
      {
        $push: {
          visitHistory: {
            timestamp: Date.now(),
          },
        },
      }
    );

    if (entry && entry.redirectURL) {
      res.redirect(entry.redirectURL);
    } else {
      // Handle the case where entry is null or entry.redirectUrl is undefined
      res.status(404).end("Not Found");
    }
  } catch (error) {
    console.error("Error handling shortId URL:", error);
    res.status(500).send("Internal Server Error");
  }
}

async function handleGetAnalytics(req, res) {
  

   const shortId=req.params.shortId
   const result=await URL.findOne({shortId})
   return res.json({totalclicks:result.visitHistory.length,analytics:result.visitHistory,})
}

module.exports = {
  handleShortURL,
  handleNewURL,
  handleGetAnalytics,
};
