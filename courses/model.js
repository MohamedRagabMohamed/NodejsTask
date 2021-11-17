const { sequelize, DataTypes } = require("../data/database");

const Course = sequelize.define(
  "Course",
  {
    name: {
      type: DataTypes.STRING,
      unique: true,
    },
    teacherName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    code: {
      type: DataTypes.STRING,
      unique: true,
    },
  },
  {
    tableName: "courses",
  }
);
module.exports = { Course };
