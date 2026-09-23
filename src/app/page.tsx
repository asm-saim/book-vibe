import Banner from "@/components/homepage/Banner";
import Books from "@/components/homepage/Books";
import React from "react";

const page = () => {
  return (
    <div className="bg-slate-950">
      <Banner></Banner>
      <Books></Books>
    </div>
  );
};

export default page;
