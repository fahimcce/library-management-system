import express from "express";
import { bookController } from "./book.controller";
import { validateRequest } from "../../middlewares/validateRequest";

const router = express.Router();

router.post("/", bookController.createBook);

export const bookRoutes = router;
