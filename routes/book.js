import { Router } from "express";
import { getBooks, getBookById, postBook, editBook, deleteBook } from "../controllers/book.js";

const router = Router();

router.get('/', getBooks);

router.get('/:id', getBookById);

router.post('/new', postBook);

router.patch('/edit/:id', editBook);

// router.put('/', (req, res) => {
//     res.send('PUT');
// })

router.delete('/:id', deleteBook);

export default router;