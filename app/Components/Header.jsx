import Image from "next/image";
import { companyLogo, shoppingCart } from "../util/images";
import Link from "next/link";
import { firaSans } from "../util/fonts";

function Header() {
  return (
    <header className="border-b-[1px] bg-[#FAFAFA] border-[#D1D1D8] flex items-center pt-[30px] pb-[20px] w-full px-[20px] h-[80px] relative">
      <div className="h-full w-[40%] flex justify-center">
        <Link href="/" className="h-full ">
          <Image src={companyLogo} alt="logo" className="h-full w-fit " />
        </Link>
      </div>

      <div
        className={`md:flex hidden gap-[40px] w-[60%] lg:label-large md:label-medium label-small ${firaSans.className}`}
      >
        <Link href="shop">Shop</Link>
        <Link href="about">Educate Me</Link>
        <Link href="blog">Blog</Link>
        <Link href="contact">Contact</Link>
      </div>
      <div className="absolute border-l-[1px] border-[#D1D1D8] top-0 right-0 h-full lg:w-[150px] w-[100px] flex justify-center items-center">
        <Link href="/cart">
          <Image src={shoppingCart} alt="shopping cart" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
