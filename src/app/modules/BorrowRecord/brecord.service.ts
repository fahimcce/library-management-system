import prisma from "../../../shared/prisma";

const borrowBookFromDB = async (data: any) => {
  const result = await prisma.borrowRecord.create({
    data,
  });
  return result;
};

export const brecordServices = {
  borrowBookFromDB,
};
