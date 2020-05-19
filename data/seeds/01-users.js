exports.seed = function (knex) {
  return knex("users")
    .truncate()
    .then(function () {
      return knex("users").insert([
        {
          user: "Todd",
          password: "code",
          department: "Front End",
        },
        {
          user: "Bill",
          password: "code",
          department: "Back End",
        },
      ]);
    });
};
