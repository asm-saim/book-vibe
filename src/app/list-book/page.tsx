"use client";

import LibraryCard from "@/components/shared/LibratyCard";
import { BookContext } from "@/context/BookContext";
import { IBook } from "@/types/types";
import { useContext, useState } from "react";

const ReadList = () => {
  const { readList, wishList } = useContext(BookContext);

  const [sortType, setSortType] = useState<"rating" | "year" | "pages">("rating");

  //for sort section:
  const sortBooks = (books: IBook[]) => {
    const sortedBooks = [...books];

    if (sortType === "rating") {
      sortedBooks.sort((a, b) => b.rating - a.rating);
    } else if (sortType === "year") {
      sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
    } else if (sortType === "pages") {
      sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
    }

    return sortedBooks;
  };

  const sortedReadList = sortBooks(readList);
  const sortedWishList = sortBooks(wishList);

  return (
    <section className="min-h-screen bg-slate-950 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-8">
          <p className="text-sm font-medium uppercase tracking-wider text-green-400">My Library</p>

          <h1 className="mt-2 text-3xl font-bold text-white">
            Your Book <span className="text-green-400">Collection</span>
          </h1>

          <p className="mt-2 text-sm text-slate-400">Manage the books you have read and the books you want to read.</p>
        </div>

        {/* Sort Section */}
        <div className="mb-5 flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-white">Organize your collection</p>
            <p className="mt-1 text-xs text-slate-500">Choose how you want to arrange your books.</p>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden text-xs font-medium uppercase tracking-wider text-slate-500 sm:block">Sort by</span>

            <select
              value={sortType}
              onChange={(e) => setSortType(e.target.value as "rating" | "year" | "pages")}
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-2.5 text-sm font-medium text-slate-200 outline-none transition focus:border-green-400 focus:ring-1 focus:ring-green-400 sm:w-44"
            >
              <option value="rating">Highest Rating</option>
              <option value="year">Newest Published</option>
              <option value="pages">Most Pages</option>
            </select>
          </div>
        </div>

        {/* Tabs */}
        <div className="tabs tabs-lift w-full">
          {/* Read List */}
          <input
            type="radio"
            name="book_tabs"
            className="tab"
            aria-label={`Read List (${readList.length})`}
            defaultChecked
          />

          <div className="tab-content border-slate-800 bg-slate-900 p-4 sm:p-5">
            {sortedReadList.length > 0 ? (
              <div className="space-y-4">
                {sortedReadList.map((book: IBook) => (
                  <LibraryCard key={book.bookId} book={book} />
                ))}
              </div>
            ) : (
              <EmptyState text="No books in your read list yet." />
            )}
          </div>

          {/* Wishlist */}
          <input type="radio" name="book_tabs" className="tab" aria-label={`Wish List (${wishList.length})`} />

          <div className="tab-content border-slate-800 bg-slate-900 p-4 sm:p-5">
            {wishList.length > 0 ? (
              <div className="space-y-4">
                {sortedWishList.map((book: IBook) => (
                  <LibraryCard key={book.bookId} book={book} />
                ))}
              </div>
            ) : (
              <EmptyState text="No books in your wishlist yet." />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const EmptyState = ({ text }: { text: string }) => {
  return (
    <div className="flex min-h-40 items-center justify-center rounded-xl border border-dashed border-slate-700 bg-slate-950/50">
      <p className="text-sm text-slate-500">{text}</p>
    </div>
  );
};

export default ReadList;
