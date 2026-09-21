import React from "react";

//FETCHING DATA:

const getBooks = async () => {
  const res = await fetch("http://localhost:3001/books");
  return res.json();
};

const Books = async () => {
  const books = await getBooks();
  return (
    <div>
      <h1>Books: {books.length}</h1>
    </div>
  );
};

export default Books;
