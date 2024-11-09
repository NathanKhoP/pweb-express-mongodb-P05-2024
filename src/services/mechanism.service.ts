import BookService from "./book.service";

class MechanismService {
  async borrowBook(bookId: string) {
    const book = await BookService.getBookById(bookId);

    if (!book) {
      throw new Error("Book not found");
    }

    if (book.qty <= 0) {
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

    // Periksa apakah qty lebih kecil dari initialQty, jika ya, kembalikan buku
    if (book.qty < book.initialQty) {
      book.qty++;
      return await BookService.modifyBook(bookId, book);
    }

    throw new Error("All copies of this book are already returned");
  }
}

export default new MechanismService();
