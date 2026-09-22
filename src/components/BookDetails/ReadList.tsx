"use client";

import { BookContext } from "@/context/BookContext";
import { IBook } from "@/types/types";
import { useContext } from "react";
import { Bounce, toast } from "react-toastify";

interface IBookProps {
  book: IBook;
}

const ReadList = ({ book }: IBookProps) => {
  //getting the context data:
  const { readList, setReadList } = useContext(BookContext);

  const handleReadList = () => {
    // console.log("readList is clicked", book);
    setReadList([...readList, book]);
    
    //toastify:
    toast.success(`${book.bookName} successfully added to Read List!`, {
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
        onClick={() => handleReadList()}
        className="rounded-lg bg-green-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-green-500/10 transition hover:bg-green-400 cursor-pointer"
      >
        {" "}
        Mark as Read{" "}
      </button>
    </div>
  );
};

export default ReadList;
