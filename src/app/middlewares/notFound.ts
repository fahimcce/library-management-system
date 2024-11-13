import { NextFunction, Request, Response } from "express";

const notFound = (req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    success: false,
    message: "API Not Found !!!",
    error: {
      path: req.originalUrl,
      message: "Your requested URL is incorrect!!",
    },
  });
};

export default notFound;