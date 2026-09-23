import Book from "@/components/Book";
import { IBook } from "@/types/types";

// FETCHING DATA
const getBooks = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/books`);
    const data = await res.json();
    if (!res.ok) {
      throw new Error("Failed to fetch books");
    }

    return data;
  } catch (error) {
    console.error("Error Fetching Books Data", error);
    return [];
  }
};

const Books = async () => {
  const books = await getBooks();

  return (
    <div className="bg-slate-950">
      <section className="mx-auto w-full max-w-6xl  px-4 py-8 mb-10 sm:px-6 lg:px-8">
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
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {books.map((book: IBook) => (
            <Book key={book.bookId} book={book} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Books;
