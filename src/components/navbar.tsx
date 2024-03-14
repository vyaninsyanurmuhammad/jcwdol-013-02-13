import {
  MagnifyingGlass,
  MediumLogo,
  NotePencil,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-fit flex items-center justify-between px-6 py-4 sticky top-0 border-b-[1px] border-b-gray-200 bg-white z-10">
        <div className="flex gap-4 items-center">
          <Link href={"/"} shallow>
            <MediumLogo size={32} weight="fill" />
          </Link>
          <div className="relative">
            <label htmlFor="Search" className="sr-only">
              Search
            </label>

            <input
              type="text"
              id="Search"
              placeholder="Search for..."
              className="w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm pr-2.5 pl-9"
            />

            <span className="absolute inset-y-0 start-0 grid w-10 place-content-center">
              <button
                type="button"
                className="text-gray-600 hover:text-gray-700"
              >
                <span className="sr-only">Search</span>

                <MagnifyingGlass size={20} />
              </button>
            </span>
          </div>
        </div>
        <button className="flex gap-2 h-fit">
          <NotePencil size={24} weight="thin" />
          <span>Write</span>
        </button>
      </div>
    </>
  );
};

export default Navbar;
