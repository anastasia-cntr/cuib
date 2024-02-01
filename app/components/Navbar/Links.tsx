"use client";

export default function Links() {
  return (
    <div className="hidden md:flex text-[0.875rem] md:text-[1rem] w-full md:w-auto py-2 gap-1 items-center">
      <div>
        <a
          className="hover:bg-red-100 hover:text-red-500 rounded-full px-3 py-2"
          href=""
        >
          Închiriază
        </a>
      </div>
      <div>&mdash;</div>
      <div>
        <a
          className="hover:bg-red-100 hover:text-red-500 rounded-full px-3
        py-2"
          href=""
        >
          Găzduiește
        </a>
      </div>
      <div>&mdash;</div>
      <div>
        <a
          className="hover:bg-red-100 hover:text-red-500 rounded-full px-3
        py-2"
          href=""
        >
          Explorează
        </a>
      </div>
    </div>
  );
}
