const express = require("express");
const {
  getAllProjects,
  getProjectById,
  getProjectsBySkills,
  getProjectsByUser,
  getProjectsByPosition,
  getProjectsByName,
  createProject,
  getProjectsByMember,
  applyToProject,
  getAppliedProjects,
  getHiringProjectsByUser,
  getActiveProjectsByUser,
  getCompletedProjectsByUser,
  hireUser,
  rejectUser,
  finishHiring,
  createTask,
  getTask,
  completeTask,
  completeProject,
  getExploreProjects,
} = require("../controllers/projectController");

const router = express.Router();

router.get("", getAllProjects);
router.get("/:id", getProjectById);
router.post("/search/skills", getProjectsBySkills);
router.get("/user/:userId", getProjectsByUser);
router.get("/member/:userId", getProjectsByMember);
router.get("/position/:position", getProjectsByPosition);
router.get("/name/:projectName", getProjectsByName);
router.post("/apply", applyToProject);
router.get("/applied-projects/:userId", getAppliedProjects);
router.get("/hiring/:userId", getHiringProjectsByUser);
router.get("/active/:userId", getActiveProjectsByUser);
router.get("/completed/:userId", getCompletedProjectsByUser);
router.post("/hire", hireUser);
router.post("/reject", rejectUser);
router.post("/finish-hiring/:projectId", finishHiring);
router.post("", createProject);
router.post("/:projectId/task", createTask);
router.get("/:projectId/task", getTask);
router.post("/:projectId/task/:taskId", completeTask);
router.post("/:projectId/complete", completeProject);
router.post("/:projectId/complete", completeProject);
router.get("/explore/:userId", getExploreProjects);
module.exports = router;
