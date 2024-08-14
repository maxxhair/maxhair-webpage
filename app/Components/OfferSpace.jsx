import { firaSans, firaSansLight } from "../util/fonts";
import Coupon from "./_coupon/Coupon";

function OfferSpace() {
  return (
    <div className="w-full flex flex-col text-center items-center justify-center gap-[20px]  bg-[#FAFAFA] py-[32px] px-[20px]">
      <span
        className={`${firaSans.className} lg:label-large md:label-large label-small`}
      >
        Offer Space
      </span>
      <span
        className={`${firaSansLight.className} font-thin md:w-[80%] w-[90%] lg:display-large md:display-medium label-large flex justify-center`}
      >
        Your Shortcut to Stunning Styles, Now with Exclusive Coupons!
      </span>
      <Coupon />
    </div>
  );
}

export default OfferSpace;
