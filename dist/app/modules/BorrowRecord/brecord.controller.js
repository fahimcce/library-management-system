"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.brecordController = void 0;
const catchAsync_1 = require("../../../shared/catchAsync");
const brecord_service_1 = require("./brecord.service");
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const borrowBook = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield brecord_service_1.brecordServices.borrowBookFromDB(req.body);
    (0, sendResponse_1.default)(res, {
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
}));
const returnBook = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log(req.body);
    yield brecord_service_1.brecordServices.returnBookToDB(req.body);
    res.status(200).json({
        success: true,
        status: 200,
        message: "Book returned successfully",
    });
}));
exports.brecordController = {
    borrowBook,
    returnBook,
};
