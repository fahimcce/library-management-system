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
exports.memberController = void 0;
const catchAsync_1 = require("../../../shared/catchAsync");
const member_service_1 = require("./member.service");
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const createMember = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_service_1.memberServices.createMemberToDB(req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: 201,
        message: "Member created successfully",
        data: result,
    });
}));
const getAllMembers = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_service_1.memberServices.getAllMembersFromDB();
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: 200,
        message: "Members retrieved successfully",
        data: result,
    });
}));
const getSingleMember = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { memberId } = req.params;
    const result = yield member_service_1.memberServices.getSingleMemberFromDB(memberId);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: 200,
        message: "Member retrieved successfully",
        data: result,
    });
}));
const updateMember = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { memberId } = req.params;
    const result = yield member_service_1.memberServices.updateMemberToDb(memberId, req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Member updated successfully",
        data: result,
    });
}));
const deleteMember = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { memberId } = req.params;
    yield member_service_1.memberServices.deleteMemberFromDb(memberId);
    res.status(200).json({
        success: true,
        status: 200,
        message: "Member successfully deleted",
    });
}));
exports.memberController = {
    createMember,
    getAllMembers,
    getSingleMember,
    updateMember,
    deleteMember,
};
