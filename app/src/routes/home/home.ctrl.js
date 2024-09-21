"use strict";

const UserStorage = require("../../models/UserStorage");

const view = {
  hello: (req, res) => {
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login");
  },
};

const process = {
  login: (req, res) => {
    const reqId = req.body.id,
      reqPsword = req.body.psword;

    const users = UserStorage.getUsers("id", "psword");

    const response = {};
    if (users.id.includes(reqId)) {
      const idx = users.id.indexOf(reqId);
      if (users.psword[idx] === reqPsword) {
        response.success = true;
        return res.json(response);
      }
    }

    response.success = false;
    response.msg = "로그인에 실패했습니다.";
    return res.json(response);
  },
};

module.exports = {
  view,
  process,
};
