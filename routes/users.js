const express = require('express');
const router = express.Router();
const UserService = require('../service/users.service');
const userService = new UserService();

/* GET users listing. */
router.get('/', async function (req, res, next) {
  const allBlog = await userService.getAllUser();
  res.send(allBlog);
});

module.exports = router;