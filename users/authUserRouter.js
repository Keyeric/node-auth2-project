const express = require("express");

const func = require("./userModel");

const router = express.Router();

router.get("/", (req, res) => {
  const jwt = req.jwt;
  const dept = jwt.department;

  console.log("JSON WEB TOKEN\n", jwt);
  console.log("JSON DEPT\n", dept);
  if (dept !== "Admin") {
    func
      .find()
      .then((users) => {
        const role = users.filter((depart) => depart.department == dept);
        console.log("filtered", role);
        res.status(200).json(role);
      })
      .catch((error) => {
        console.log(error);
        res
          .status(500)
          .json({ error: "Server error retrieving the list of users." });
      });
  } else {
    func.find().then((users) => {
      console.log("administrator", users);
      res.status(200).json(users);
    });
  }
});

module.exports = router;
