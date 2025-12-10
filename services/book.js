import fs from 'fs';

function getAll() {
    return JSON.parse(fs.readFileSync('books.json', 'utf-8'));
}

function getById(id) {
    const books = getAll();
    return books.find(b => b.id === id);
}

function create(newBook) {
    const books = getAll();
    const newBooks = [...books, newBook];

    fs.writeFileSync('books.json', JSON.stringify(newBooks));
    return newBook;
}

function editOne(data, id) {
    let books = getAll();
    const modIndex = books.findIndex(b => b.id === id);

    if (modIndex === -1) {
        throw new Error('Livro não encontrado');
    }

    const content = {...books[modIndex], ...data};

    books[modIndex] = content;

    fs.writeFileSync('books.json', JSON.stringify(books));
}

function deleteOne(id) {
    const books = getAll();
    const filteredBooks = books.filter(b => b.id !== id);

    fs.writeFileSync('books.json', JSON.stringify(filteredBooks));
}

export {
    getAll,
    getById,
    create,
    editOne,
    deleteOne
};