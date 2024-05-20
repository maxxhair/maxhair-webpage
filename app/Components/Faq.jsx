import InfoSection from "./_faq/InfoSection";
import { firaSans } from "../util/fonts";
import { list } from "../util/staticData";

function Faq() {
  return (
    <div
      id="faq"
      className="min-h-screen bg-[#FAFAFA] flex flex-col w-full px-[32px] py-[40px] justify-center items-center gap-[50px]"
    >
      <div className="flex flex-col gap-[30px] xl:w-[50%] lg:w-[70%] md:w-[80%] sm:w-[90%] w-[100%] text-[#242424]">
        <span
          className={`${firaSans.className} text-center lg:headline-large md:headline-medium headline-small`}
        >
          FAQ
        </span>
        <span
          className={` text-center lg:label-large md:label-medium label-small`}
        >
          The purpose of a FAQ is generally to provide information on frequent
          questions or concerns. however, the format is a useful means of
          organizing information, and text
        </span>
      </div>
      <div className="flex flex-col gap-[10px] w-full justify-center items-center ">
        {list.map((obj, index) => {
          return (
            <InfoSection
              key={index}
              title={obj.title}
              body={obj.body}
              isOpen={index === 0}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Faq;
