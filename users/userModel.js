const db = require("../data/dbConfig");

module.exports = {
  find,
  findBy,
  findByID,
  register,
};

function find() {
  return db("users");
}

function findBy(user) {
  return db("users").where({ user });
}

function findByID(id) {
  return db("users").where({ id }).first();
}

function register(person) {
  return db("users")
    .insert(person, "*")
    .then(([newUser]) => {
      return newUser;
    });
}
