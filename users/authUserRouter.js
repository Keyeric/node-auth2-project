const express = require("express");

const func = require("./userModel");

const router = express.Router();

router.get("/", (req, res) => {
  const jwt = req.jwt;
  const dept = jwt.department;

  console.log("JSON WEB TOKEN\n", jwt);
  console.log("JSON DEPT\n", dept);

  func
    .find()
    // .findBy(dept)
    .then((users) => {
      // if (users.department == dept) {
      console.log("users", users);
      res.status(200).json(users);
      // } else {
      // console.log("test", users);
      // }
    })
    .catch((error) => {
      console.log(error);
      res
        .status(500)
        .json({ error: "Server error retrieving the list of users." });
    });
});

module.exports = router;
