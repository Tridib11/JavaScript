// const shortid=require("shortid")

const { nanoid } = require('nanoid');

const URL = require("../models/url");

async function handleGenerateNewShortURL(req, res) {
    const body = req.body;
    if (!body.URL) return res.status(404).json({ error: "url is required" });

    const shortID = nanoid();

    await URL.create({
        shortId: shortID,
        redirectUrl: body.URL,
        visitHistory: [],
    });

    return res.json({ id: shortID });
}

module.exports = {
    handleGenerateNewShortURL,
};
