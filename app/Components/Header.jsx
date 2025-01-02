"use client";

import Image from "next/image";
import {
  brandLogo,
  closeIcon,
  companyLogo,
  shoppingCart,
} from "../util/images";
import Link from "next/link";
import { firaSans } from "../util/fonts";
import user from "/public/user.svg";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { Drawer } from "flowbite-react";
import { setCloseCart, setOpenCart } from "../store/redux/cartSlice";
import { useEffect, useState } from "react";
import { isEmpty } from "lodash";
import Cart from "./Cart";
import Navbar from "./_header/Navbar";
import LoginForm from "./_header/LoginForm";
import SignupForm from "./_header/SignupForm";
import ForgotPassword from "./_header/ForgotPassword";

function Header() {
  const dispatch = useDispatch();
  const cartOpen = useSelector((state) => state.cart.openCart);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const loggedUser = useSelector((state) => state.user.user);
  const path = usePathname();

  const [authDrawerState, setAuthDrawerState] = useState("signin");
  const [authDrawerOpen, setAuthDrawerOpen] = useState(false);

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
          pathname === "/signin" ||
          pathname === "/signup" ||
          pathname === "/forgotPassword" ||
          pathname === "/newPassword" ||
          pathname === "/privacypolicy" ||
          pathname === "/termsandconditions"
            ? "hidden"
            : "border-b-[1px] border-[#D1D1D8] flex items-center justify-end md:pt-[20px] pt-[10px] md:pb-[10px] md:h-[112px] h-[90px] w-screen relative bg-[#FAFAFA]"
        }
      >
        <div className="w-full flex justify-around items-center">
          <Navbar />
          <Link href="/" className="h-full">
            <Image
              src={brandLogo}
              alt="logo"
              width={250}
              className="md:block hidden"
            />
            <Image
              src={companyLogo}
              alt="logo"
              width={100}
              className="md:hidden"
            />
          </Link>
          <div
            className={`lg:flex lg:items-center hidden md:gap-5 w-[auto] lg:label-large md:label-medium label-small ${firaSans.className}`}
          >
            <Link
              href="/"
              className={
                path === "/" ? "border-b-2 border-[#B1845E] text-[#B1845E]" : ""
              }
            >
              Home
            </Link>
            <Link
              href="/shop"
              className={
                path === "/shop"
                  ? "border-b-2 border-[#B1845E] text-[#B1845E]"
                  : ""
              }
            >
              Shop
            </Link>
            <Link
              href="/ourstory"
              className={
                path === "/ourstory"
                  ? "border-b-2 border-[#B1845E] text-[#B1845E]"
                  : ""
              }
            >
              Our Story
            </Link>
            <Link
              href="/meetOurStylist"
              className={
                path === "/meetOurStylist"
                  ? "border-b-2 border-[#B1845E] text-[#B1845E]"
                  : ""
              }
            >
              Meet Our Stylist
            </Link>
            <Link
              href="/blog"
              className={
                path === "/blog"
                  ? "border-b-2 border-[#B1845E] text-[#B1845E]"
                  : ""
              }
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className={
                path === "/contact"
                  ? "border-b-2 border-[#B1845E] text-[#B1845E]"
                  : ""
              }
            >
              Contact
            </Link>
          </div>
          <div className="flex items-center md:gap-5 gap-2 justify-end">
            {isEmpty(loggedUser) ? (
              <button
                className="bg-black text-white md:px-5 sm:px-3 px-2 sm:py-2 py-[6px] md:text-sm text-xs"
                onClick={() => setAuthDrawerOpen(true)}
              >
                Sign in
              </button>
            ) : (
              <Link href={"/profile"} className="md:block hidden">
                <Image src={user} alt="profile" className="w-6" />
              </Link>
            )}
            <div className=" md:border-l-[1px] md:border-[#D1D1D8] h-full md:w-[50px] w-[30px] flex justify-center items-center relative">
              <Image
                src={shoppingCart}
                alt="shopping cart"
                className="cursor-pointer w-5 h-5"
                onClick={handleCartOpen}
              />
              {cartCount > 0 && (
                <div className="absolute top-3 md:right-[25%] right-0 bg-pink-100 w-6 h-6 body-small aspect-square rounded-full grid place-items-center">
                  {cartCount}
                </div>
              )}
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
      <Drawer
        open={authDrawerOpen}
        onClose={() => setAuthDrawerOpen(false)}
        position="right"
        className="w-full sm:w-2/6 sm:min-w-[500px] bg-[#F2ECE2] pt-6 md:pt-10 px-8"
      >
        <div className="w-full flex items-center justify-between">
          <Image src={companyLogo} alt="Maxx Hair" />
          <Image
            src={closeIcon}
            alt="close"
            onClick={() => {
              setAuthDrawerOpen(false);
              setAuthDrawerState("signin");
            }}
            className="cursor-pointer"
          />
        </div>
        <div className="flex flex-1 items-center sm:px-10 px-3 py-10">
          {authDrawerState === "signin" && (
            <LoginForm
              setAuthDrawerState={setAuthDrawerState}
              setAuthDrawerOpen={setAuthDrawerOpen}
            />
          )}
          {authDrawerState === "signup" && (
            <SignupForm setAuthDrawerState={setAuthDrawerState} />
          )}
          {authDrawerState === "forgotpassword" && (
            <ForgotPassword setAuthDrawerState={setAuthDrawerState} />
          )}
        </div>
      </Drawer>
    </>
  );
}

export default Header;
