import { Request, Response } from "express";
import { catchAsync } from "../../../shared/catchAsync";
import { memberServices } from "./member.service";
import sendResponse from "../../../shared/sendResponse";

const createMember = catchAsync(async (req: Request, res: Response) => {
  const result = await memberServices.createMemberToDB(req.body);
  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: "Member created successfully",
    data: result,
  });
});

const getAllMembers = catchAsync(async (req: Request, res: Response) => {
  const result = await memberServices.getAllMembersFromDB();
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Members retrieved successfully",
    data: result,
  });
});

const getSingleMember = catchAsync(async (req: Request, res: Response) => {
  const { memberId } = req.params;
  const result = await memberServices.getSingleMemberFromDB(memberId);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Member retrieved successfully",
    data: result,
  });
});

const updateMember = catchAsync(async (req: Request, res: Response) => {
  const { memberId } = req.params;

  const result = await memberServices.updateMemberToDb(memberId, req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Member updated successfully",
    data: result,
  });
});

const deleteMember = catchAsync(async (req: Request, res: Response) => {
  const { memberId } = req.params;
  await memberServices.deleteMemberFromDb(memberId);
  res.status(200).json({
    success: true,
    status: 200,
    message: "Member successfully deleted",
  });
});

export const memberController = {
  createMember,
  getAllMembers,
  getSingleMember,
  updateMember,
  deleteMember,
};
