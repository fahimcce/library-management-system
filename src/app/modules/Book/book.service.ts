import prisma from "../../../shared/prisma";

const createBookToDB = async (data: any) => {
  const result = await prisma.book.create({
    data,
  });
  return result;
};

export const bookServices = {
  createBookToDB,
};
