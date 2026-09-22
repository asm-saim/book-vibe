"use client";
import { createContext, useState } from "react";

//context creation:
export const BookContext = createContext({});
const BookProvider = ({ children }: { children: React.ReactNode }) => {
  const [readList, setReadList] = useState([]);
  const [wishList, setWishList] = useState([]);

  const sharedData = {
    readList,
    setReadList,
    wishList,
    setWishList,
  };

  return <BookContext.Provider value={sharedData}>{children}</BookContext.Provider>;
};

export default BookProvider;
