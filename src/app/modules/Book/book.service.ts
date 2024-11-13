import { Book } from "@prisma/client";
import prisma from "../../../shared/prisma";

const createBookToDB = async (data: any) => {
  const result = await prisma.book.create({
    data,
  });
  return result;
};

const getAllBooksFromDB = async () => {
  const result = await prisma.book.findMany({});
  return result;
};

const getSingleBookFromDB = async (id: string): Promise<Book | null> => {
  const result = await prisma.book.findUnique({
    where: {
      bookId: id,
    },
  });
  return result;
};

const updateBookToDb = async (
  id: string,
  data: Partial<Book>
): Promise<Book> => {
  await prisma.book.findUniqueOrThrow({
    where: {
      bookId: id,
    },
  });

  const result = await prisma.book.update({
    where: { bookId: id },
    data,
  });
  return result;
};

const deleteBookFromDb = async (id: string): Promise<Book | null> => {
  const result = await prisma.book.delete({
    where: { bookId: id },
  });
  return result;
};

export const bookServices = {
  createBookToDB,
  getAllBooksFromDB,
  getSingleBookFromDB,
  updateBookToDb,
  deleteBookFromDb,
};
