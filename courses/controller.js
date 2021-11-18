const { Course } = require("./model");
const {
  GetCourseByIDService,
  StoreCourseServiceCheck,
  StoreCourseServiceCreate,
} = require("./service");

async function GetAllCourses(req, res) {
  courses = await Course.findAll();
  res.send({
    data: courses,
    message: "Courses found successfully",
    error: null,
  });
}
async function GetCourseByID(req, res) {
  course = await GetCourseByIDService(req.params.id);
  if (course === null) {
    res.send({
      data: "",
      message: "Course not found",
      error: null,
    });
    return;
  }
  res.send({
    data: course,
    message: "Course found successfully",
    error: null,
  });
}

async function UpdateCourse(req, res) {
  course = await GetCourseByIDService(req.params.id);
  if (course === null) {
    res.send({
      data: "",
      message: "Course not found",
      error: null,
    });
    return;
  }
  try {
    await Course.update(
      {
        name: req.body.name,
        teacherName: req.body.teacherName,
        code: req.body.code,
      },
      { where: { id: req.params.id } }
    );
    res.send({
      data: await GetCourseByIDService(req.params.id),
      message: "Course updated successfully",
      error: null,
    });
  } catch (error) {
    res.send({
      data: req.body,
      message: "Course cannot updated",
      error: error.errors[0].message,
    });
  }
}

async function StoreCourse(req, res) {
  course = await StoreCourseServiceCheck(req.body.name, req.body.code);
  if (course !== null) {
    res.status(400).send({
      data: course,
      message: "Course data added before",
      error: null,
    });
    return;
  }
  course = await StoreCourseServiceCreate(
    req.body.name,
    req.body.teacherName,
    req.body.code
  ).catch((err) => {
    res.status(400).send({
      data: "",
      message: "Insert valid course data",
      error: err.errors[0].message,
    });
    return;
  });
  res.send({
    data: course.dataValues,
    message: "Course added successfully",
    error: null,
  });
}

async function DeleteCourse(req, res) {
  course = await GetCourseByIDService(req.params.id);
  if (course === null) {
    res.send({
      data: "",
      message: "Course not found",
      error: null,
    });
    return;
  }
  await Course.destroy({ where: { id: Number(req.params.id) } }).catch(
    (error) => {
      res.send({
        data: "",
        message: "Course cannot deleted",
        error: error.errors[0].message,
      });
    }
  );
  res.send({
    data: course,
    message: "Course deleted successfully",
    error: null,
  });
}

module.exports = {
  GetAllCourses,
  GetCourseByID,
  UpdateCourse,
  StoreCourse,
  DeleteCourse,
};
