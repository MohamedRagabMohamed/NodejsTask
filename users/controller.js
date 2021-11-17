const { Users, Schema } = require("./model");

function GetAllUsers(req, res) {
  var users = [...Users];
  res.send({
    data: users,
    message: "Users found successfully",
    error: null,
  });
}
function GetUserByID(req, res) {
  id = Number(req.params.id);
  if (!Users.has(id)) {
    res.send({
      data: "",
      message: "User not found",
      error: null,
    });
    return;
  }
  res.send({
    data: Users.get(id),
    message: "User found successfully",
    error: null,
  });
}

function UpdateUser(req, res) {
  result = Schema.validate(req.body);
  if (result.error != null) {
    res.status(400).send({
      data: "",
      message: "Insert valid user data",
      error: result.error.details[0].message,
    });
    return;
  }
  Users.set(Number(req.params.id), req.body);
  res.send({
    data: Users.get(Number(req.params.id)),
    message: "User updated successfully",
    error: null,
  });
}

function StoreUser(req, res) {
  result = Schema.validate(req.body);
  if (result.error != null) {
    res.status(400).send({
      data: "",
      message: "Insert valid user data",
      error: result.error.details[0].message,
    });
    return;
  }
  id = Users.size + 1;
  if (Users.has(id)) {
    id++;
  }
  Users.set(id, req.body);

  res.send({
    data: Users.get(id),
    message: "User added successfully",
    error: null,
  });
}

function DeleteUser(req, res) {
  id = Number(req.params.id);
  if (!Users.has(id)) {
    res.send({
      data: "",
      message: "User not found",
      error: null,
    });
    return;
  }
  user = Users.get(id);
  Users.delete(id);
  res.send({
    data: user,
    message: "User deleted successfully",
    error: null,
  });
}

module.exports = {
  GetAllUsers,
  GetUserByID,
  UpdateUser,
  StoreUser,
  DeleteUser,
};
