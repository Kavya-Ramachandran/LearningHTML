const openformbtn = document.getElementById('open-form-btn');
const books = document.getElementById('book');
const model = document.getElementById('model-content');
const closebtn = document.getElementById('close');
const tablecontent = document.getElementById('tablename');
const title = document.getElementById('title');
const author = document.getElementById('author');
const year = document.getElementById('year');
const bookform = document.getElementById('book-form');

let arr = [];      
let editingbookid=null;
openformbtn.addEventListener('click', () => {
    books.style.display = 'block';
    model.style.display = 'block';
    editingbookid = null;  
    bookform.reset();
});

closebtn.addEventListener('click', () => {
    books.style.display = 'none';
    model.style.display = 'none';
    clearvalidation();
    bookform.reset();
});

function clearvalidation() {
    title.style.backgroundColor = "";
    author.style.backgroundColor = "";
    year.style.backgroundColor = "";
}

window.addEventListener('load', () => {
    const storedBooks = JSON.parse(localStorage.getItem("bookdetails"));
    if (storedBooks && storedBooks.length) {
        arr = storedBooks;
        renderbooks();  
    }
});

function renderbooks() {
    tablecontent.innerHTML = "";  
    arr.forEach(book => {
        addbooktotable(book);
    });
}

function addbooktotable(book) {
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${book.id}</td>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.year}</td>
        <td style="width:fit-content;padding:10px;">
            <button class="edit" style="width:fit-content;">Edit</button>
            <button class="delete" style="width:fit-content;">Delete</button>
        </td>`
    ;
    tablecontent.appendChild(tr);

    tr.querySelector('.delete').addEventListener('click', () => {
        arr = arr.filter(b => b.id !== book.id);
        saveandrender();
    });

    tr.querySelector('.edit').addEventListener('click', () => {
        editingbookid = book.id;
        title.value = book.title;
        author.value = book.author;
        year.value = book.year;
        books.style.display = 'block';
        model.style.display = 'block';
    });
}

function saveandrender() {
    localStorage.setItem('bookdetails', JSON.stringify(arr));
    renderbooks();
}

function validateform() {
    clearvalidation();
    let isValid = true;

    const retitle = /^[A-Z][a-z]{4,}$/;
    const reauthor = /^[A-Z][a-z]{2,}$/;
    const reyear = /^\d{4}$/;

    if (!retitle.test(title.value)) {
        title.style.backgroundColor = "rgba(255,0,0,0.3)";
        isValid = false;
    }

    if (!reauthor.test(author.value)) {
        author.style.backgroundColor = "rgba(255,0,0,0.5)";
        isValid = false;
    }

    const yearnumber = parseInt(year.value);
    const currentyear = new Date().getFullYear();

    if (!reyear.test(year.value) || yearnumber >= currentyear) {
        year.style.backgroundColor = "rgba(255,0,0,0.5)";
        isValid = false;
    }

    return isValid;
}

bookform.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!validateform()) return;

    if (editingbookid !== null) {
        console.log(editingbookid);
        
        const bookindex = arr.findIndex(b => b.id === editingbookid);
        if (bookindex !== -1) {
            arr[bookindex].title = title.value;
            arr[bookindex].author = author.value;
            arr[bookindex].year = year.value;
        }
        editingbookid = null;
    } else {
        const newBook = {
            id: arr.length > 0 ? arr[arr.length - 1].id + 1 : 1,
            title: title.value,
            author: author.value,
            year: year.value
        };
        arr.push(newBook);
    }

    saveandrender();
    bookform.reset();
    books.style.display = 'none';
    model.style.display = 'none';
});
