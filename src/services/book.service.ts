import type { Book_ } from "@/models/book.model";
import Book from "@/models/book.model";
import { isValidObjectId } from "mongoose";

export class BookService {
  async addBook(bookData: Book_): Promise<Book_> {
    const book = new Book(bookData);
    return await book.save();
  }

  async getBooks(): Promise<Book_[]> {
    return await Book.find();
  }

  async getBookById(id: string | null): Promise<Book_> {
    if (!isValidObjectId(id)) {
      throw new Error("Invalid ID... - ${id}");
    }
    const book = await Book.findById(id);
    if (!book) {
      throw new Error("Book not found... - ${id}");
    }
    return book;
  }

  async modifyBook(id: string, bookData: Book_): Promise<Book_> {
    try {
      if (!isValidObjectId(id)) {
        throw new Error("Invalid ID... - ${id}");
      }
      const newBook = await Book.findByIdAndUpdate(id, bookData, {
        new: true,
      });
      if (!newBook) {
        throw new Error("Book not found... - ${id}");
      }
      return newBook;
    } 
    catch (error) {
      throw new Error(error);
    }
  }

  async deleteBook(id: string): Promise<Book_> {
    try {
      if (!isValidObjectId(id)) {
        throw new Error("Invalid ID... - ${id}");
      }
      const delBook = await Book.findByIdAndDelete(id);
      if (!delBook) {
        throw new Error("Book not found... - ${id}");
      }
      return delBook;
    }
    catch (error) {
      throw new Error(error);
    }
  }
}

export default new BookService();