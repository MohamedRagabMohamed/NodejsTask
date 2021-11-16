const { Users } = require("./user");
const { validate } = require("./helper");

function GetAllUsers(req, res) {
  var users = [...Users];
  res.send({
    data: users,
    message: "Users found seccessfully",
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
    message: "User found seccessfully",
    error: null,
  });
}

function UpdateUser(req, res) {
  if (!validate(req.body)) {
    res.send({
      data: "",
      message: "Insert valid user data",
      error: null,
    });
    return;
  }
  Users.set(Number(req.params.id), req.body);
  res.send({
    data: Users.get(Number(req.params.id)),
    message: "User updated seccessfully",
    error: null,
  });
}

function StoreUser(req, res) {
  if (!validate(req.body)) {
    res.send({
      data: "",
      message: "Insert valid user data",
      error: null,
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
    message: "User added seccessfully",
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
    message: "User deleted seccessfully",
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
