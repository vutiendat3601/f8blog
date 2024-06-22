import express from 'express';
import { engine } from 'express-handlebars';
import methodOverride from 'method-override';
import morgan from 'morgan';
import path from 'path';
import mongo from './config/mongodb-config.js';
import route from './routes/index.js';

// Connect to MongoDB
mongo.connect();

// Initialize Express
const app = express();
const port = 3000;
const dirname = path.resolve();

// Template engine
app.engine(
  '.hbs',
  engine({
    extname: '.hbs',
    helpers: {
      sum: (a, b) => a + b,
    },
  }),
);
app.set('view engine', '.hbs');
app.set('views', path.join(dirname, 'src', 'resources', 'views'));

// Static files
app.use(express.static(path.join(dirname, 'src/public')));

// Change HTTP Method to other methods
app.use(methodOverride('_method'));

// Parse JSON, URL-encoded, form data, ...
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// HTTP Logger
app.use(morgan('combined'));

// Routes init
route(app);

// Listen to port
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
