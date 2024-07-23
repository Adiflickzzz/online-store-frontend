"use client";
import React, { useState } from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const data = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Categories", subMenu: true },
  { id: 4, name: "Contact", url: "/contact" },
];

const Menu = ({ categories }) => {
  return (
    <div className="hidden md:flex items-center gap-8 font-medium text-black">
      {data.map((item) => (
        <React.Fragment key={item.id}>
          {!!item?.subMenu ? (
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center font-semibold gap-2 outline-none justify-center">
                {item.name} <BsChevronDown className="mt-[2px] text-xs" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mt-2 bg-white">
                {categories?.map(({ attributes: c, id }) => (
                  <DropdownMenuItem asChild>
                    <Link
                      className="w-full text-base font-semibold gap-6 items-center flex justify-between"
                      key={id}
                      href={`/category/${c.slug}`}
                    >
                      {c.name}
                      <span className="text-xs font-bold opacity-70">
                        {`(${c.products.data.length})`}
                      </span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href={item.url} className="font-semibold">
              {item.name}
            </Link>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Menu;
