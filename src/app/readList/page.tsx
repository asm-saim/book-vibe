"use client";
import { BookContext } from "@/context/BookContext";
import { useContext } from "react";

const ReadList = () => {
  //using context
  const { readList, wishList } = useContext(BookContext);
  console.log("From Read List & wish list", readList, wishList);
  return <div></div>;
};

export default ReadList;
