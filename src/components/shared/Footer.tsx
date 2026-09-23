import Link from "next/link";
const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-900 text-slate-300">
      {" "}
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        {" "}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {" "}
          {/* Brand */}{" "}
          <div className="lg:col-span-2">
            {" "}
            <Link href="/homepage" className="text-2xl font-bold tracking-tight text-white">
              {" "}
              Book<span className="text-green-400">Vibe</span>{" "}
            </Link>{" "}
            <p className="mt-3 max-w-md text-sm leading-6 text-slate-400">
              {" "}
              Discover your next great read, keep track of books you love, and build your personal reading collection
              with Book Vibe.{" "}
            </p>{" "}
          </div>{" "}
          {/* Explore */}{" "}
          <div>
            {" "}
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white"> Explore </h3>{" "}
            <ul className="mt-4 space-y-3 text-sm">
              {" "}
              <li>
                {" "}
                <Link href="/homepage" className="transition hover:text-green-400">
                  {" "}
                  Home{" "}
                </Link>{" "}
              </li>{" "}
              <li>
                {" "}
                <Link href="/books" className="transition hover:text-green-400">
                  {" "}
                  Books{" "}
                </Link>{" "}
              </li>{" "}
              <li>
                {" "}
                <Link href="/categories" className="transition hover:text-green-400">
                  {" "}
                  Categories{" "}
                </Link>{" "}
              </li>{" "}
              <li>
                {" "}
                <Link href="/about" className="transition hover:text-green-400">
                  {" "}
                  About{" "}
                </Link>{" "}
              </li>{" "}
            </ul>{" "}
          </div>{" "}
          {/* Reading */}{" "}
          <div>
            {" "}
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white"> My Reading </h3>{" "}
            <ul className="mt-4 space-y-3 text-sm">
              {" "}
              <li>
                {" "}
                <Link href="/read-list" className="transition hover:text-green-400">
                  {" "}
                  Read List{" "}
                </Link>{" "}
              </li>{" "}
              <li>
                {" "}
                <Link href="/wishlist" className="transition hover:text-green-400">
                  {" "}
                  Wishlist{" "}
                </Link>{" "}
              </li>{" "}
              <li>
                {" "}
                <Link href="/books" className="transition hover:text-green-400">
                  {" "}
                  Browse Books{" "}
                </Link>{" "}
              </li>{" "}
            </ul>{" "}
          </div>{" "}
        </div>{" "}
        {/* Bottom */}{" "}
        <div className="mt-10 flex flex-col gap-3 border-t border-slate-800 pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          {" "}
          <p className="text-slate-500"> © {new Date().getFullYear()} Book Vibe. All rights reserved. </p>{" "}
          <p className="text-slate-500"> Read more. Discover more. </p>{" "}
        </div>{" "}
      </div>{" "}
    </footer>
  );
};
export default Footer;
