let myLibrary = [];

function Book(Title, Author, Pages, Read){
    this.Title = Title;
    this.Author = Author;
    this.Pages = Pages;
    this.Read = Read;
    // this.info = function(){
    //    return `${title} ${author}, ${pages}, ${read}`
    // }
}

function addBookToLibrary(title, author, pages, read){
    let book = new Book(title, author, pages, read);
    myLibrary.push(book)
}

function displayBookOnPage(){
    const books = document.querySelector('.books')
    myLibrary.forEach(displayBook => {
        const bookCard = document.createElement('div')
        bookCard.classList.add('bookCard');
        books.appendChild(bookCard)
        for(let key in displayBook){
            const para = document.createElement('p')
            para.textContent = (`${key}: ${displayBook[key]}`)
            bookCard.appendChild(para)
        }
    })
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", "295 pages", "not read yet");
addBookToLibrary("Captain Underpants", "Dav Pilkey", "100 pages", "Read");
addBookToLibrary("Captain Underpants", "Dav Pilkey", "100 pages", "Read");

displayBookOnPage();