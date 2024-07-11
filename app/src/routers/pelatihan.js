const { postPelatihan } = require("../controllers/controllerPelatihan");

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("pelatihan");
});

router.post("/", postPelatihan);

module.exports = router;
