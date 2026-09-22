import Image from "next/image";
import Link from "next/link";
import { IBook } from "@/types/types";
import ReadList from "@/components/BookDetails/ReadList";
import WishList from "@/components/BookDetails/WishList";

const getBooks = async (): Promise<IBook[]> => {
  const res = await fetch("http://localhost:3001/books");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const BookDetailPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const books = await getBooks();

  const book = books.find((book: IBook) => book.bookId === parseInt(id));

  if (!book) {
    return (
      <main className="mx-auto max-w-6xl px-4 py-20 text-center">
        <h1 className="text-3xl font-bold text-white">Book not found</h1>

        <p className="mt-3 text-slate-400">The book you are looking for doesn't exist.</p>

        <Link
          href="/books"
          className="mt-6 inline-block rounded-lg bg-green-500 px-5 py-2.5 font-semibold text-slate-950 transition hover:bg-green-400"
        >
          Back to Books
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
      {/* Back Button */}
      <Link
        href="/books"
        className="mb-3 inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-green-400"
      >
        ← Back to Books
      </Link>

      {/* Main Detail Card */}
      <section className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl lg:h-[75vh]">
        <div className="grid h-full grid-cols-1 lg:grid-cols-5">
          {/* Book Cover */}
          <div className="relative min-h-[300px] bg-slate-950 lg:col-span-2 lg:min-h-0">
            <Image src={book.image} alt={book.bookName} fill priority className="object-cover" />

            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

            {/* Category */}
            <span className="absolute left-5 top-5 rounded-full border border-green-400/20 bg-slate-950/80 px-3 py-1 text-xs font-medium text-green-400 backdrop-blur">
              {book.category}
            </span>
          </div>

          {/* Details */}
          <div className="flex min-h-0 flex-col overflow-y-auto p-5 sm:p-6 lg:col-span-3 lg:p-7">
            {/* Heading */}
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-green-400">Book Details</p>

              <h1 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
                {book.bookName}
              </h1>

              <p className="mt-1 text-base text-slate-400">
                by <span className="text-slate-200">{book.author}</span>
              </p>
            </div>

            {/* Rating */}
            <div className="mt-3 flex items-center gap-3">
              <div className="flex items-center gap-2 rounded-full bg-slate-800 px-3 py-1.5">
                <span className="text-yellow-400">★</span>

                <span className="text-sm font-semibold text-white">{book.rating}</span>

                <span className="text-xs text-slate-500">/ 5</span>
              </div>

              <span className="text-xs text-slate-500">{book.totalPages} pages</span>
            </div>

            {/* Description */}
            <div className="mt-4">
              <h2 className="text-base font-semibold text-white">About the book</h2>

              <p className="mt-1.5 text-sm leading-5 text-slate-400">{book.review}</p>
            </div>

            {/* Tags */}
            <div className="mt-4">
              <h2 className="text-xs font-semibold text-slate-300">Tags</h2>

              <div className="mt-2 flex flex-wrap gap-1.5">
                {book.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-slate-800 px-2.5 py-1 text-xs font-medium text-slate-300">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Book Information */}
            <div className="mt-4 grid grid-cols-2 gap-3 border-t border-slate-800 pt-4 sm:grid-cols-3">
              <div>
                <p className="text-[11px] text-slate-500">Publisher</p>

                <p className="mt-0.5 text-xs font-medium text-slate-200">{book.publisher}</p>
              </div>

              <div>
                <p className="text-[11px] text-slate-500">Published</p>

                <p className="mt-0.5 text-xs font-medium text-slate-200">{book.yearOfPublishing}</p>
              </div>

              <div>
                <p className="text-[11px] text-slate-500">Pages</p>

                <p className="mt-0.5 text-xs font-medium text-slate-200">{book.totalPages}</p>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-4 flex flex-wrap gap-3 pb-1">
              <ReadList book={book}></ReadList>

              <WishList book={book}></WishList>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BookDetailPage;
