import { Router } from "express";

const router = Router();

router.get('/entrar', (req, res) => {
  res.render('login');
});

router.get('/cadastro', (req, res) => {
  res.render('signup');
});

export default router;
