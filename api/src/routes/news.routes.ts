import { Router } from "express";
const router = Router();

import * as newsCtrl from "./news.controller";

router.get("/noticias", newsCtrl.getNews);

router.get("/noticias/:id", newsCtrl.getANews);

router.post("/noticias", newsCtrl.createNews);

router.delete("/noticias/:id", newsCtrl.deleteNews);

router.put("/noticias/:id", newsCtrl.updateNews);

export default router;
