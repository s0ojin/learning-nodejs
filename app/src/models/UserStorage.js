"use strict";

class UserStorage {
  static #users = {
    id: ["sujin", "hongdoo"],
    psword: ["1234", "123456"],
    name: ["수진", "홍두"],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }
}

module.exports = UserStorage;
