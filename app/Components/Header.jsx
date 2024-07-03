"use client";

import Image from "next/image";
import { brandLogo, closeIcon, shoppingCart } from "../util/images";
import Link from "next/link";
import { firaSans } from "../util/fonts";
import user from "/public/user.svg";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { Drawer } from "flowbite-react";
import { setCloseCart, setOpenCart } from "../store/redux/cartSlice";
import { useEffect } from "react";
import { isEmpty } from "lodash";
import Cart from "./Cart";
import Navbar from "./_header/Navbar";

function Header() {
  const dispatch = useDispatch();
  const cartOpen = useSelector((state) => state.cart.openCart);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const loggedUser = useSelector((state) => state.user.user);
  const path = usePathname();

  const cartCount = cartItems?.length;

  const handleCartOpen = () => {
    cartOpen ? dispatch(setCloseCart()) : dispatch(setOpenCart());
  };

  const handleCartClose = () => {
    dispatch(setCloseCart());
  };

  useEffect(() => {
    if (cartOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [cartOpen]);

  const pathname = usePathname();
  return (
    <>
      <header
        className={
          pathname === "/signin" || pathname === "/signup"
            ? "hidden"
            : "border-b-[1px] border-[#D1D1D8] flex items-center justify-end pt-[20px] pb-[10px] w-full px-[20px] relative bg-[#FAFAFA]"
        }
      >
        <div className="w-full flex justify-around">
          <Navbar />
          <Link href="/" className="h-full ">
            <Image src={brandLogo} alt="logo" width={400} />
          </Link>
          <div
            className={`md:flex md:items-center hidden gap-[40px] w-[auto] lg:label-large md:label-medium label-small ${firaSans.className}`}
          >
            <Link
              href="/shop"
              className={path === "/shop" ? "border-b-2 border-black" : ""}
            >
              Shop
            </Link>
            <Link
              href="/meetOurStylist"
              className={
                path === "/meetOurStylist" ? "border-b-2 border-black" : ""
              }
            >
              Meet Our Stylist
            </Link>
            <Link
              href="/blog"
              className={path === "/blog" ? "border-b-2 border-black" : ""}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className={path === "/contact" ? "border-b-2 border-black" : ""}
            >
              Contact
            </Link>
          </div>
          <div className="flex items-center gap-5 justify-end">
            <Link
              href={isEmpty(loggedUser) ? "signin" : "profile"}
              className="md:block hidden"
            >
              <Image src={user} alt="profile" className="w-6" />
            </Link>
            <div className=" md:border-l-[1px] md:border-[#D1D1D8] h-full md:w-[100px] w-[50px] flex justify-center items-center relative">
              <Image
                src={shoppingCart}
                alt="shopping cart"
                className="cursor-pointer w-5 h-5"
                onClick={handleCartOpen}
              />
              <div className="absolute top-3 md:right-[25%] right-0 bg-pink-100 w-6 h-6 body-small aspect-square rounded-full grid place-items-center">
                {cartCount}
              </div>
            </div>
          </div>
        </div>
      </header>
      <Drawer
        open={cartOpen}
        onClose={handleCartClose}
        position="right"
        className="w-full md:w-3/4 2xl:w-2/5 bg-[#F2ECE2] pt-6 md:pt-7 lg:pt-16 px-8"
      >
        <div className="w-full flex items-center justify-between">
          <p className="headline-small font-medium">Your Cart</p>
          <Image
            src={closeIcon}
            alt="close"
            onClick={handleCartClose}
            className="cursor-pointer"
          />
        </div>
        <Cart handleClose={handleCartClose} />
      </Drawer>
    </>
  );
}

export default Header;
