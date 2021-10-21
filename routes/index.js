const express = require("express");
const router = express.Router();

const jobApi = require("./job.api");
router.use("/jobs", jobApi);

module.exports = router;
