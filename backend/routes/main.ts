import express from "express";
import main from "../controller/main";
const router = express.Router();

router.get("/search", main.search);
router.get("/testing", main.testing)
router.post("/signup", main.signUp);


export default router;