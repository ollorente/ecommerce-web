const router = require("express").Router();
const pkg = require("../../package.json");

router.get("/", async (req, res) => {
    res.status(200).json({
        message: "Welcome to eCommerce API Restful!",
        name: pkg.name,
        desciption: pkg.description,
        author: pkg.author,
        version: pkg.version,
    });
});

router.get("*", async (req, res) => {
    res.status(404).json({
        error: true,
        message: "Page not found.",
    });
});

module.exports = router;
