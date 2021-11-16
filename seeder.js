const { Users } = require("./user");
const Faker = require("faker");

function userSeeder() {
  for (var i = 1; i < 11; i++) {
    Users.set(i, {
      name: Faker.name.findName(),
      email: Faker.internet.email(),
      password: Faker.internet.password(),
      phoneNumber: Faker.phone.phoneNumber(),
    });
  }
}

module.exports = { userSeeder };
