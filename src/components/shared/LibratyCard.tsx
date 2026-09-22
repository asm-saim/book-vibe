import { IBook } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

const LibraryCard = ({ book }: { book: IBook }) => {
  return (
    <article className="group flex min-h-40 overflow-hidden rounded-xl border border-slate-800 bg-slate-950 transition duration-300 hover:border-green-400/40">
      {/* Image */}
      <div className="relative h-48 w-32 shrink-0 sm:h-48 sm:w-36">
        <Image src={book.image} fill alt={book.bookName} className="object-cover" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between p-4">
        <div>
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="line-clamp-1 text-lg font-bold text-white transition group-hover:text-green-400">
                {book.bookName}
              </h2>

              <p className="mt-0.5 text-sm text-slate-400">by {book.author}</p>
            </div>

            <span className="shrink-0 rounded-full bg-green-400/10 px-2.5 py-1 text-xs font-medium text-green-400">
              {book.category}
            </span>
          </div>

          <p className="mt-2 line-clamp-2 text-sm leading-5 text-slate-400">{book.review}</p>
        </div>

        {/* Bottom Info */}
        <div className="mt-3 flex items-center justify-between border-t border-slate-800 pt-3">
          <div className="flex items-center gap-4 text-xs">
            <span className="text-yellow-400">★ {book.rating}</span>

            <span className="text-slate-400">{book.totalPages} pages</span>

            <span className="hidden text-slate-500 sm:inline">{book.yearOfPublishing}</span>
          </div>
          <Link href={`/books/${book.bookId}`}>
            <button className="rounded-lg bg-green-500 px-3 py-1.5 text-sm font-semibold text-slate-950 transition hover:bg-green-400">
              Details ⮞
            </button>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default LibraryCard;
