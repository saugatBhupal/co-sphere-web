const Project = require("../models/project");
const Skill = require("../models/skill");
const User = require("../models/user");

exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find()
      .populate({
        path: "postedBy",
        select: "_id name profilePicture email phone country city",
      })
      .populate("skills")
      .populate("likes")
      .populate({
        path: "applicants.user",
        select: "_id name profilePicture email phone country city",
      })
      .populate({
        path: "members",
        select: "_id name profilePicture email phone country city",
      });
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

exports.getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id)
      .populate({
        path: "postedBy",
        select: "_id name profilePicture email phone country city",
      })
      .populate("skills")
      .populate("likes")
      .populate({
        path: "applicants.user",
        select: "_id name profilePicture email phone country city",
      })
      .populate({
        path: "members",
        select: "_id name profilePicture email phone country city",
      });
    if (!project) return res.status(404).json({ message: "Project not found" });
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

exports.getProjectsBySkills = async (req, res) => {
  try {
    const { skillNames } = req.body;

    if (!skillNames || !Array.isArray(skillNames) || skillNames.length === 0) {
      return res.status(400).json({ message: "Invalid skillNames array" });
    }

    const normalizedSkillNames = skillNames.map((skill) => skill.toLowerCase());

    const skills = await Skill.find(
      { name: { $in: normalizedSkillNames } },
      "_id"
    );
    const skillIds = skills.map((skill) => skill._id);

    if (skillIds.length === 0) {
      return res.status(404).json({ message: "No matching skills found" });
    }

    const projects = await Project.aggregate([
      {
        $match: { skills: { $in: skillIds } },
      },
      {
        $addFields: {
          matchCount: {
            $size: {
              $setIntersection: ["$skills", skillIds],
            },
          },
        },
      },
      { $sort: { matchCount: -1 } },
    ]);

    const populatedProjects = await Project.populate(projects, [
      {
        path: "postedBy",
        select: "_id name profilePicture email phone country city",
      },
      { path: "skills" },
      { path: "likes", select: "_id" },
      {
        path: "applicants.user",
        select: "_id name profilePicture email phone country city",
      },
      {
        path: "members",
        select: "_id name profilePicture email phone country city",
      },
    ]);

    res.status(200).json(populatedProjects);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

exports.getProjectsByMember = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).populate(
      "appliedProjects"
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const projects = await Project.find({ _id: { $in: user.appliedProjects } })
      .populate({
        path: "postedBy",
        select: "_id name profilePicture email phone country city",
      })
      .populate("skills")
      .populate("likes")
      .populate({
        path: "applicants.user",
        select: "_id name profilePicture email phone country city",
      })
      .populate({
        path: "hired",
        select: "_id name profilePicture email phone country city",
      });

    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

exports.getProjectsByUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).select(
      "createdProjects"
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const projects = await Project.find({ _id: { $in: user.createdProjects } })
      .populate({
        path: "postedBy",
        select: "_id name profilePicture email phone country city",
      })
      .populate("skills")
      .populate("likes")
      .populate({
        path: "applicants.user",
        select: "_id name profilePicture email phone country city",
      })
      .populate({
        path: "members",
        select: "_id name profilePicture email phone country city",
      });

    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

exports.getProjectsByPosition = async (req, res) => {
  try {
    const projects = await Project.find({
      position: req.params.position,
    }).populate("postedBy skills likes applicants.user members");
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

exports.getProjectsByName = async (req, res) => {
  try {
    const searchQuery = req.params.projectName.trim().toLowerCase();
    const searchWords = searchQuery.split(/\s+/);

    const projects = [];
    const projectPromises = searchWords.map((searchWord) =>
      Project.find({ projectName: { $regex: new RegExp(searchWord, "i") } })
    );
    const results = await Promise.all(projectPromises);

    results.forEach((projectList) => projects.push(...projectList));

    const uniqueProjects = [
      ...new Map(
        projects.map((project) => [project._id.toString(), project])
      ).values(),
    ];

    const processedProjects = uniqueProjects
      .map((project) => {
        const projectWords = project.projectName.toLowerCase().split(/\s+/);
        const matchCount = projectWords.filter((word) =>
          searchWords.includes(word)
        ).length;
        const matchPercentage = (matchCount / projectWords.length) * 100;

        return { project, matchPercentage };
      })
      .filter(({ matchPercentage }) => matchPercentage >= 20)
      .sort((a, b) => b.matchPercentage - a.matchPercentage)
      .map(({ project }) => project);

    // Populate project fields
    const populatedProjects = await Project.populate(processedProjects, [
      {
        path: "postedBy",
        select: "_id name profileImage email phone country city fullname",
      },
      { path: "skills" },
      { path: "likes", select: "_id" },
      // {
      //   path: "applicants.user",
      //   select: "_id name profilePicture email phone country city",
      // },
      // {
      //   path: "members",
      //   select: "_id name profilePicture email phone country city",
      // },
    ]);

    res.status(200).json(populatedProjects);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

exports.createProject = async (req, res) => {
  try {
    const {
      projectName,
      position,
      address,
      companyName,
      postedBy,
      skills,
      site,
      status,
      salary,
    } = req.body;

    if (
      !projectName ||
      !position ||
      !address ||
      !postedBy ||
      !skills ||
      skills.length === 0
    ) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const normalizedSkills = skills.map((skill) => skill.toLowerCase());

    const skillIds = await Promise.all(
      normalizedSkills.map(async (skillName) => {
        const skill = await Skill.findOneAndUpdate(
          { name: { $regex: new RegExp(`^${skillName}$`, "i") } },
          { $setOnInsert: { name: skillName } },
          { upsert: true, new: true }
        );
        return skill._id;
      })
    );

    const newProject = new Project({
      projectName,
      position,
      address,
      postedBy,
      companyName,
      skills: skillIds,
      site,
      status,
      salary: salary || { min: 0, max: 0 },
    });

    const savedProject = await newProject.save();

    const user = await User.findByIdAndUpdate(
      postedBy,
      { $push: { createdProjects: savedProject._id } },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(savedProject);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

exports.applyToProject = async (req, res) => {
  try {
    const { userId, projectId } = req.body;

    if (!userId || !projectId) {
      return res
        .status(400)
        .json({ message: "User ID and project ID are required." });
    }

    // Find the project
    const project = await Project.findById(projectId);
    if (!project) {
      return res.status(404).json({ message: "project not found." });
    }

    // Check if user exists
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // Check if the user has already applied
    const alreadyApplied = project.applicants.some(
      (applicant) => applicant.user.toString() === userId
    );
    if (alreadyApplied) {
      return res
        .status(400)
        .json({ message: "User has already applied for this project." });
    }

    // Add user to applicants
    project.applicants.push({ user: userId, status: "Pending" });
    await project.save();

    // Add project to user's applied projects
    user.appliedProjects.push(projectId);
    await user.save();

    res.status(200).json({ message: "Successfully applied to project." });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

exports.getAppliedProjects = async (req, res) => {
  try {
    const { userId } = req.params;

    if (!userId) {
      return res.status(400).json({ message: "User ID is required." });
    }

    const user = await User.findById(userId).populate({
      path: "appliedProjects",
      select:
        "projectName position companyName site applicants postedBy address salary",
      populate: [
        {
          path: "postedBy",
          select: "_id fullname profileImage country city",
        },
        {
          path: "applicants.user",
          select: "_id",
        },
      ],
    });

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    const appliedProjects = user.appliedProjects.map((project) => {
      const application = project.applicants.find(
        (applicant) => applicant.user._id.toString() === userId
      );
      console.log(project);
      return {
        _id: project._id,
        postedBy: project.postedBy,
        projectName: project.projectName,
        companyName: project.companyName,
        status: application.status,
        site: project.site,
        address: project.address,
        salary: project.salary,
      };
    });

    res.status(200).json(appliedProjects);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
