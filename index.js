require("dotenv").config();
const seeder = require("./seeder");

const express = require("express");
const { router } = require("./routing");
const app = express();

app.use(express.json());

seeder.userSeeder();

router(app);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
