const express = require("express");
const {
  getAllJobs,
  getJobById,
  getJobsBySkills,
  getJobsByUser,
  getJobsByPosition,
  getJobsByName,
  createJob,
} = require("../controllers/jobController");
const router = express.Router();

router.get("", getAllJobs);
router.get("/:id", getJobById);
router.get("/skills", getJobsBySkills);
router.get("/user/:userId", getJobsByUser);
router.get("/position/:position", getJobsByPosition);
router.get("/:jobName", getJobsByName);
router.post("/", createJob);
module.exports = router;
