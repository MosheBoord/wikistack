const express = require("express");
const router = express.Router();
const { Page } = require("../models/index.js");
const addPage = require("../views/addPage.js");

router.get("/", async (req, res) => {
    await res.send("sending all pages");
});

router.get("/add", (req, res) => {
    res.send(addPage());
});

router.post("/", async (req, res, next) => {
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", req.body);
    const page = new Page({
        title: req.body.title,
        content: req.body.content,
    });

    try {
        await page.save();
        res.redirect("/");
    } catch (error) {
        next(error);
    }
});

// router.get("/", async (req, res) => {
//     await res.send("Hello");
// });

module.exports = router;
