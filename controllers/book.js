import { getAll, getById, create, editOne, deleteOne} from '../services/book.js'

function getBooks(req, res) {
    try {
        const allBooks = getAll();
        res.send(allBooks); // Retorna 200 por padrão   
    } catch (e) {
        res.status(500).send('Erro desconhecido');
    }
};

function getBookById(req, res) {
    try {
        const bookFound = getById(req.params.id);
        res.send(bookFound); // Retorna 200 por padrão   
    } catch (e) {
        res.status(500).send('Erro desconhecido');
    }
};

function postBook(req, res) {
    try {
        create(req.body);
        res.status(201).send("Livro adicionado com sucesso");
    } catch (e) {
        res.status(500).send('Erro desconhecido');
    }
}

function editBook(req, res) {
    try {
        editOne(req.body, req.params.id);
        res.status(200).send('Livro editado com sucesso');
    } catch (e) {
        res.status(500).send('Erro desconhecido');
    }
}

function deleteBook(req, res) {
    try {
        deleteOne(req.params.id);
        res.send('Livro excluído com sucesso.');
    } catch (e) {
        res.status(500).send('Erro desconhecido.');
    }
}

export {
    getBooks,
    getBookById,
    postBook,
    editBook,
    deleteBook
}