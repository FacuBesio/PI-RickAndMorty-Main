const users = require("../utils/users");

function login(req, res) {
  const { email, password } = req.query;
  let access = false;

  users.forEach((user) => {
    if (user.email === email && user.password === password) {
      return (access = true);
    }
  });

  res.status(200).json({ access });
}

module.exports = login;
