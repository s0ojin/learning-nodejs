"use strict";

const view = {
  hello: (req, res) => {
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login");
  },
};

const users = {
  id: ["sujin", "hongdoo"],
  psword: ["1234", "123456"],
};

const process = {
  login: (req, res) => {
    const reqId = req.body.id,
      reqPsword = req.body.psword;

    if (users.id.includes(reqId)) {
      const idx = users.id.indexOf(reqId);
      if (users.psword[idx] === reqPsword) {
        return res.json({
          success: true,
        });
      }
    }

    return res.json({
      success: false,
      msg: "로그인에 실패했습니다.",
    });
  },
};

module.exports = {
  view,
  process,
};
