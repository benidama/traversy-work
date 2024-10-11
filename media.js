class book{
    constructor(title,author,year){
        this.title = title;
        this.author = author;
        this.year = year;
    }
}

class UI{
    static displayBooks() {
        const storedBooks = [
            {
                title: 'REDO',
                author: 'James',
                year: 2022
            },
            {
                title: 'REDO',
                author: 'Joanes',
                year: 2022
            }
        ]; 
        const books = storedBooks;
        books.forEach((book) =>UI.addBookToList(book));
        
    }
    static addBookToList(book){
        const list = document.querySelector('#book-list');
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.year}</td>
        <td><a href="#" class="btn-danger delete ">x</a></td>
        `;
        list.appendChild(row);
    }
    static clearFields(){
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#year').value = '';
    }
  
}

document.addEventListener('DOMContentLoaded',UI.displayBooks);

document.querySelector('book-form').addEventListener('submit', (e) =>{
    e.preventDefault();
const title = document.querySelector('#title').value;
const author = document.querySelector('#author').value;
const year = document.querySelector('#year').value;

const book = new book(title, author, year);
UI.addBookToList(book);
UI.clearFields(); 
//console.log(book);
});
