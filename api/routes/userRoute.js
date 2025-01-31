const express = require("express");
const {
  updateProfileImage,
  addInterests,
  addEducation,
  getEducation,
  addExperience,
  getExperience,
  addSkill,
  updateIntro,
  updateDetails,
  getUserByID,
} = require("../controllers/userController");

const router = express.Router();

router.get("/:userID", getUserByID)
router.post("/profile-image", updateProfileImage);
router.post("/add-interests", addInterests);
router.post("/add-education", addEducation);
router.get("/get-education/:userID",getEducation);
router.post("/add-experience", addExperience);
router.get("/get-experience/:userID",getExperience);
router.post("/add-skill/:userID",addSkill);
router.put('/update-intro/:userID', updateIntro)
router.put('/update-details/:userID', updateDetails)

module.exports = router;
