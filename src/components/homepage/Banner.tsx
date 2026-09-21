import Image from "next/image";
import React from "react";
import bannerImg from "@/assets/hero_img.jpg";

const Banner = () => {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 px-8 py-12 shadow-2xl sm:px-12 lg:px-8 lg:py-8 my-7">
        {/* Decorative glow */}
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-green-500/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative flex flex-col items-center justify-between gap-12 lg:flex-row">
          {/* Content */}
          <div className="w-full lg:w-1/2">
            <span className="mb-5 inline-block rounded-full border border-green-400/20 bg-green-400/10 px-4 py-2 text-sm font-medium text-green-400">
              Your next great read
            </span>

            <h1 className="max-w-xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Books to freshen up your{" "}
              <span className="text-green-400">bookshelf.</span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-7 text-slate-400 sm:text-lg">
              Discover your next favorite book and build a collection worth
              coming back to.
            </p>

            <button className="btn mt-8 border-none bg-green-500 px-7 text-base font-semibold text-slate-950 shadow-lg shadow-green-500/20 transition-all duration-300 hover:bg-green-400 hover:shadow-green-500/30">
              View The List
            </button>
          </div>

          {/* Image */}
          <div className="relative w-full lg:w-1/2">
            <div className="relative mx-auto max-w-md overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
              <Image
                src={bannerImg}
                width={600}
                height={600}
                alt="Books on a bookshelf"
                className="h-auto w-full object-cover"
                priority
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;