import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getDiscountedPricePercentage } from "@/uitls/helper";

const ProductCard = ({ data: { attributes: p, id } }) => {
  return (
    <Link href={`/product/${p.slug}`} className="cursor-pointer">
      <Image
        width={500}
        height={500}
        src={p.thumbnail.data.attributes.url}
        alt={p.name}
      />
      <div className="py-3 text-black/[0.9] ">
        <h2 className="text-sm md:text-base font-bold truncate">{p.name}</h2>
        <div className="flex flex-col md:flex-row items-baseline text-black/[0.7]">
          <p className="mr-1 text-lg font-bold">₹{p.price}</p>
          {p.orginal_price && (
            <div className="flex flex-col md:flex-row items-start md:items-center flex-1 ">
              <p className="text-[12px] -my-1 md:my-0 md:text-xs font-semibold opacity-50 line-through">
                ₹{p.orginal_price}
              </p>
              <div className="ml-auto font-semibold md:text-base text-green-500">
                {getDiscountedPricePercentage(p.orginal_price, p.price)}% Off
              </div>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
