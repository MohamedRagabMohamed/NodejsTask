const { Users } = require("./user");

function router(app) {
  app.get("/users", (req, res) => {
    res.send({
      data: Users,
      message: "Users found seccessfully",
      error: null,
    });
  });

  app.get("/users/:id", (req, res) => {
    res.send({
      data: Users[req.params.id],
      message: "User found seccessfully",
      error: null,
    });
  });

  app.put("/users/:id", (req, res) => {
    console.log(req.body);
    res.send({
      data: Users[req.params.id],
      message: "User updated seccessfully",
      error: null,
    });
  });
}

module.exports = { router };
