import Image from "next/image";
import React from "react";
import bannerImg from "@/assets/hero_img.jpg";

const Banner = () => {
  return (
    <div className="mx-auto max-w-6xl my-20">
      <div className="flex  items-center gap-5 justify-between bg-slate-600 p-5 rounded-2xl ">
        <div className="space-y-10 w-1/2">
          <h1 className="text-6xl font-bold leading-[1.2] ">
            Books to freshen up 
            your bookshelf
          </h1>
          <button className="btn bg-green-700 border-none text-base">View The List</button>
        </div>
        <div className="w-1/2">
          <Image src={bannerImg} width={600} height={600} alt="BANNER IMAGE"></Image>
        </div>
      </div>
    </div>
  );
};

export default Banner;
