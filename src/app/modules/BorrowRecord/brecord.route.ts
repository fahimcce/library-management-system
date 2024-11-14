import express from "express";
import { brecordController } from "./brecord.controller";

const router = express.Router();

router.post("/", brecordController.borrowBook);
export const brecordRoutes = router;
