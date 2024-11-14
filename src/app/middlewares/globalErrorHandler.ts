import { NextFunction, Request, Response } from "express";

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(400).json({
    success: false,
    status: 400,
    message: err.name || "Something went wrong !",
    // error: err,
  });
};

export default globalErrorHandler;
