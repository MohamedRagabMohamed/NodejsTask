const { Course } = require("./model");

async function GetAllCourses(req, res) {
  courses = await Course.findAll();
  res.send({
    data: courses,
    message: "Courses found successfully",
    error: null,
  });
}
async function GetCourseByID(req, res) {
  ID = Number(req.params.id);
  course = await Course.findOne({ where: { id: ID } });
  console.log(course);
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

function UpdateCourse(req, res) {
  result = Schema.validate(req.body);
  if (result.error != null) {
    res.status(400).send({
      data: "",
      message: "Insert valid course data",
      error: result.error.details[0].message,
    });
    return;
  }
  Courses.set(Number(req.params.id), req.body);
  res.send({
    data: Courses.get(Number(req.params.id)),
    message: "Course updated successfully",
    error: null,
  });
}

async function StoreCourse(req, res) {
  course = await Course.findOne({
    where: { name: req.body.name, code: req.body.code },
  });
  if (course != null) {
    res.status(400).send({
      data: course,
      message: "Course data added before",
      error: null,
    });
    return;
  }
  course = await Course.create({
    name: req.body.name,
    teacherName: req.body.teacherName,
    code: req.body.code,
  });
  if (course == null) {
    res.status(400).send({
      data: "",
      message: "Insert valid course data",
      error: course,
    });
    return;
  }
  res.send({
    data: course.dataValues,
    message: "Course added successfully",
    error: null,
  });
}

function DeleteCourse(req, res) {
  id = Number(req.params.id);
  if (!Courses.has(id)) {
    res.send({
      data: "",
      message: "Course not found",
      error: null,
    });
    return;
  }
  course = Courses.get(id);
  Courses.delete(id);
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
