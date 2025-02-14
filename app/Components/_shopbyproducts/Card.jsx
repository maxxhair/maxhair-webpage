import Image from "next/image";
import Link from "next/link";
import { firaSans, firaSansMedium, prompt } from "../../util/fonts";
import { prodimg, productImage5 } from "../../util/images";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { Modal } from "flowbite-react";
import { useRouter } from "next/navigation";

function Card({ name, category, link, image, subProducts }) {
  const baseUrl = process.env.NEXT_PUBLIC_IMAGE_URL || "";
  const [openSubProducts, setOpenSubProducts] = useState(false);
  const router = useRouter();

  const imageUrl =
    image && image.length > 0 ? `${baseUrl}/${image}` : productImage5;

  const handleClick = (e) => {
    e.preventDefault();
    if (subProducts && subProducts.length > 1) {
      setOpenSubProducts(true);
    } else {
      router.push(`/${link}`);
    }
  };

  return (
    <>
      <div className="bg-[#F2ECE2] flex flex-col gap-5 px-[16px] py-[16px] justify-between items-center">
        <div className="">
          <Image
            src={imageUrl}
            alt=""
            width={300 - 20}
            height={200}
            className="w-full h-auto "
          />
        </div>
        <div className="flex flex-col items-center gap-3 w-full">
          <span
            className={`${firaSans.className} md:label-medium label-small truncate w-[80%] text-center`}
          >
            {name}
          </span>
          <button
            onClick={handleClick}
            className={`${prompt.className} font-thin bg-[#242424] text-[#FAFAFA] body-small w-full py-[10px] px-auto`}
          >
            Explore
          </button>
        </div>
      </div>
      <Modal
        show={openSubProducts}
        onClose={() => setOpenSubProducts(false)}
        dismissible
        size="md"
      >
        <Modal.Body>
          <div className="relative w-full object-cover aspect-[3/4]">
            <Image
              src={imageUrl}
              alt="img-err"
              className="m-auto border-1 border-black"
              layout="fill"
            />
            <div
              className="bg-gray-300 w-fit p-1 rounded-full absolute top-3 right-3 cursor-pointer"
              onClick={() => setOpenSubProducts(false)}
            >
              <IoClose size={"1.5rem"} className="" />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p
              className={`${firaSans.className} text-center text-xl font-semibold py-2`}
            >
              {name}
            </p>
            <p>Select the Type</p>
            <div className="grid grid-cols-3 gap-3">
              {subProducts.length > 1 &&
                subProducts?.map((subProduct) => (
                  <Link
                    href={`/${subProduct?._id}`}
                    key={subProduct._id}
                    className="py-2 px-4 border border-black hover:bg-[#a47252] transition-all duration-300"
                  >
                    <p className="text-sm font-medium">{subProduct?.title}</p>
                  </Link>
                ))}
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Card;
