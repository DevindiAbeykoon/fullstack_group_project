// Devindi
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const router = express.Router();
const auth = require("./middleware/auth");

// Model
const User = require("../../models/User");

router.post(
  "/",
  [
    check("email", "Please provide a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
    check("firstName", "First name is required").not().isEmpty(),
    check("lastName", "Last name is required").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: 1, errors: errors.array() });
    }
    // Create a user
    const { email, password, firstName, lastName } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ error: 1, message: "User already exists" });
      }
    } catch (error) {
      return res.status(500).json({ error: 1, message: error.message });
    }

    const salt = await bcrypt.genSalt(10);
    const hash = bcrypt.hashSync(password, salt);

    try {
      await User.create({
        email,
        firstName,
        lastName,
        password: hash,
      }).then((user) =>
        res.status(201).json({
          error: 0,
          message: "User successfully created",
          user,
        })
      );
    } catch (error) {
      res.status(401).json({
        message: "User not successful created",
        error: 1,
        message: error.mesage,
      });
    }
  }
);

// Login
router.post(
  "/auth",
  [
    check("email", "Please provide a valid email").isEmail(),
    check("password", "Password is required").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: 1, errors: errors.array() });
    }
    // Create a user
    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (!user) {
        return res
          .status(400)
          .json({ error: 1, message: "Invalid credentials" });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res
          .status(400)
          .json({ error: 1, message: "Invalid credentials" });
      }

      const payload = {
        user: { id: user.id },
      };

      jwt.sign(payload, "not_becon", { expiresIn: 36000 }, (error, token) => {
        if (error) throw error;
        return res.json({ error: 0, token });
      });

      console.log(payload);
    } catch (error) {
      return res.status(500).json({ error: 1, message: error.message });
    }
  }
);

router.post("/profile", auth, async (req, res) => {
  try {
    let user = await User.findOne({ _id: req.user.id }).select("-password");

    console.log(req.user.id);

    return res.json({ error: 0, user });
  } catch (error) {
    return res.status(500).json({ error: 1, message: error.message });
  }
});

router.put("/", auth, async (req, res) => {
  const { firstName, lastName } = req.body;

  try {
    let user = await User.findOne({ _id: req.user.id });

    if (!user) {
      return res.status(400).json({ error: 1, message: "Invalid credentials" });
    } else {
      let doc = await User.findOneAndUpdate(
        { _id: req.user.id },
        { firstName, lastName }
      );
      res.status(200).json({
        error: 0,
        user: doc,
      });
    }
  } catch (error) {
    return res.status(500).json({ error: 1, message: error.message });
  }
});

router.delete("/", auth, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.user.id);

    res.status(200).json({ error: 0, message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: 1, message: "Something went wrong" });
  }
});

module.exports = router;
