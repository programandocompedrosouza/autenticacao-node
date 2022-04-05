import 'reflect-metadata';
import express from 'express';
import path from 'path';
import { AppDataSource } from './data-source';
import authRoutes from './routes/auth';
import pagesRoutes from './routes/pages';

AppDataSource.initialize()
  .then(() => {
    // Inicializa o express
    const app = express();
    const port = process.env.PORT || 3000;

    // View Engine - EJS
    app.set('views', path.join(__dirname, 'views')); // -> src/views
    app.set('view engine', 'ejs');

    // Configure request/response parsing
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    app.use(pagesRoutes);
    app.use(authRoutes);

    // Inicia o servidor do express
    app.listen(port, () => console.log(`Server running on port ${port}.`));
  })
  .catch((error) => {
    throw new Error(error);
  })
