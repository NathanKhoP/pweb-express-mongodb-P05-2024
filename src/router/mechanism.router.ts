import MechanismController from "../controllers/mechanism.controller";
import { authMiddleware } from "../middleware/auth";
import { Router } from "express";

const router: Router = Router();

router.post("/borrow/:id", authMiddleware, MechanismController.borrowBook);
router.post("/return/:id", authMiddleware, MechanismController.returnBook);

export default router;