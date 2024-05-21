"use client";

import Image from "next/image";
import { closeIcon, companyLogo, shoppingCart } from "../util/images";
import Link from "next/link";
import { firaSans } from "../util/fonts";
import user from "/public/user.svg";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { Drawer } from "flowbite-react";
import { setCloseCart, setOpenCart } from "../store/redux/cartSlice";
import { useEffect } from "react";
import Cart from "./Cart";
import Navbar from "./_header/Navbar";

function Header() {
  const dispatch = useDispatch();
  const cartOpen = useSelector((state) => state.cart.openCart);
  const cartItems = useSelector((state) => state.cart.cartItems);

  const cartCount = cartItems.length;

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
            : "border-b-[1px] border-[#D1D1D8] flex items-center justify-end pt-[30px] pb-[20px] w-full px-[20px] h-[80px] relative bg-[#FAFAFA]"
        }
      >
        <div className="w-full flex justify-around">
          <Link href="/" className="h-full ">
            <Image src={companyLogo} alt="logo" className="h-full w-fit " />
          </Link>

          <div
            className={`md:flex hidden gap-[40px] w-[auto] lg:label-large md:label-medium label-small ${firaSans.className}`}
          >
            <Link href="shop">Shop</Link>
            <Link href="about">Educate Me</Link>
            <Link href="blog">Blog</Link>
            <Link href="contact">Contact</Link>
          </div>
          <div className="flex items-center gap-5 justify-end">
            <Link href="signin">
              <Image src={user} alt="profile" className="w-6" />
            </Link>

            <div className=" border-l-[1px] border-[#D1D1D8]  h-full w-[100px] flex justify-center items-center relative">
              <Image
                src={shoppingCart}
                alt="shopping cart"
                className="cursor-pointer"
                onClick={handleCartOpen}
              />
              <div className="absolute top-0 left-[30%] -translate-x-[30%] -translate-y-[30%] bg-pink-100 w-6 h-6 aspect-square rounded-full grid place-items-center">
                {cartCount}
              </div>
            </div>
          </div>
          <Navbar />
        </div>
      </header>
      <Drawer
        open={cartOpen}
        onClose={handleCartClose}
        position="right"
        className="md:w-1/2 2xl:w-2/5 bg-[#F2ECE2] pt-16 px-8"
      >
        <div className="w-full flex items-center justify-between">
          <p className="headline-small font-medium">Your Cart</p>
          <Image
            src={closeIcon}
            alt="close"
            className="cursor-pointer"
            onClick={handleCartClose}
          />
        </div>
        <Cart handleClose={handleCartClose} />
      </Drawer>
    </>
  );
}

export default Header;
