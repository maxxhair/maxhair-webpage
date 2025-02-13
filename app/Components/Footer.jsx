"use client";
import Image from "next/image";
import { firaSans } from "../util/fonts";
import SubscribeForm from "./_footer/SubscribeForm";
import {
  instagram,
  facebook,
  hairStrand,
  brandLogo,
  tiktok,
} from "../util/images";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Modal } from "flowbite-react";
import { useState } from "react";
import warningicon from "../../public/warning.png";

function Footer() {
  const year = new Date().getFullYear();
  const [modalOpen, setModalOpen] = useState(false);

  const handleModelOpen = () => {
    setModalOpen(true);
  };

  const handleModelClose = () => {
    setModalOpen(false);
  };

  const pathname = usePathname();
  return (
    <footer
      className={
        pathname === "/signup" ||
        pathname === "/signin" ||
        pathname === "/forgotPassword" ||
        pathname === "/newPassword" ||
        pathname === "/privacypolicy" ||
        pathname === "/termsandconditions"
          ? "hidden"
          : "bg-[#F2ECE2] relative w-full py-[30px] px-[20px] flex flex-col mt-10 items-center"
      }
    >
      <div className="flex flex-col items-center 2xl:w-[70%] xl:[75%] w-[90%] z-10 tracking-wide lg:gap-[80px] gap-[40px]">
        <div className="flex lg:justify-between justify-evenly items-center xl:text-left text-center xl:flex-row flex-col-reverse w-full xl:gap-[100px] lg:gap-[80px] gap-[60px]">
          <div className="flex flex-col gap-5">
            <Image src={brandLogo} alt="Maxx hair extensions" width={500} />
            <span
              className={`lg:headline-large md:headline-medium headline-small font-extrabold text-[#242424] ${firaSans.className}`}
            >
              Subscribe to follow
            </span>
          </div>
          <div className="border-[7px] border-[#F2ECE2] bg-[#A47252] h-fit md:min-w-[390px] min-w-[300px] px-[30px] py-[40px]">
            <SubscribeForm />
          </div>
        </div>
        <div className="flex flex-col bg-footer-design xl:gap-[100px] w-full lg:gap-[80px] gap-[60px]">
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
              </span>
              <span className="flex flex-col items-start md:gap-[10px] gap-[5px]">
                <span
                  className={`${firaSans.className} text-[#242424] font-thin lg:title-large md:title-medium title-small`}
                >
                  Company
                </span>
                <Link
                  href="/ourstory"
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
                <p
                  className="text-[#4F4F4F] xl:text-left text-center tracking-wide lg:label-large md:label-medium label-small leading-[32px] cursor-pointer"
                  onClick={handleModelOpen}
                >
                  Returns
                </p>
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
              <div className="flex gap-[10px] items-center">
                <Link
                  href="https://www.instagram.com/maxx_hair_extensions/"
                  target="_blank"
                >
                  <Image src={instagram} alt="" />
                </Link>
                <Link href="https://www.facebook.com/" target="_blank">
                  <Image src={facebook} alt="" />
                </Link>
                <Link
                  href="https://www.tiktok.com/@maxxhe3?_t=8nwqDAciGBr&_r=1"
                  target="_blank"
                >
                  <Image src={tiktok} alt="" />
                </Link>
              </div>
            </span>
          </div>
        </div>
        <div className="w-full">
          <Image src={hairStrand} alt="" />
          <div className="w-full flex md:flex-row flex-col  items-center gap-y-[10px] lg:body-large md:body-medium body-small tracking-tight font-[500] ">
            <div className=" flex gap-x-[30px] md:w-full xl:justify-between justify-center">
              <Link
                href="privacypolicy"
                className="hover:underline underline-offset-8"
              >
                Privacy Policy
              </Link>
              <span className="text-[#5D5D5D] md:block hidden">
                Copyright © {year} Maxx Hair. All rights reserved || Designed
                and Developed by&nbsp;
                <a
                  href="https://www.wielabs.com"
                  target="_blank"
                  className="underline underline-offset-2"
                >
                  Wielabs
                </a>
              </span>
              <Link
                href="termsandconditions"
                className="hover:underline underline-offset-8"
              >
                Terms & Conditions
              </Link>
            </div>

            <span className="text-[#5D5D5D] text-center block md:hidden">
              Copyright © {year} Maxx Hair. All rights reserved || Designed and
              Developed by&nbsp;
              <a
                href="https://www.wielabs.com"
                target="_blank"
                className="underline underline-offset-2"
              >
                Wielabs
              </a>
            </span>
          </div>
        </div>
      </div>

      <Modal dismissible show={modalOpen} onClose={handleModelClose}>
        <Modal.Body className="flex flex-col items-center justify-center">
          <Image src={warningicon} alt="Warning" width={100} />
          <p className="text-xl text-center my-5">
            To maintain high standard of hygiene we do not accept returns. If
            there is a manufacturing defect with the product you purchased,
            please reach out to us via email at{" "}
            <a
              href="mailto:support@maxxhe.com"
              className="text-blue-500 hover:underline underline-offset-2"
            >
              support@maxxhe.com
            </a>{" "}
            and we will handle it on case to case basis.
          </p>
          <button
            onClick={handleModelClose}
            className="bg-red-600 text-white px-4 py-1 rounded-lg text-lg"
          >
            Close
          </button>
        </Modal.Body>
      </Modal>
    </footer>
  );
}

export default Footer;
