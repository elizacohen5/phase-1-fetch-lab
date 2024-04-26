function fetchBooks() {
  fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => { 
      return resp.json()
    })
    .then((data) => console.log(data));
}

function renderBooks(books) {
  // const books = fetchBooks();
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});

let gotBooks = fetchBooks();
renderBooks(gotBooks);

