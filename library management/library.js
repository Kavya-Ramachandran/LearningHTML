const openformbtn = document.getElementById('open-form-btn');
const booklist = document.getElementById('book-list');
const books = document.getElementById('book');
const model = document.getElementById('model-content');
const closebtn = document.getElementById('close');

openformbtn.addEventListener('click', () => {
    books.style.display = 'block';
});

closebtn.addEventListener('click', () => {
    books.style.display = 'none';
});

const tablecontent = document.getElementById('tablename');
const title = document.getElementById('title');
const author = document.getElementById('author');
const year = document.getElementById('year');

let arr = [];
function displaybook(newBook) {
    const tr = document.createElement('tr');
    tr.innerHTML =
     `<td>${arr.length}</td>
      <td>${newBook.title}</td>
      <td>${newBook.author}</td>
      <td>${newBook.year}</td>
       <td style="display:flex;gap:20px;">
          <button id="edit">Edit</button>
          <button id="delete">Delete</button>
        </td>`;
    tablecontent.append(tr);
}

const bookform = document.getElementById('book-form');

bookform.addEventListener('submit', function (e) {
    e.preventDefault();


    const newBook = { id: arr.length + 1, title: title.value, author: author.value, year: year.value };
    if (title.value && author.value && year.value) {
        arr.push(newBook);
        displaybook(newBook);
        bookform.reset();
        model.style.display = 'none';
    }

});   