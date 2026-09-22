"use client";

import { BookContext } from "@/context/BookContext";
import { IBook } from "@/types/types";
import { useContext } from "react";
import { Bounce, toast } from "react-toastify";

interface IBookProps {
  book: IBook;
}

const WishList = ({ book }: IBookProps) => {
  //getting the context data:
  const { wishList, setWishList } = useContext(BookContext);

  const handleWishList = () => {
    // console.log("wishList is clicked", book);
    setWishList([...wishList, book]);

    //toastify:
    toast.success(`${book.bookName} added to Wishlist!`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };
  return (
    <div>
      <button
        onClick={() => handleWishList()}
        className="rounded-lg border border-green-500/40 bg-slate-800 px-5 py-2.5 text-sm font-semibold text-green-400 transition hover:border-green-400 hover:bg-slate-700 cursor-pointer"
      >
        {" "}
        Add to Wishlist{" "}
      </button>
    </div>
  );
};

export default WishList;
