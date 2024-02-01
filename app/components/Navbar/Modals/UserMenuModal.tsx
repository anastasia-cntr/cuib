"use client";

export default function UserMenuModal() {
  return (
    <div className="flex flex-col border rounded-xl absolute right-6 shadow-lg text-[0.825rem] px-10 py-10 mt-3">
      <div className="py-3">
        <a className="font-bold" href="">
          Înscrie-te
        </a>
      </div>
      <div className="py-3">
        <a href="">Conectează-te</a>
      </div>
      <div className="py-3">
        <a href="">Blog</a>
      </div>
      <div className="border-t-2 py-4 border-gray-200 font-bold">
        <a href="">Asistență</a>
      </div>
    </div>
  );
}
