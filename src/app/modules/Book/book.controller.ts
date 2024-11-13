import { Request, Response } from "express";
import { bookServices } from "./book.service";

const createBook = async (req: Request, res: Response) => {
  try {
    const result = await bookServices.createBookToDB(req.body);
    res.status(200).json({
      success: true,
      message: "admin create successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err?.name || "Something went wrong",
      error: err,
    });
  }
};

export const bookController = {
  createBook,
};
