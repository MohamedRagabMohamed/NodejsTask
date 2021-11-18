const { Course } = require("./model");

async function GetCourseByIDService(id) {
  ID = Number(id);
  course = await Course.findByPk(ID);
  //console.log(course);
  return course;
}

async function StoreCourseServiceCheck(Name, Code) {
  course = await Course.findOne({
    where: { name: Name, code: Code },
  });
  return course;
}

async function StoreCourseServiceCreate(Name, TeacherName, Code) {
  course = await Course.create({
    name: Name,
    teacherName: TeacherName,
    code: Code,
  });
  return course;
}
module.exports = {
  GetCourseByIDService,
  StoreCourseServiceCheck,
  StoreCourseServiceCreate,
};
