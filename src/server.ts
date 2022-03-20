import express from 'express';
import path from 'path';
// Inicializa o express
const app = express();
import { homeRouter } from './routes';

// View Engine - EJS
app.set('views', path.join(__dirname, 'views')); // -> src/views
app.set('view engine', 'ejs');

app.use('/', homeRouter);

// Inicia o servidor do express
app.listen(3002, () => console.log('Server running on port 3000.'));
