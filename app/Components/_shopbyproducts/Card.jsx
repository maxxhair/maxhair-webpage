import Image from "next/image";
import Link from "next/link";
import { firaSans, firaSansMedium } from "../../util/fonts";
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
      <div className="bg-[#F6F6F6] flex flex-col gap-[10px] h-auto w-[300px] px-[20px] py-[20px] justify-evenly items-center">
        <div className="">
          <Image src={imageUrl} alt="" width={300 - 20} height={200} />
        </div>
        <span
          className={`${firaSans.className} lg:title-medium md:label-medium label-small truncate w-[80%] text-center`}
        >
          {name}
        </span>
        <span
          className={`${firaSans.className} lg:label-medium md:body-medium body-small`}
        >
          {category}
        </span>
        <button
          onClick={handleClick}
          className="bg-[#242424] text-[#FAFAFA] lg:label-large md:label-medium label-small uppercase w-fit py-[10px] px-[30px]"
        >
          Explore
        </button>
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
