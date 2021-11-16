const {
  GetAllUsers,
  GetUserByID,
  UpdateUser,
  StoreUser,
  DeleteUser,
} = require("./userController");

function router(app) {
  app.get("/users", GetAllUsers);

  app.get("/users/:id", GetUserByID);

  app.put("/users/:id", UpdateUser);

  app.post("/users", StoreUser);

  app.delete("/users/:id", DeleteUser);
}

module.exports = { router };
