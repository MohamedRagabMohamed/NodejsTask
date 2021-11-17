require("dotenv").config();
require("./data/database");

const express = require("express");
const { userRouter } = require("./Users/route");
const { courseRouter } = require("./Courses/route");
const app = express();

app.use(express.json());

userRouter(app);
courseRouter(app);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
