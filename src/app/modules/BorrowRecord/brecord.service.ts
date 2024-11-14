import prisma from "../../../shared/prisma";

const borrowBookFromDB = async (data: any) => {
  const result = await prisma.borrowRecord.create({
    data,
  });
  return result;
};

const returnBookToDB = async (data: any) => {
  const result = await prisma.borrowRecord.update({
    where: {
      borrowId: data.borrowId,
    },
    data: { returnDate: new Date() },
  });
  return result;
};

export const brecordServices = {
  borrowBookFromDB,
  returnBookToDB,
};
