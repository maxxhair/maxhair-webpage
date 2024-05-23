import Image from "next/image";
import { firaSans, firaSansMedium, koulen } from "../util/fonts";
import { brenda } from "../util/images";

function page() {
  return (
    <div className=" mt-[80px] w-full bg-[#FAFAFA]">
      <div className="py-[32px] px-[20px] w-full lg:min-h-[80vh] min-h-screen  flex justify-center relative items-center">
        <div className="lg:w-[80%] w-[90%] h-[80vh] relative ">
          <div className="absolute top-0 right-0 bg-[#E3D6C5] text-[#885C46] lg:w-[85%] w-full lg:min-h-[70%] min-h-full py-[20px] px-[20px] flex flex-col justify-center items-center">
            <div className="lg:absolute lg:-bottom-[120px] lg:-left-[200px] z-10 xl:h-[300px] lg:h-[250px] md:h-[200px] h-[200px] xl:w-[300px] lg:w-[250px] md:w-[200px] w-[200px] ">
              <Image
                src={brenda}
                alt="brenda"
                className="[clip-path:circle()] "
              />

              <div
                className={`absolute xl:-top-[160px] lg:-top-[140px] md:-top-[20px] -top-[50px] lg:left-1/3 left-1/2  lg:title-large md:title-medium title-small text-center bg-[#885C46] rounded-full p-[10px] xl:h-[200px] lg:h-[180px] md:h-[160px] h-[150px] xl:w-[200px] lg:w-[180px] md:w-[160px] w-[150px]  flex justify-center items-center text-[#FAFAFA] ${koulen.className}`}
              >
                Meet Brenda
              </div>
            </div>
            <div
              className={`w-[80%] flex flex-col h-full justify-evenly gap-[10px] py-[10px] font-[400] relative`}
            >
              <span className="lg:body-large md:body-medium body-small">
                Our Educator
              </span>
              <span
                className={` ${firaSans.className}  lg:title-large md:title-medium title-small font-[600]`}
              >
                Hair Extension Expert and Educator
              </span>
              <span className="lg:body-large md:body-medium body-small">
                Brenda has been a visionary in the realm of hair industry with
                an illustrious career spanning over 20 years! Renowned for her
                unparalleled expertise in crafting mesmerizing hair color and
                seamless hair extension techniques with all types of wefts,
                keratin, and I-tip Bonds, along with advanced color correction
                methods. Beyond the mastery of the craft, Brenda is a dedicated
                educator sharing her wealth of knowledge and passion with
                aspiring stylist, empowering them to reach newer heights of
                skill and creativity Her teaching transcends mere technique,
                instilling in others a profound understanding of the artistry
                behind every cut, color, and extension.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full  bg-[#F2ECE2] flex justify-center items-center py-[50px] px-[10px]">
        <div className="flex flex-wrap justify-center gap-[20px] xl:w-full w-[80%]">
          <div className="bg-[#FAFAFA] shadow-md sm:h-[350px] h-[300px] flex flex-col px-[20px] py-[20px] justify-evenly items-center text-center xl:w-[600px] w-full ">
            <span
              className={`${firaSans.className} text-[#885C46] lg:label-large md:label-medium label-small`}
            >
              Ready To Apply?
            </span>
            <span className="text-[#242424] lg:body-large md:body-medium body-small w-[60%]">
              Complete the form and we’ll contact you to schedule an interview.
              No payment is required today.
            </span>
            <button
              className={`text-[#FAFAFA] bg-[#242424] lg:label-large md:label-medium label-small capitalize w-fit py-[10px] px-[30px]`}
            >
              Enroll Now
            </button>
          </div>
          <div className="bg-[#FAFAFA] shadow-md sm:h-[350px] h-[300px] flex flex-col px-[20px] py-[20px] justify-evenly items-center text-center xl:w-[600px] w-full ">
            <span
              className={`${firaSans.className} text-[#885C46] lg:label-large md:label-medium label-small`}
            >
              I’m Interested, But Am Not Ready To Apply Yet.
            </span>
            <span className="text-[#242424] lg:body-large md:body-medium body-small w-[60%]">
              No problem! Complete this contact form and we’ll send you more
              information by email. If and when you’re ready to apply, we’ll be
              here for you!
            </span>
            <button
              className={`text-[#FAFAFA] bg-[#242424] lg:label-large md:label-medium label-small capitalize w-fit py-[10px] px-[30px]`}
            >
              Send me more info
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#885C46] w-full flex flex-col justify-center items-center gap-[40px] px-[20px] py-[40px]">
        <span
          className={`text-center text-[#F9F6F3] ${firaSans.className} lg:title-large md:title-medium title-small`}
        >
          How Much Does It Cost To Get Certified?
        </span>
        <div className="flex lg:flex-row flex-col xl:w-[70%] lg:w-[80%] w-full gap-[20px] justify-center items-center ">
          <div className="bg-[#FAFAFA] shadow-md flex flex-col justify-evenly items-center h-full text-center gap-[10px] lg:w-[calc(40%-10px)] w-[60%] px-[20px] py-[20px]">
            <span
              className={`${firaSans.className} lg:title-large md:title-medium title-small uppercase text-[#885C46]`}
            >
              Pay in full
            </span>
            <span
              className={`${firaSansMedium.className} lg:headline-large md:headline-medium headline-small`}
            >
              $4,200
            </span>
            <span className="capitalize xl:w-[60%] w-[70%]">
              Save up to $600 when you pay in full
            </span>
          </div>
          <div className="bg-[#FAFAFA] shadow-md flex flex-col justify-around items-center h-full text-center gap-[10px] lg:w-[calc(60%-10px)] w-[90%] px-[20px] py-[20px]">
            <span
              className={`${firaSans.className} lg:title-large md:title-medium title-small uppercase text-[#885C46]`}
            >
              payment plan
            </span>
            <div className="h-full flex justify-evenly items-center w-full">
              <div className="flex flex-col gap-[10px] justify-center text-center items-center">
                <span
                  className={`${firaSansMedium.className} lg:headline-large md:headline-medium headline-small`}
                >
                  $1,500
                </span>
                <span className="capitalize w-[80%]">3 Payments of $4,500</span>
              </div>
              <div className=" w-[2px] h-[100px] bg-[#F2ECE2]"></div>
              <div className="flex flex-col justify-center gap-[10px] text-center items-center">
                <span
                  className={`${firaSansMedium.className} lg:headline-large md:headline-medium headline-small`}
                >
                  $800
                </span>
                <span className="capitalize w-[80%]">6 Payments of $4,800</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col text-center gap-[10px] lg:body-large md:body-medium body-small text-[#FAFAFA]">
          <span>
            We recognize it’s a big decision to make this investment in your
            career.
          </span>
          <span>
            Certifications, new clients will be seeking your services, and your
            investment
          </span>
          <span>
            will soon be paying for itself many times over, and long into the
            future!
          </span>
        </div>
      </div>
    </div>
  );
}

export default page;
