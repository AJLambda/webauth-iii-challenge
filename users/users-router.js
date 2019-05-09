const router = require("express").Router();

const Users = require("./users-model.js");
const restricted = require("../auth/restricted-middleware.js");

// only users with user.department === department3 can see list of all users
router.get("/", restricted, checkRole("department3"), (req, res) => {
  Users.find()
    .then(users => {
      res.json({ users, decodedToken: req.decodedToken });
    })
    .catch(err => res.send(err));
});

function checkRole(role) {
  return function(req, res, next) {
    if (
      req.decodedToken &&
      req.decodedToken.roles &&
      req.decodedToken.roles.includes(role)
    ) {
      next();
    } else {
      res.status(403).json({ message: "can't touch this!" });
    }
  };
}

module.exports = router;
