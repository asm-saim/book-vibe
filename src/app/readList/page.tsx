'use client'
import { BookContext } from "@/context/BookContext";
import { useContext } from "react";

const ReadList = () => {
  //using context
  const { readList } = useContext(BookContext);
  console.log("From Read List", readList);
  return <div></div>;
};

export default ReadList;
