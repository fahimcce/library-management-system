import { Member } from "@prisma/client";
import prisma from "../../../shared/prisma";

const createMemberToDB = async (data: any) => {
  const result = await prisma.member.create({
    data,
  });
  return result;
};

const getAllMembersFromDB = async () => {
  const result = await prisma.member.findMany({});
  return result;
};

const getSingleMemberFromDB = async (id: string): Promise<Member | null> => {
  const result = await prisma.member.findUnique({
    where: {
      memberId: id,
    },
  });
  return result;
};

const updateMemberToDb = async (
  id: string,
  data: Partial<Member>
): Promise<Member> => {
  await prisma.member.findUniqueOrThrow({
    where: {
      memberId: id,
    },
  });

  const result = await prisma.member.update({
    where: { memberId: id },
    data,
  });
  return result;
};

const deleteMemberFromDb = async (id: string): Promise<Member | null> => {
  const result = await prisma.member.delete({
    where: { memberId: id },
  });
  return result;
};

export const memberServices = {
  getSingleMemberFromDB,
  getAllMembersFromDB,
  createMemberToDB,
  deleteMemberFromDb,
  updateMemberToDb,
};
