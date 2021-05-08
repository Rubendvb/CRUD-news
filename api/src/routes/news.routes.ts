import { Router } from "express";
const router = Router();

import { getNews } from "./news.controller";

router.get("/noticias", getNews);

export default router;
