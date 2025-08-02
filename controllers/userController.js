const users = require('../data/users.json');
const fs = require('fs');

exports.register = (req, res) => {
  const { username, password } = req.body;
  if (users[username]) return res.status(400).json({ msg: "User exists" });
  users[username] = { password };
  fs.writeFileSync('./data/users.json', JSON.stringify(users, null, 2));
  res.json({ msg: "Registered successfully" });
};

exports.login = (req, res) => {
  const { username, password } = req.body;
  if (!users[username] || users[username].password !== password) {
    return res.status(401).json({ msg: "Invalid credentials" });
  }
  res.json({ msg: "Login successful" });
};