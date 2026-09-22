"use client";
import { BookContext } from "@/context/BookContext";
import { useContext } from "react";

const ReadList = () => {
  //using context
  const { readList, wishList } = useContext(BookContext);
  console.log("From Read List & wish list", readList, wishList);
  return <div>
    <h1>Total Read List: {readList.length} </h1>
    <h1>Total Wish List: {wishList.length} </h1>
  </div>;
};

export default ReadList;
