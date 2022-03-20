import express from 'express';
const router = express.Router();

import homeController from '../controllers/homeController';

export const homeRouter = router.get('/', homeController);

export const loginRouter = router.get('/entrar', (req, res) => {
  res.render('login');
});

export const signupRouter = router.get('/cadastro', (req, res) => {
  res.render('signup');
});

export const aboutRouter = router.get('/sobre', (req, res) => {
  res.render('about');
});
