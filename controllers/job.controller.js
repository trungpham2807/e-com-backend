const e = require("express");
const fs = require("fs");

const jobController = {};
jobController.getAllJobs = (req, res, next) => {
  const { page, companyName, title, city, singleSkill } = req.query;
  const requestPage = parseInt(page) || 1;
  const limit = 20;

  try {
    const rawData = fs.readFileSync("data.json", "utf8");
    const data = JSON.parse(rawData);
    const companyList = data.companies;
    let result = data.jobs;

    if (title) {
      result = result.filter(
        (e) => e.title.toLowerCase() === title.toLowerCase()
      );
    }
    if (city) {
      result = result.filter(
        (e) => e.city.toLowerCase() === city.toLowerCase()
      );
    }
    if (companyName) {
      let queryCompany = companyList.find(
        (e) => e.name.toLowerCase() === companyName.toLowerCase()
      );
      result = result.filter((e) => e.companyId === queryCompany.id);
    }

    if (singleSkill) {
      result = result.filter((e) => e.skills.includes(singleSkill));
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
