function fetchBooks() {
  let fetchedBooks = fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => { 
      return resp.json()
    })
    .then((books) => {
      renderBooks(books);
    })
    return fetchedBooks;
}

// async function fetchBooks() {
//  const response = await fetch("https://anapioficeandfire.com/api/books");
//  const fetchedBooks = await response.json();
//  return fetchedBooks;
// }

function renderBooks(books) {
  // const books = fetchBooks();
  const main = document.querySelector('main');
  console.log(books)
  books.forEach((book) => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});

// renderBooks(fetchBooks());

