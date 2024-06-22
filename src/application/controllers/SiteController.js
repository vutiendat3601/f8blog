import Course from '../models/Course.js';
import mongoose from '../../utils/mongoose.js';

class SiteController {
  // GET /
  index(req, res, next) {
    Course.find({})
      .then((courses) => {
        res.render('home', {
          courses: mongoose.mutipleMongooseToObject(courses),
        });
      })
      .catch(next);
  }

  // GET /search
  search(req, res) {
    res.render('search');
  }
}
export default new SiteController();
