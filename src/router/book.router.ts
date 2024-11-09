// src/router/book.route.ts
import { Router } from 'express';
import { getAllBooks, getBookById, addNewBook } from '../controllers/book.controller';

const router = Router();

router.get('/', getAllBooks);      // Untuk mendapatkan semua buku
router.get('/:id', getBookById);   // Untuk mendapatkan buku berdasarkan ID
router.post('/', addNewBook);      // Untuk menambahkan buku baru

export default router;
