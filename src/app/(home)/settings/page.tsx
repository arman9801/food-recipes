import SettingsSection from "@/components/SettingsSection";
import Link from "next/link";
import React from "react";

export default function Settings() {
  return (
    <>
      <div className="mx-4 min-h-screen max-w-screen-xl sm:mx-8xl:mx-auto mt-14">
        <h1 className="border-b py-6 text-4xl font-semibold">Settings</h1>
        <div className="grid grid-cols-8 pt-3 sm:grid-cols-10">
          <div className="relative my-4 w-56 sm:hidden">
            <input
              className="peer hidden"
              type="checkbox"
              name="select-1"
              id="select-1"
            />
            <label
              htmlFor="select-1"
              className="flex w-full cursor-pointer select-none rounded-lg border p-2 px-3 text-sm text-gray-400 ring-[#b4a2c6] peer-checked:ring"
            >
              Accounts{" "}
            </label>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="pointer-events-none absolute right-0 top-3 ml-auto mr-5 h-4 text-slate-700 transition peer-checked:rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
            <ul className="max-h-0 select-none flex-col overflow-hidden rounded-b-lg shadow-md transition-all duration-300 peer-checked:max-h-56 peer-checked:py-3">
              <li className="cursor-pointer px-3 py-2 text-sm text-slate-400 hover:bg-blue-[#b4a2c6] hover:text-white">
                Accounts
              </li>
              <li className="cursor-pointer px-3 py-2 text-sm text-slate-400 hover:bg-blue-[#b4a2c6] hover:text-white">
                Team
              </li>
              <li className="cursor-pointer px-3 py-2 text-sm text-slate-400 hover:bg-blue-[#b4a2c6] hover:text-white">
                Others
              </li>
            </ul>
          </div>

          <div className="col-span-2 hidden sm:block">
          <ul>
            <Link href={'/settings'}>
              <li className="mt-5 cursor-pointer border-l-2 border-l-[#b4a2c6] px-2 py-2 font-semibold text-[#b4a2c6] transition hover:border-l-[#b4a2c6] hover:text-[#b4a2c6]">
                Accounts
              </li>
            </Link>
              <Link href={'/users'}>
              <li className="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-[#b4a2c6] hover:text-[#b4a2c6]">                
                Users
              </li>
              </Link>
              <Link href={'/posts'}>
              <li className="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-[#b4a2c6] hover:text-[#b4a2c6]">                
                Posts
              </li>
              </Link>
              <Link href={'/logout'}>
              <li className="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-[#b4a2c6] hover:text-[#b4a2c6]">                
                Logout
              </li>
              </Link>
            </ul>
          </div>

          <div className="col-span-8 overflow-hidden rounded-xl  sm:px-8 sm:shadow">
            <SettingsSection/>
          </div>
        </div>
      </div>
    </>
  );
}
