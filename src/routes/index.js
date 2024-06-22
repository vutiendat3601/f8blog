import newsRouter from './news.route.js';
import meRouter from './me.route.js';
import coursesRouter from './course.route.js';
import siteRouter from './site.route.js';

function route(app) {
  app.use('/news', newsRouter);
  app.use('/me', meRouter);
  app.use('/courses', coursesRouter);
  app.use('/', siteRouter);
}

export default route;
