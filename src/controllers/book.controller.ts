import { Request, Response } from 'express';
import Book from '../models/book.model';

// Get All Books
export const getAllBooks = async (req: Request, res: Response) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving books', error });
  }
};

// Get Book by ID
export const getBookById = async (req: Request, res: Response) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving book', error });
  }
};

// Add New Book
export const addNewBook = async (req: Request, res: Response) => {
  try {
    const {
      title,
      author,
      publishedDate,
      publisher,
      description,
      coverImage,
      rating,
      tags,
      initialQty,
      qty
    } = req.body;

    const newBook = new Book({
      title,
      author,
      publishedDate,
      publisher,
      description,
      coverImage,
      rating,
      tags,
      initialQty,
      qty
    });

    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ message: 'Error adding book', error });
  }
};
