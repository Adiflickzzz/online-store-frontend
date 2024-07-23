import React from "react";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";

const Failed = () => {
  return (
    <div className="min-h-[650px] flex items-center">
      <Wrapper>
        <div className="max-w-[600px] rounded-xl p-5 border border-black/[0.5] mx-auto flex flex-col">
          <div className="text-2xl font-bold text-red-600 ">
            Payment Failed !
          </div>
          <div className="text-base font-semibold mt-3 text-black/[0.8]">
            For any product related query, drop an email to
          </div>
          <div className="underline font-semibold text-black/[0.8] cursor-pointer">
            shoeshopcontact@shop.com
          </div>

          <Link
            href="/"
            className="font-bold mt-5 bg-black text-center transition-transform active:scale-95 hover:opacity-90 text-white rounded-xl py-2 px-4 w-[190px]"
          >
            Continue Shopping
          </Link>
        </div>
      </Wrapper>
    </div>
  );
};

export default Failed;
