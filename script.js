const section = document.querySelector('#section')
const addBook = document.querySelector('#addBook')

//BOOK ARRAY AND SHOW BOOKS

let myLibrary = [
    {
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        pages: 300,
        isRead: 'yes'
    },
    {
        title: 'The Lord of the Rings',
        author: 'J.R.R. Tolkien',
        pages: 400,
        isRead: 'no'
    }
]

function showBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
        let libro = document.createElement('div');
        libro.classList.add(`data-index=${i}`)
        section.appendChild(libro);
        let title = document.createElement('h2');
        title.textContent = `${myLibrary[i].title}`;
        libro.appendChild(title);
        let author = document.createElement('h3');
        author.textContent = `Author: ${myLibrary[i].author}`;
        libro.appendChild(author);
        let pages = document.createElement('h3');
        pages.textContent = `Pages: ${myLibrary[i].pages}`;
        libro.appendChild(pages);
        let isRead = document.createElement('h3');
        isRead.textContent = `Read: ${myLibrary[i].isRead}`;
        libro.appendChild(isRead);
        let removeBook = document.createElement('button');
        removeBook.classList.add('removeBook');
        removeBook.textContent = `Remove`;
        libro.appendChild(removeBook);
        removeBook.addEventListener('click', () => {
            myLibrary.splice(i, 1);
            section.removeChild(libro)
        })
        let read = document.createElement('button');
        read.classList.add('read');
        read.textContent = `Read?`;
        libro.appendChild(read);
        read.addEventListener('click', () => {
            if (myLibrary[i].isRead === 'yes') {
                myLibrary[i].isRead = 'no'
            } else if (myLibrary[i].isRead === 'no') {
                myLibrary[i].isRead = 'yes'
            }
            removeChildren(section)
            showBooks()
        })
    }
}

showBooks()

//BOOK CONSTRUCTOR

function Book(title, author, pages, read) {
    this.title = title || 'Unknown',
    this.author = author || 'Unknown',
    this.pages = pages || 'Unknown';
    if(read === true) {
        this.isRead = 'yes'
    } else {
        this.isRead = 'no'
    }
}

//REMOVE CHILDREN FUNCTION

function removeChildren(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}

//ADD BOOKS

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read))
}

addBook.addEventListener('click', () => {
    removeChildren(section)
    let form = document.createElement('section');
    section.appendChild(form);
    let h2 = document.createElement('h2');
    h2.textContent = 'Agrega un Libro';
    form.appendChild(h2);

    let title = document.createElement('h3');
    title.textContent = 'Title';
    form.appendChild(title);
    let titleInput = document.createElement('input');
    titleInput.value = 'Name of the Book';
    form.appendChild(titleInput);

    let author = document.createElement('h3');
    author.textContent = 'Author';
    form.appendChild(author);
    let authorInput = document.createElement('input');
    authorInput.value = 'Name of the Author';
    form.appendChild(authorInput);

    let pages = document.createElement('h3');
    pages.textContent = 'Pages';
    form.appendChild(pages);
    let pagesInput = document.createElement('input');
    pagesInput.value = 'Number of Pages';
    form.appendChild(pagesInput);

    let read = document.createElement('h3');
    read.textContent = 'Read';
    form.appendChild(read);
    let readInput = document.createElement('input');
    readInput.type = 'radio';
    readInput.classList.add('isRead')
    form.appendChild(readInput);
    
    let add = document.createElement('button');
    add.textContent = 'Add';
    form.appendChild(add);
    add.addEventListener('click', () => {
        addBookToLibrary(titleInput.value, authorInput.value, pagesInput.value, readInput.checked);
        removeChildren(section);
        showBooks();
    })

    let cancel = document.createElement('button');
    cancel.textContent = 'Cancel';
    form.appendChild(cancel);
    cancel.addEventListener('click', () => {
        removeChildren(section);
        showBooks();
    })
})

