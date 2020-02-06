const express = require("express");
const router = express.Router();

// INVENTORY INDEX ROUTE //
router.get("/", (req, res) => {
  res.render("index");
});

// INVENTORY ADD ROUTE //
router.get("/inventory/add", (req, res) => {
  res.render("inventory/add");
});

module.exports = router;
