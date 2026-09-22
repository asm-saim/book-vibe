import { IBook } from "@/types/types";
import Book from "../Book";

// FETCHING DATA
const getBooks = async () => {
  const res = await fetch("http://localhost:3001/books");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const Books = async () => {
  const books = await getBooks();

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Section Heading */}
      <div className="mb-8 mt-5 text-center">
        <p className="text-sm font-medium uppercase tracking-wider text-green-400">Explore the collection</p>

        <h2 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Find your next <span className="text-green-400">great read.</span>
        </h2>

        <p className="mt-3 max-w-2xl text-slate-400 mx-auto">
          Browse our collection of books and discover stories worth adding to your bookshelf.
        </p>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {books.slice(0, 6).map((book:IBook) => (
          <Book key={book.bookId} book={book} />
        ))}
      </div>
    </section>
  );
};

export default Books;
