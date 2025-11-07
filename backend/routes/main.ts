import express from "express";
import main from "../controller/main";
import { requireAuth } from "../middleware/middleware";
const router = express.Router();

router.get("/search", main.search);
router.get("/testing", main.testing)
router.post("/signup", main.signUp);
router.post("/signin", main.signIn);

router.get("/profile", requireAuth, main.getProfile)

export default router;