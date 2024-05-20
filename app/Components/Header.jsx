"use client";

import Image from "next/image";
import { companyLogo, shoppingCart } from "../util/images";
import Link from "next/link";
import { firaSans } from "../util/fonts";
import user from "/public/user.svg";
import { usePathname } from "next/navigation";

function Header() {
  const pathname = usePathname();
  return (
    <header
      className={
        pathname === "/signin" || pathname === "/signup"
          ? "hidden"
          : "border-b-[1px] border-[#D1D1D8] flex items-center justify-end pt-[30px] pb-[20px] w-full px-[20px] h-[80px] relative bg-[#FAFAFA]"
      }
    >
      <div className="w-[75%] flex justify-between">
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

          <div className=" border-l-[1px] border-[#D1D1D8]  h-full w-[100px] flex justify-center items-center">
            <Image src={shoppingCart} alt="shopping cart" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
