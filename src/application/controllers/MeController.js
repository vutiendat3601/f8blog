import mongoose from '../../utils/mongoose.js';
import Course from '../models/Course.js';

class MeController {
  // GET /me/stored/courses
  storedCourses(req, res, next) {
    Promise.all([Course.find({}), Course.countDocumentsDeleted()])
      .then(([courses, deletedCount]) =>
        res.render('me/stored-courses', {
          deletedCount,
          courses: mongoose.mutipleMongooseToObject(courses),
        }),
      )
      .catch(next);
  }

  // GET /me/trash/courses
  trashCourses(req, res, next) {
    Course.findDeleted({})
      .then((courses) =>
        res.render('me/trash-courses', {
          courses: mongoose.mutipleMongooseToObject(courses),
        }),
      )
      .catch(next);
  }
}

export default new MeController();
