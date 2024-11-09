import { Router } from 'express';
import { getAllBooks, getBookById, addNewBook } from '../controllers/book.controller';

const router = Router();

router.get('/books', getAllBooks);
router.get('/books/:id', getBookById);
router.post('/books', addNewBook);

export default router;
