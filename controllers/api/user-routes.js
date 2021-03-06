const router = require("express").Router();
const { User, List } = require("../../models");
const env = require("dotenv").config();
const nodemailer = require("nodemailer");
const transporterEmail = process.env.TRANSPORTER_EMAIL;
const transporterPassword = process.env.TRANSPORTER_PASSWORD;
//transporter: sender information (uses it to authenticate)

// CREATE new user
router.post("/", async (req, res) => {
  try {
    const dbUserData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    const dbListData = await List.create({
      user_id: dbUserData.id,
    });

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.user_id = dbUserData.id;

      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
  //used for the sign up message
  const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: transporterEmail,
      pass: transporterPassword,
    },
  });
  const options = {
    from: transporterEmail,
    to: req.body.email,
    subject: "DidYouSee account created",
    text: "Welcome to DidYouSee! Search for movies to add to your list!",
  };

  transporter.sendMail(options, function (err, info) {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Sent:" + info.response);
  });
});

// Login
router.post("/login", async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (!dbUserData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.user_id = dbUserData.id;
      res
        .status(200)
        .json({ user: dbUserData, message: "You are now logged in!" });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
