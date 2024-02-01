"use client";

export default function SearchModal() {
  return (
    <div className="md:hidden flex flex-col border rounded-xl absolute shadow-lg text-[0.825rem] font-bold gap-7 px-10 py-10 mt-3">
      <a className="hover:text-red-500" href="">
        Închiriază
      </a>
      <a className="hover:text-red-500" href="">
        Găzduiește
      </a>
      <a className="hover:text-red-500" href="">
        Explorează
      </a>
    </div>
  );
}
