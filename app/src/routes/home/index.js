"use strict";

const express = require("express");
const router = express.Router();
const ctrl = require("./home.ctrl");

router.get("/", ctrl.view.hello);
router.get("/login", ctrl.view.login);
router.get("/register", ctrl.view.register);
router.post("/login", ctrl.process.login);

module.exports = router;
