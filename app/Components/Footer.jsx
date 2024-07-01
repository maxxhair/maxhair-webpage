"use client";
import Image from "next/image";
import { firaSans, firaSansLight } from "../util/fonts";
import SubscribeForm from "./_footer/SubscribeForm";
import { instagram, facebook, hairStrand, brandLogo } from "../util/images";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Footer() {
  const pathname = usePathname();
  return (
    <footer
      className={
        pathname === "/signup" || pathname === "/signin"
          ? "hidden"
          : "bg-[#F2ECE2] relative w-full py-[30px] px-[20px] flex flex-col  items-center"
      }
    >
      <div className="h-[70px] w-full !bg-[#FAFAFA] absolute top-0 left-0 "></div>
      <div className="flex flex-col items-center 2xl:w-[70%] xl:[75%] w-[90%] z-10 tracking-wide xl:gap-[100px] lg:gap-[80px] gap-[40px]">
        <div className="flex lg:justify-between justify-evenly items-center xl:text-left text-center xl:flex-row flex-col-reverse w-full xl:gap-[100px] lg:gap-[80px] gap-[60px]">
          <span
            className={`lg:headline-large md:headline-medium headline-small flex flex-col gap-[10px] `}
          >
            <span
              className={`font-extrabold text-[#242424] ${firaSans.className}`}
            >
              Subscribe to follow
            </span>
            <span
              className={`font-[100] uppercase text-[#4F4F4F] ${firaSansLight.className}`}
            >
              Infinity projects, funding and
            </span>
            <span
              className={` uppercase text-[#A47252] ${firaSansLight.className}`}
            >
              career opportunities.
            </span>
          </span>
          <div className="border-[7px] border-[#F2ECE2] bg-[#A47252] h-fit md:min-w-[390px] min-w-[300px] px-[30px] py-[40px]">
            <SubscribeForm />
          </div>
        </div>
        <div className="flex flex-col bg-footer-design xl:gap-[100px] w-full lg:gap-[80px] gap-[60px]">
          <div className="flex xl:justify-start justify-center items-center">
            <Image src={brandLogo} alt="Maxx hair extensions" width={400} />
          </div>
          <div className="flex flex-wrap xl:flex-row gap-y-[40px] gap-x-[110px] flex-col w-full xl:items-start items-center xl:text-left text-center ">
            <div className="flex xl:w-1/2 w-full justify-between ">
              <span className="flex flex-col items-start md:gap-[10px] gap-[5px]">
                <span
                  className={`${firaSans.className} text-[#242424] font-thin lg:title-large md:title-medium title-small`}
                >
                  Shop
                </span>
                <Link
                  href="/contact"
                  className="text-[#4F4F4F] xl:text-left text-center tracking-wide lg:label-large md:label-medium label-small leading-[32px]"
                >
                  Contact us
                </Link>
                <Link
                  href="/about"
                  className="text-[#4F4F4F] xl:text-left text-center tracking-wide lg:label-large md:label-medium label-small leading-[32px]"
                >
                  About us
                </Link>
              </span>
              <span className="flex flex-col items-start md:gap-[10px] gap-[5px]">
                <span
                  className={`${firaSans.className} text-[#242424] font-thin lg:title-large md:title-medium title-small`}
                >
                  Company
                </span>
                <Link
                  href="/about"
                  className="text-[#4F4F4F] xl:text-left text-center tracking-wide lg:label-large md:label-medium label-small leading-[32px]"
                >
                  About us
                </Link>
                <Link
                  href="/blog"
                  className="text-[#4F4F4F] xl:text-left text-center tracking-wide lg:label-large md:label-medium label-small leading-[32px]"
                >
                  Blog
                </Link>
              </span>
              <span className="flex flex-col items-start md:gap-[10px] gap-[5px]">
                <span
                  className={`${firaSans.className} text-[#242424] font-thin lg:title-large md:title-medium title-small`}
                >
                  Support
                </span>
                <Link
                  href="/orders/track"
                  className="text-[#4F4F4F] xl:text-left text-center tracking-wide lg:label-large md:label-medium label-small leading-[32px]"
                >
                  Track Orders
                </Link>
                <Link
                  href="/contact"
                  className="text-[#4F4F4F] xl:text-left text-center tracking-wide lg:label-large md:label-medium label-small leading-[32px]"
                >
                  Contact Us
                </Link>
              </span>
            </div>
            <span className="flex flex-col md:gap-[10px] gap-[5px] xl:w-1/4 w-full xl:items-start items-center ">
              <span
                className={`${firaSans.className} text-[#242424] font-thin lg:title-large md:title-medium title-small`}
              >
                Follow US
              </span>
              <div className="flex gap-[10px]">
                <Link href="https://www.instagram.com/" target="_blank">
                  <Image src={instagram} alt="" />
                </Link>
                <Link href="https://www.facebook.com/" target="_blank">
                  <Image src={facebook} alt="" />
                </Link>
              </div>
            </span>
          </div>
        </div>
        <div className="w-full">
          <Image src={hairStrand} alt="" />
          <div className="w-full flex md:flex-row flex-col  items-center gap-y-[10px] lg:body-large md:body-medium body-small tracking-tight font-[500] ">
            <div className=" flex gap-x-[30px] md:w-full xl:justify-between justify-center">
              <Link href="">Privacy Policy</Link>
              <span className="text-[#5D5D5D] md:block hidden">
                Copyright © 2024 Maxx Hair. All rights reserved
              </span>
              <Link href="">Terms & Conditions</Link>
            </div>

            <span className="text-[#5D5D5D] block md:hidden">
              Copyright © 2024 Maxx Hair. All rights reserved
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
