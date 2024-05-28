import Image from "next/image";
import { blogImage3 } from "../util/images";
import { firaSansMedium } from "../util/fonts";

const LatestBlogCard = () => {
  return (
    <div className="max-lg:w-3/4 mx-auto lg: flex mt-2 ">
      <Image src={blogImage3} alt="blog-img-error" width={150} />
      <p className={`${firaSansMedium.className} p-2 m-auto max-xl:text-xs `}>
        Curly And Confident: How To Manage Deep Curly Hair With Ease <br />
        <a
          href="blogidhere"
          className="text-[#A47252] hover:underline font-semibold max-xl:text-xs"
        >
          Read More
        </a>
      </p>
    </div>
  );
};

export default LatestBlogCard;
