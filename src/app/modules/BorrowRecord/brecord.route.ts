import express from "express";
import { brecordController } from "./brecord.controller";

const router = express.Router();

router.post("/borrow", brecordController.borrowBook);
router.post("/return", brecordController.returnBook);
export const brecordRoutes = router;
