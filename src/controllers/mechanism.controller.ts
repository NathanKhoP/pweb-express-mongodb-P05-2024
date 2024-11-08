import MechanismService from "../services/mechanism.service";
import formatResponse from "../utils/formatResponse";
import type { Request, Response } from "express";

class MechanismController {
  async borrowBook(req: Request, res: Response) {
    try {
      const bookId = req.params.id;

      const book = await MechanismService.borrowBook(bookId);
      const response = formatResponse("success", "Book borrowed successfully", {
        currentQty: book.qty,
      });
      res.status(200).json(response);
    } catch (error) {
      if (error.message === "Book not found") {
        const response = formatResponse("failed", error.message);
        res.status(404).json(response);
      } else if (error.message === "Book cannot be borrowed") {
        const response = formatResponse("failed", error.message);
        res.status(400).json(response);
      } else {
        console.log(error);
        const response = formatResponse("error", error.message);
        res.status(500).json(response);
      }
    }
  }

  async returnBook(req: Request, res: Response) {
    try {
      const bookId = req.params.id;

      const book = await MechanismService.returnBook(bookId);
      const response = formatResponse("success", "Book returned successfully", {
        currentQty: book.qty,
      });
      res.status(200).json(response);
    } catch (error) {
      if (error.message === "Book not found") {
        const response = formatResponse("failed", error.message);
        res.status(404).json(response);
      } else if (error.message === "Book cannot be returned") {
        const response = formatResponse("failed", error.message);
        res.status(400).json(response);
      } else {
        console.log(error);
        const response = formatResponse("error", error.message);
        res.status(500).json(response);
      }
    }
  }
}

export default new MechanismController();