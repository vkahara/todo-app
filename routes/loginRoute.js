const express = require("express");
const loginController = require("../controllers/loginController");
const router = express.Router();

router.get('/login', (req, res) => res.render("login"));
router.post('/auth', loginController.login);

router.get('/register', (req, res) => res.render("register"));
router.post('/register', loginController.register);

module.exports = router;
