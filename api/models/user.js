const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
      trim: true,
    },
    profileImage: {
      type: String,
      default: null,
    },
    email: {
      type: String,
      default: null,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      default: null,
      trim: true,
    },
    dob: {
      type: Date,
      required: true,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    country: {
      type: String,
      required: true,
      trim: true,
    },
    province: {
      type: String,
      default: null,
      trim: true,
    },
    city: {
      type: String,
      required: true,
      trim: true,
    },
    verificationOtp: {
      type: String,
      required: false,
      default: null,
    },
    verificationOtpExpire: {
      type: Date,
      required: false,
      default: null,
    },
    resetPasswordOtp: {
      type: String,
      required: false,
      default: null,
    },
    resetPasswordOtpExpire: {
      type: Date,
      required: false,
      default: null,
    },
    about: {
      type: String,
      required: false,
      default: null,
    },
    overview: {
      type: String,
      required: false,
      default: null,
    },
    interests: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Skill",
      },
    ],
    skills: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Skill",
      },
    ],
    education: [
      {
        organization: {
          type: String,
          required: true,
        },
        degree: {
          type: String,
          required: true,
        },
        from: {
          type: Date,
          required: true,
        },
        to: {
          type: Date,
          required: true,
        },
      },
    ],
    recentSearches: [
      {
        search: {
          name: {
            type: String,
            required: true,
          },
        },
      },
      { timestamps: true },
    ],
    experience: [
      {
        position: {
          type: String,
          required: true,
        },
        organization: {
          type: String,
          required: true,
        },
        status: {
          type: String,
          required: true,
        },
        from: {
          type: Date,
          required: true,
        },
        to: {
          type: Date,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

userSchema.methods.getSignedJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("User", userSchema);
