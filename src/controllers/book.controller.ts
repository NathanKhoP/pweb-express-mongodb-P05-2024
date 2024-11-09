import BookService from "@/services/book.service";
import formatResponse from "@/utils/formatResponse";
import { RequestHandler } from 'express';

class BookController {
  public getBooks: RequestHandler = async (req, res, next) => {
    try {
      const books = await BookService.getBooks();
      res.status(200).json(formatResponse("success", "Books retrieved successfully", books));
    } catch (error: any) {
      next(error);
    }
  };

  public getBookById: RequestHandler = async (req, res, next) => {
    try {
      const book = await BookService.getBookById(req.params.id);
      res.status(200).json(formatResponse("success", "Book retrieved successfully", book));
    } catch (error: any) {
      next(error);
    }
  };

  public addBook: RequestHandler = async (req, res, next) => {
    try {
      const book = await BookService.addBook(req.body);
      res.status(201).json(formatResponse("success", "Book added successfully", book));
    } catch (error: any) {
      next(error);
    }
  };

  public modifyBook: RequestHandler = async (req, res, next) => {
    try {
      const book = await BookService.modifyBook(req.params.id, req.body);
      res.status(200).json(formatResponse("success", "Book updated successfully", book));
    } catch (error: any) {
      next(error);
    }
  };

  public deleteBook: RequestHandler = async (req, res, next) => {
    try {
      const book = await BookService.deleteBook(req.params.id);
      res.status(200).json(formatResponse("success", "Book deleted successfully", book));
    } catch (error: any) {
      next(error);
    }
  };
}

export default new BookController();