"use client";

import { BookContext } from "@/context/BookContext";
import { IBook } from "@/types/types";
import { useContext } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  BarShapeProps,
  LabelList,
  Label,
  LabelProps,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const colors = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#ef4444",
  "#ec4899",
  "#8b5cf6",
];

const getPath = (
  x: number,
  y: number,
  width: number,
  height: number
) => {
  return `M${x},${y + height}
    C${x + width / 3},${y + height}
    ${x + width / 2},${y + height / 3}
    ${x + width / 2},${y}
    C${x + width / 2},${y + height / 3}
    ${x + (2 * width) / 3},${y + height}
    ${x + width},${y + height}
    Z`;
};

const TriangleBar = (props: BarShapeProps) => {
  const { x, y, width, height, index } = props;

  const color = colors[(index ?? 0) % colors.length];

  return (
    <path
      strokeWidth={props.isActive ? 5 : 0}
      d={getPath(
        Number(x),
        Number(y),
        Number(width),
        Number(height)
      )}
      stroke={color}
      fill={color}
      style={{
        transition: "stroke-width 0.3s ease-out",
      }}
    />
  );
};

const ReadBookPage = () => {
  const { readList } = useContext(BookContext);

  const data = readList.map((book: IBook, index: number) => ({
    name:
      book.bookName.length > 15
        ? `${book.bookName.slice(0, 15)}...`
        : book.bookName,
    pages: book.totalPages,
    index: index + 1,
  }));

  const CustomColorLabel = (props: LabelProps) => {
    const fill = colors[(props.index ?? 0) % colors.length];

    return <Label {...props} fill={fill} />;
  };

  if (readList.length === 0) {
    return (
      <section className="min-h-screen bg-slate-950 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8">
            <p className="text-sm font-medium uppercase tracking-wider text-green-400">
              Reading Statistics
            </p>

            <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
              Your Reading <span className="text-green-400">Progress</span>
            </h1>

            <p className="mt-2 text-sm text-slate-400">
              See how many pages you have explored across your completed books.
            </p>
          </div>

          <div className="flex min-h-80 items-center justify-center rounded-2xl border border-dashed border-slate-700 bg-slate-900">
            <p className="text-sm text-slate-500">
              Add books to your read list to see your reading statistics.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-slate-950 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-6">
          <p className="text-sm font-medium uppercase tracking-wider text-green-400">
            Reading Statistics
          </p>

          <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            Your Reading <span className="text-green-400">Progress</span>
          </h1>

          <p className="mt-2 max-w-2xl text-sm text-slate-400">
            Explore the number of pages across the books you have completed.
          </p>
        </div>

        {/* Chart Card */}
        <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-xl">
          {/* Chart Header */}
          <div className="border-b border-slate-800 px-5 py-5 sm:px-6">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-lg font-semibold text-white">
                  Pages Per Book
                </h2>

                <p className="mt-1 text-xs text-slate-500">
                  A visual comparison of the books in your read list.
                </p>
              </div>

              <div className="mt-2 rounded-full border border-slate-700 bg-slate-950 px-3 py-1 text-xs text-slate-400 sm:mt-0">
                {readList.length} {readList.length === 1 ? "Book" : "Books"}
              </div>
            </div>
          </div>

          {/* Chart */}
          <div className="h-[350px] w-full p-4 sm:h-[300px] sm:p-6">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data}
                margin={{
                  top: 30,
                  right: 10,
                  left: 0,
                  bottom: 20,
                }}
              >
                <CartesianGrid
                  stroke="#1e293b"
                  strokeDasharray="3 3"
                  vertical={false}
                />

                <Tooltip
                  cursor={{
                    fill: "rgba(255,255,255,0.03)",
                  }}
                  contentStyle={{
                    backgroundColor: "#0f172a",
                    border: "1px solid #334155",
                    borderRadius: "10px",
                    color: "#fff",
                  }}
                  labelStyle={{
                    color: "#4ade80",
                    fontWeight: 600,
                  }}
                  formatter={(value) => [`${value} pages`, "Pages"]}
                />

                <XAxis
                  dataKey="name"
                  tick={{
                    fill: "#94a3b8",
                    fontSize: 11,
                  }}
                  axisLine={false}
                  tickLine={false}
                  interval={0}
                />

                <YAxis
                  width="auto"
                  tick={{
                    fill: "#64748b",
                    fontSize: 11,
                  }}
                  axisLine={false}
                  tickLine={false}
                />

                <Bar
                  dataKey="pages"
                  shape={TriangleBar}
                  activeBar
                  maxBarSize={65}
                >
                  <LabelList
                    content={CustomColorLabel}
                    position="top"
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadBookPage;