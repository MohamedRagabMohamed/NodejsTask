const { User } = require("./model");

async function GetAllUsers(req, res) {
  var users = await User.findAll();
  res.send({
    data: users,
    message: "Users found successfully",
    error: null,
  });
}
async function GetUserByID(req, res) {
  id = Number(req.params.id);
  user = await User.findByPk(id);
  if (user === null) {
    res.send({
      data: "",
      message: "User not found",
      error: null,
    });
    return;
  }
  res.send({
    data: user,
    message: "User found successfully",
    error: null,
  });
}

async function UpdateUser(req, res) {
  id = Number(req.params.id);
  user = await User.findByPk(id);
  if (user === null) {
    res.send({
      data: "",
      message: "User not found",
      error: null,
    });
    return;
  }
  await User.update(
    {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      phoneNumber: req.body.phoneNumber,
    },
    { where: { id: req.params.id } }
  ).catch((error) => {
    res.send({
      data: req.body,
      message: "User cannot updated",
      error: error.errors[0].message,
    });
  });
  user = await User.findByPk(id);
  res.send({
    data: user,
    message: "User updated successfully",
    error: null,
  });
}

async function StoreUser(req, res) {
  user = await User.findOne({ where: { email: req.body.email } });
  if (user !== null) {
    res.status(400).send({
      data: user,
      message: "User data added before",
      error: null,
    });
    return;
  }
  user = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    phoneNumber: req.body.phoneNumber,
  }).catch((error) => {
    res.send({
      data: "",
      message: "User cannot added",
      error: error.errors[0].message,
    });
  });
  res.send({
    data: user,
    message: "User added successfully",
    error: null,
  });
}

async function DeleteUser(req, res) {
  id = Number(req.params.id);
  user = await User.findByPk(id);
  if (user === null) {
    res.send({
      data: "",
      message: "User not found",
      error: null,
    });
    return;
  }
  await User.destroy({ where: { id: Number(req.params.id) } }).catch(
    (error) => {
      res.send({
        data: "",
        message: "User cannot deleted",
        error: error.errors[0].message,
      });
    }
  );
  res.send({
    data: user,
    message: "user deleted successfully",
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
