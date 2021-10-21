const jobController = {};
jobController.getAllJobs = (req, res, next) => {
  console.log("getAllJob");
  return res.status(200).send("haha");
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
