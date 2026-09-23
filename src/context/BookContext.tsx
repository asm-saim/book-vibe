"use client";

import { createContext, useState } from "react";
import { IBook } from "@/types/types";

interface IBookContext {
  readList: IBook[];
  setReadList: React.Dispatch<React.SetStateAction<IBook[]>>;
  wishList: IBook[];
  setWishList: React.Dispatch<React.SetStateAction<IBook[]>>;
}

export const BookContext = createContext<IBookContext>({
  readList: [],
  setReadList: () => {},
  wishList: [],
  setWishList: () => {},
});

const BookProvider = ({ children }: { children: React.ReactNode }) => {
  const [readList, setReadList] = useState<IBook[]>([]);
  const [wishList, setWishList] = useState<IBook[]>([]);

  const sharedData: IBookContext = {
    readList,
    setReadList,
    wishList,
    setWishList,
  };

  return <BookContext.Provider value={sharedData}>{children}</BookContext.Provider>;
};

export default BookProvider;
