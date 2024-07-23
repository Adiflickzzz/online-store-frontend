"use client";
import React, { useState, useEffect } from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";
import Image from "next/image";
import Menu from "./Menu";
import { fetchDataFromApi } from "@/uitls/api";
import { BsCart } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";

import SideMenu from "./SideMenu";
import { useSelector } from "react-redux";

const Header = () => {
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [categories, setCategories] = useState(null);

  const { cartItems } = useSelector((state) => state.cart);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY) {
        setShow("-translate-y-[80px]");
      } else {
        setShow("shadow-md");
      }
    } else {
      setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const { data } = await fetchDataFromApi("/api/categories?populate=*");
    setCategories(data);
  };

  return (
    <header
      className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}
    >
      <Wrapper className="h-[60px] flex justify-between items-center">
        <Link href="/">
          <Image
            src="/logo.svg"
            width={60}
            height={80}
            className="w-[60px] md:w-[60px]"
          />
        </Link>
        <Menu categories={categories} />
        <div className="flex items-center gap-3 text-black">
          <Link href="/cart">
            <div className="w-8 md:w-12 h-8 rounded-full flex items-center justify-center hover:bg-black/[0.05] cursor-pointer relative">
              <BsCart className="text-[24px] md:text-[24px]" />
              {cartItems.length > 0 && (
                <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute md:-top-1 top-0 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                  {cartItems.length}
                </div>
              )}
            </div>
          </Link>
          {/* Icon End */}
          {/* MobileIcon Start */}
          <SideMenu categories={categories} />
          {/* MobileIcon End */}
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
