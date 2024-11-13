import express from "express";
import { bookController } from "./book.controller";
import { validateRequest } from "../../middlewares/validateRequest";

const router = express.Router();

router.post("/", bookController.createBook);
router.get("/", bookController.getAllBooks);
router.get("/:bookId", bookController.getSingleBook);
router.put("/:bookId", bookController.updateBook);
router.delete("/:bookId", bookController.deleteBook);

export const bookRoutes = router;
