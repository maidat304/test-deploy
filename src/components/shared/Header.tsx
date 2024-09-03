import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import React from "react";
import {
  HiOutlineBell,
  HiOutlineChatAlt,
  HiOutlineSearch,
} from "react-icons/hi";

function Header() {
  return (
    <div className="bg-white h-16 px-4 flex items-center justify-between border-b border-gray-200">
      <div className="relative flex items-center">
        <HiOutlineSearch
          fontSize={20}
          className="text-gray-400 absolute left-3"
        />
        <input
          type="text"
          placeholder="Search..."
          className="text-sm focus:outline-none active:outline-none h-10 w-[24rem] border border-gray-300 rounded-sm pl-11 px-4"
        />
      </div>
      <div className="flex items-center gap-2 mr-2">
        <Popover className="relative">
          <PopoverButton className="p-1.5 rounded-sm inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100">
            <HiOutlineChatAlt fontSize={24} />
          </PopoverButton>
          <PopoverPanel
            anchor="bottom end"
            className="flex flex-col z-10 mt-2.5 transform w-80 bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5 text-sm"
          >
            <strong className="text-gray-700 font-medium">Messages</strong>
            <div className="mt-2 py-1 text-sm">This is messages panel.</div>
          </PopoverPanel>
        </Popover>
        <HiOutlineBell fontSize={24} className="text-gray-400" />
      </div>
    </div>
  );
}

export default Header;
