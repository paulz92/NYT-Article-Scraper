const router = require("express").Router();
const articleRoutes = require("./articles");

// Book routes
router.use("/books", articleRoutes);

module.exports = router;
