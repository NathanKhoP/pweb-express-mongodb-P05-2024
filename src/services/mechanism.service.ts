import BookService from "./book.service";

class MechanismService {
  async borrowBook(bookId: string) {
    const book = await BookService.getBookById(bookId);

    if (!book) {
      throw new Error("Book not found");
    }

    if (book.qty <= 1) {
      throw new Error("Book cannot be borrowed");
    }

    book.qty--;
    return await BookService.modifyBook(bookId, book);
  }

  async returnBook(bookId: string) {
    const book = await BookService.getBookById(bookId);

    if (!book) {
      throw new Error("Book not found");
    }

    if (book.qty >= book.initialQty) {
      throw new Error("Book cannot be returned");
    }

    book.qty++;
    return await BookService.modifyBook(bookId, book);
  }
}

export default new MechanismService();