import express from "express";
import main from "../controller/main";
const router = express.Router();

router.get("/search", main.search);

export default router;