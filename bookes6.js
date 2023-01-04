class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  addBookToList(book) {
    console.log(book);
    const list = document.getElementById("book-list");
    const row = document.createElement("tr");
    row.innerHTML = `
     <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#"class="delete">X</a></td>
  `;
    list.appendChild(row);
  }
  showAlert(message, className) {
    const div = document.createElement("div");
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const form = document.querySelector("#book-form");
    container.insertBefore(div, form);
    // time out
    setTimeout(function () {
      document.querySelector(".alert").remove();
    }, 3000);
  }
  deleteBook(target) {
    if (target.className === "delete") {
      target.parentElement.parentElement.remove();
    }
  }
  clearFields() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
  }
}

class Store {
  static getBokks() {
    let books;
    if (localStorage.getItem(books) === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("books"));
    }
    return books;
  }
  static displayBooks() {
    const books = Store.getBooks();
    books.forEach(function (book) {
      const ui = new UI();
      ui.addBookToList(book);
    });
  }
  static addBook() {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
  }
  static removeBook(isbn) {
    const books = Store.getBooks();
    books.forEach(function (book) {
      if (book.isbn === isbn) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem("books", JSON.stringify(books));
  }
}
document.getElementById("book-form").addEventListener("submit", function (e) {
  const title = document.getElementById("title").value,
    author = document.getElementById("author").value,
    isbn = document.getElementById("isbn").value;

  const book = new Book(title, author, isbn);
  console.log(book);
  //Instantiate UI

  const ui = new UI();

  //validate
  if (title === "" || author === "" || isbn === "") {
    ui.showAlert("plese fill in the fields", "error");
  } else {
    ui.addBookToList(book);
    Store.addBook(book);
    console.log(book);
    //show success
    ui.showAlert("Book Added", "success");
    ui.clearfields();
  }

  console.log(book);
  e.preventDefault();
});
document.addEventListener("DOMContentLoaded", Store.displayBooks);
// event Listener for Delete
document.getElementById("book-list").addEventListener("click", function (e) {
  const ui = new UI();
  ui.deleteBook(e.target);
  Store.removeBook(e.target.parentElement.previousElementSibling.texContent);
  //showAlert
  ui.showAlert("book removed", "success");
  e.preventDefault();
});
