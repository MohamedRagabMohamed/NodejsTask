function validate(data) {
  if (
    data.name == undefined ||
    data.password == undefined ||
    data.phoneNumber == undefined ||
    data.email == undefined
  ) {
    return false;
  }
  if (
    data.name == "" ||
    !data.email.includes("@") ||
    data.password.length < 7 ||
    data.phoneNumber.length < 8
  ) {
    return false;
  } else {
    return true;
  }
}

module.exports = { validate };
