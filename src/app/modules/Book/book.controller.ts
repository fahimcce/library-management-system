import { Request, Response } from "express";
import { bookServices } from "./book.service";
import sendResponse from "../../../shared/sendResponse";
import { catchAsync } from "../../../shared/catchAsync";

const createBook = catchAsync(async (req: Request, res: Response) => {
  const result = await bookServices.createBookToDB(req.body);
  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: "Book created successfully",
    data: result,
  });
});

const getAllBooks = catchAsync(async (req: Request, res: Response) => {
  const result = await bookServices.getAllBooksFromDB();
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Books retrieved successfully",
    data: result,
  });
});

const getSingleBook = catchAsync(async (req: Request, res: Response) => {
  const { bookId } = req.params;
  const result = await bookServices.getSingleBookFromDB(bookId);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Book retrieved successfully",
    data: result,
  });
});

const updateBook = catchAsync(async (req: Request, res: Response) => {
  const { bookId } = req.params;

  const result = await bookServices.updateBookToDb(bookId, req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Book updated successfully",
    data: result,
  });
});

const deleteBook = catchAsync(async (req: Request, res: Response) => {
  const { bookId } = req.params;
  await bookServices.deleteBookFromDb(bookId);
  res.status(200).json({
    success: true,
    status: 200,
    message: "Book successfully deleted",
  });
});

export const bookController = {
  createBook,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBook,
};
