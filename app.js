import express from 'express';
import booksRoutes from './routes/book.js'

const app = express();
app.use(express.json());

app.use('/books', booksRoutes);

const port = 8000;

app.listen(port, () => {
    console.log(`Listening on: ${port}`);
});