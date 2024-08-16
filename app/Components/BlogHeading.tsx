import { firaSansMedium } from "../util/fonts";

const BlogHeading = () => {
  return (
    <div>
      <p className="text-xs text-[#A47252] ">TRENDING</p>
      <p
        className={`${firaSansMedium.className} text-lg lg:text-2xl font-medium lg:w-3/4 mt-2`}
      >
        Have you ever wondered why is hair so precious? What makes up a strand
        of hair? what is it made of? Why is it so difficult to find good hair?
        And what makes up good hair? And most importantly what makes it so
        expensive? We have heard you!
      </p>
      <div className="flex justify-between">
        <p className="text-xs mt-2">
          Ashley Walker| Mar 30, 2024 | 4 mins read
        </p>
      </div>
    </div>
  );
};

export default BlogHeading;
