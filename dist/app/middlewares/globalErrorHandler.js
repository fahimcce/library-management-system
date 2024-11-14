"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globalErrorHandler = (err, req, res, next) => {
    res.status(400).json({
        success: false,
        status: 400,
        message: err.name || "Something went wrong !",
        // error: err,
    });
};
exports.default = globalErrorHandler;
