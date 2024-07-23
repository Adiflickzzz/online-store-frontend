import CartItem from "@/components/CartItem";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Link from "next/link";
import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";

import { loadStripe } from "@stripe/stripe-js";
import { makePaymentsRequest } from "@/uitls/api";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const Cart = () => {
  const [loading, setLoading] = useState(false);
  const { cartItems } = useSelector((state) => state.cart);

  const subTotal = useMemo(() => {
    return cartItems.reduce((total, val) => total + val.attributes.price, 0);
  }, [cartItems]);

  const handlePayment = async () => {
    try {
      setLoading(true);
      const stripe = await stripePromise;
      const res = await makePaymentsRequest("/api/orders", {
        products: cartItems,
      });
      await stripe.redirectToCheckout({
        sessionId: res.stripeSession.id,
      });
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div className="w-full md:py-20">
      <Wrapper>
        {cartItems.length > 0 && (
          <>
            <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
              <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                Shopping Cart
              </div>
            </div>

            {/* CART CONTENT START */}
            <div className="flex flex-col lg:flex-row gap-12 py-10">
              {/* CART ITEMS START */}
              <div className="flex-[2]">
                <div className="text-lg font-bold">Cart Items</div>
                {cartItems.map((item) => (
                  <CartItem key={item.id} data={item} />
                ))}
              </div>
              {/* CART ITEMS END */}

              <div className="flex-[1]">
                <div className="text-lg font-bold">Summary</div>
                <div className="p-5 my-5 bg-green-100/[0.7] rounded-xl">
                  <div className="flex justify-between">
                    <div className="uppercase text-base md:text-lg font-semibold text-black">
                      Subtotal
                    </div>
                    <div className="font-semibold">₹ {subTotal}</div>
                  </div>
                  <div className="text-sm md:text-md py-5 font-medium border-t border-black/[0.1] mt-5">
                    The subtotal reflects the total price of your order,
                    including duties and taxes, before any applicable discounts.
                    It does not include delivery costs and international
                    transaction fees.
                  </div>
                </div>
                <div
                  className="w-full py-4 text-center rounded-xl bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-3 justify-center"
                  onClick={handlePayment}
                >
                  Checkout
                  {loading && <img src="/spinner.svg" />}
                </div>
              </div>
            </div>
          </>
        )}

        {/* CART CONTENT END */}

        {cartItems.length < 1 && (
          <div className="flex-[2] flex-col flex items-center pb-[50px] md:-mt-10">
            <Image
              src="/empty-cart.jpg"
              width={300}
              height={300}
              className="w-300px md:w-[400px]"
            />
            <span className="text-xl font-bold">Your cart is Empty</span>
            <span className="text-center mt-4 font-semibold text-black/[0.5]">
              Looks like you have not added anthing in your cart
              <br />
              Go ahead and explore top categories.
            </span>
            <Link href="/">
              <div className=" py-4 px-10 md:px-24 mt-8 text-center rounded-xl bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
                Continue Shopping
              </div>
            </Link>
          </div>
        )}
      </Wrapper>
    </div>
  );
};

export default Cart;
