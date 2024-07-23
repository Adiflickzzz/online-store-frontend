"use client";
import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { BiMenuAltRight } from "react-icons/bi";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const data = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Categories", subMenu: true },
  { id: 4, name: "Contact", url: "/contact" },
];

const subMenuData = [
  { id: 1, url: "/items", name: "Jordan", doc_count: 11 },
  { id: 2, url: "/items", name: "Sneakers", doc_count: 8 },
  { id: 3, url: "/items", name: "Running shoes", doc_count: 64 },
  { id: 4, url: "/items", name: "Football shoes", doc_count: 107 },
];

const SideMenu = ({ categories }) => {
  const [isClicked, setIsClicked] = useState(true);

  const handleClick = (prev) => {
    setIsClicked(!prev);
  };

  return (
    <Sheet>
      <SheetTrigger>
        <div className="w-8 md:hidden flex md:w-12 h-8 rounded-full items-center justify-center hover:bg-black/[0.05] cursor-pointer relative -mr-2">
          <BiMenuAltRight className="text-[26px]" />
        </div>
      </SheetTrigger>
      <SheetContent className="w-[320px] bg-white h-screen">
        <SheetClose />
        <SheetDescription className="flex font-semibold text-lg text-black h-[100vh] mt-12 flex-col gap-10">
          {data.map((item) => (
            <React.Fragment key={item.key}>
              {!!item.subMenu ? (
                <div className="w-40px">
                  <Collapsible>
                    <CollapsibleTrigger
                      className="flex w-full items-center justify-between "
                      onClick={() => {
                        handleClick(isClicked);
                      }}
                    >
                      {item.name}{" "}
                      <span className="">
                        {isClicked ? <IoIosArrowForward /> : <IoIosArrowDown />}
                      </span>
                    </CollapsibleTrigger>
                    {categories?.map(({ attributes: c, id }) => (
                      <div>
                        <CollapsibleContent className="border-b mt-10 pb-4">
                          <Link
                            className="w-full text-sm font-semibold gap-6 items-center flex justify-between"
                            key={id}
                            href={`/category/${c.slug}`}
                          >
                            {c.name}
                            <span className="text-xs font-bold opacity-70">
                              {`(${c.products.data.length})`}
                            </span>
                          </Link>
                        </CollapsibleContent>
                      </div>
                    ))}
                  </Collapsible>
                </div>
              ) : (
                <Link
                  href={item.url}
                  className="flex w-full items-center center justify-between"
                >
                  {item.name}
                </Link>
              )}
            </React.Fragment>
          ))}
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default SideMenu;
