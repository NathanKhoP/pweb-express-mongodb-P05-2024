import BookController from '@/controllers/book.controller';
import { authMiddleware } from '@/middleware/auth';
import { Router } from 'express';

const router: Router = Router();

router.get('/', authMiddleware, BookController.getBooks);
router.get('/:id', authMiddleware, BookController.getBookById);
router.post('/', authMiddleware, BookController.addBook);
router.patch('/:id', authMiddleware, BookController.modifyBook);
router.delete('/:id', authMiddleware, BookController.deleteBook);

export default router;