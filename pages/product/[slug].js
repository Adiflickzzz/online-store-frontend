import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";
import ReleatedProducts from "@/components/ReleatedProducts";
import SizeSelector from "@/components/SizeSelector";
import Wrapper from "@/components/Wrapper";
import { addToCart } from "@/store/cartSlice";
import { fetchDataFromApi } from "@/uitls/api";
import { getDiscountedPricePercentage } from "@/uitls/helper";
import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetails = ({ product, products }) => {
  const [selectedSize, setSelectedSize] = useState();
  const [showError, setShowError] = useState(false);
  const dispatch = useDispatch();
  const p = product?.data[0]?.attributes;

  const notify = () => {
    toast.success("Added to your cart !", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <div className="w-full md:py-10">
      <ToastContainer />
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* left column start */}
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductDetailsCarousel images={p?.image?.data} />
          </div>
          {/* left column end */}

          {/* right column start */}
          <div className="flex-[1] md:py-3">
            <div>
              {/* Product title start */}
              <div className="text-[34px] font-semibold mb-2 leading-tight">
                {p.name}
              </div>
              {/* Product title end */}

              {/* Product Subtitle start */}
              <div className="text-lg font-semibold mb-5">{p.title}</div>
              {/* Product Subtitle start */}

              {/* Product price start */}
              {/* PRODUCT PRICE */}
              <div className="flex items-baseline">
                <p className="mr-2 text-lg font-semibold">
                  MRP : &#8377;{p.price}
                </p>
                {p.orginal_price && (
                  <>
                    <p className="text-sm font-bold opacity-50 line-through">
                      &#8377;{p.orginal_price}
                    </p>
                    <p className="ml-auto text-lg font-bold text-green-500">
                      {getDiscountedPricePercentage(p.orginal_price, p.price)}%
                      off
                    </p>
                  </>
                )}
              </div>
              <div className="text-sm md:text-base font-medium text-black/[0.5]">
                incl. of taxes
              </div>
              <div className="text-sm md:text-base font-medium text-black/[0.5] mb-20">
                {`(Also includes all applicable duties)`}
              </div>
            </div>

            {/* Size Selector Start */}
            <div className="mb-10">
              {/* Size Start */}
              <div>
                <div className="flex justify-between mb-2">
                  <div className="text-base font-bold">Select Size</div>
                  <div className="text-base font-semibold text-black/[0.5] cursor-pointer ">
                    Select Guide
                  </div>
                </div>

                <div id="sizesGrid" className="grid grid-cols-3 gap-2 py-2">
                  {p.size.data.map((item, i) => (
                    <div
                      key={i}
                      className={`border rounded-md text-center py-3 font-medium ${
                        item.enabled
                          ? "hover:border-black cursor-pointer"
                          : "cursor-not-allowed bg-black/[0.1] opacity-50"
                      } ${selectedSize === item.size ? "border-black" : ""}`}
                      onClick={() => {
                        setSelectedSize(item.size);
                        setShowError(false);
                      }}
                    >
                      {item.size}
                    </div>
                  ))}
                </div>
              </div>
              {/* Size End */}

              {/* Error */}
              {showError && (
                <div className="text-red-600 font-light md:font-semibold text-sm">
                  Size selection is required
                </div>
              )}

              {/* Add to cart button */}
              <button
                className="w-full py-3 rounded-xl bg-black text-white text-base font-medium my-4 transition-transform active:scale-95 hover:opacity-90"
                onClick={() => {
                  if (!selectedSize) {
                    setShowError(true);
                    document.getElementById("sizesGrid").scrollIntoView({
                      block: "center",
                      behavior: "smooth",
                    });
                  } else {
                    dispatch(
                      addToCart({
                        ...product?.data[0],
                        selectedSize,
                        oneQuantityPrice: p.price,
                      })
                    );
                    notify();
                  }
                }}
              >
                Add to Cart
              </button>

              {/* Add to WishList button */}
              
              <div>
                <div className="text-lg font-bold my-7">Product Details</div>
                <div className="markdown text-md font-semibold text-black/[0.5] my-5">
                  <ReactMarkdown>
                    {p.description[0].children[0].text}
                  </ReactMarkdown>
                </div>
              </div>
            </div>
          </div>
          {/* right column end */}
        </div>
        <ReleatedProducts products={products} />
      </Wrapper>
    </div>
  );
};

export default ProductDetails;

export async function getStaticPaths() {
  const products = await fetchDataFromApi("/api/products?populate=*");
  const paths = products?.data?.map((p) => ({
    params: {
      slug: p.attributes.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const product = await fetchDataFromApi(
    `/api/products?populate=*&filters[slug][$eq]=${slug}`
  );
  const products = await fetchDataFromApi(
    `/api/products?populate=*&[filters][slug][$ne]=${slug}`
  );

  return {
    props: {
      product,
      products,
    },
  };
}
