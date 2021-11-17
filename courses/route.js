const {
  GetAllCourses,
  GetCourseByID,
  UpdateCourse,
  StoreCourse,
  DeleteCourse,
} = require("./controller");

function courseRouter(app) {
  app.get("/courses", GetAllCourses);

  app.get("/courses/:id", GetCourseByID);

  app.put("/courses/:id", UpdateCourse);

  app.post("/courses", StoreCourse);

  app.delete("/courses/:id", DeleteCourse);
}

module.exports = { courseRouter };
