const e = require("express");
const fs = require("fs");

const jobController = {};
jobController.getAllJobs = (req, res, next) => {
  console.log("getAllJob");
  console.log("getall query", req.query);
  const { page, company, title, city, skills } = req.query;
  const requestPage = parseInt(page) || 1;
  const limit = 20;
  console.log(title);
  try {
    let rawData = fs.readFileSync("data.json", "utf8");
    let data = JSON.parse(rawData);

    let result = data.jobs;

    if (title) {
      result = result.filter((e) => e.title === title);
    }
    if (city) {
      result = result.filter((e) => e.city === city);
    }

    result = result.slice((requestPage - 1) * limit, requestPage * limit);

    return res.status(200).send({ result });
  } catch (error) {
    next(error);
  }
};
jobController.createJob = (req, res, next) => {
  console.log("createJob");
  return res.status(200).send("haha");
};
jobController.deleteJobById = (req, res, next) => {
  console.log("deleteJob");
  return res.status(200).send("haha");
};
jobController.updateJobById = (req, res, next) => {
  console.log("updateJob");
  return res.status(200).send("haha");
};

module.exports = jobController;
//to check the last item from pagination
// console.log(
//   `${result[result.length - 1].id}, ${data.jobs[page * limit - 1].id}`,
//   result[result.length - 1].id === data.jobs[page * limit - 1].id
// );

//check if we able to filter
// console.log(result.filter((e) => e.title !== title));
