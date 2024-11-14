import { Request, Response } from "express";
import { catchAsync } from "../../../shared/catchAsync";
import { brecordServices } from "./brecord.service";
import sendResponse from "../../../shared/sendResponse";

const borrowBook = catchAsync(async (req: Request, res: Response) => {
  const result = await brecordServices.borrowBookFromDB(req.body);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Book borrowed successfully",
    data: {
      borrowId: result.borrowId,
      bookId: result.bookId,
      memberId: result.memberId,
      borrowDate: result.borrowDate,
    },
  });
});

const returnBook = catchAsync(async (req: Request, res: Response) => {
  // console.log(req.body);
  await brecordServices.returnBookToDB(req.body);
  res.status(200).json({
    success: true,
    status: 200,
    message: "Book returned successfully",
  });
});

export const brecordController = {
  borrowBook,
  returnBook,
};
