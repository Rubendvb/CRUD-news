import { Router } from "express";
const router = Router();

router.get("/noticias", (req, res) => res.json("getting news"));

export default router;
