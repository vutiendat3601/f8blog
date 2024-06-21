import express from 'express';
import { engine } from 'express-handlebars';
import morgan from 'morgan';
import path from 'path';

const app = express();
const port = 3000;
const dirname = path.resolve();

// Handlebars template engine
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', path.join(dirname, 'src/resources/views'));

// Static files
app.use(express.static(path.join(dirname, 'src/public')));

// HTTP Logger
app.use(morgan('combined'));

app.get('/', (req, res) => res.render('home'));

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
