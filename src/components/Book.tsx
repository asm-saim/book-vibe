import Image from "next/image";
import Link from "next/link";

interface IBook {
  bookId: number;
  bookName: string;
  author: string;
  image: string;
  review: string;
  totalPages: number;
  rating: number;
  category: string;
  tags: string[];
  publisher: string;
  yearOfPublishing: number;
}

interface BookProps {
  book: IBook;
}

const Book = ({ book }: BookProps) => {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-green-400/30 hover:shadow-2xl">
      {/* Book Image */}
      <div className="relative h-48 overflow-hidden bg-slate-800">
        <Image
          src={book.image}
          alt={book.bookName}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

        {/* Category */}
        <span className="absolute left-3 top-3 rounded-full border border-green-400/20 bg-slate-950/80 px-2.5 py-1 text-xs font-medium text-green-400 backdrop-blur">
          {book.category}
        </span>

        {/* Rating */}
        <div className="absolute bottom-3 right-3 flex items-center gap-1 rounded-full bg-slate-950/80 px-2.5 py-1 text-xs backdrop-blur">
          <span className="text-yellow-400">★</span>
          <span className="font-semibold text-white">{book.rating}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Title */}
        <h2 className="line-clamp-1 text-lg font-bold text-white transition-colors group-hover:text-green-400">
          {book.bookName}
        </h2>

        {/* Author */}
        <p className="mt-0.5 text-sm text-slate-400">by {book.author}</p>

        {/* Review */}
        <p className="mt-3 line-clamp-2 text-sm leading-5 text-slate-400">{book.review}</p>

        {/* Tags */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {book.tags.map((tag) => (
            <span key={tag} className="rounded-md bg-slate-800 px-2 py-0.5 text-xs font-medium text-slate-300">
              #{tag}
            </span>
          ))}
        </div>

        {/* Bottom Info */}
        <div className="mt-4 flex items-center justify-between border-t border-slate-800 pt-3">
          <div>
            <p className="text-[11px] text-slate-500">Pages</p>
            <p className="text-sm font-medium text-slate-300">{book.totalPages}</p>
          </div>

          <div>
            <p className="text-[11px] text-slate-500">Published</p>
            <p className="text-sm font-medium text-slate-300">{book.yearOfPublishing}</p>
          </div>

          <Link href={`/books/${book.bookId}`}>
            <button className="rounded-lg bg-green-500 px-3 py-1.5 text-sm font-semibold text-slate-950 transition hover:bg-green-400">
              See Details ⮞
            </button>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Book;
