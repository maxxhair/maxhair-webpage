"use client";
import React, { useRef, useState } from "react";
import { Modal } from "flowbite-react";
import Image from "next/image";
import { companyLogo2 } from "../../util/images";
import { firaSans } from "../../util/fonts";
import { countries } from "../../util/staticData";
import serialize from "form-serialize";
import { baseUrl } from "../../util/axiosInstance";
import toast from "react-hot-toast";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from "axios";

function EnrollNow() {
  const [openModal, setOpenModal] = useState(false);
  const formRef = useRef(null);
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();
    const obj = serialize(event.target as HTMLFormElement, { hash: true });
    try {
      await axios.post(`${baseUrl}user-details`, obj);
      toast.success("Enrolled Successfully");
      formRef.current.reset();
      setOpenModal(false);
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };
  return (
    <>
      <button
        className={`text-[#FAFAFA] bg-[#242424] lg:label-large md:label-medium label-small capitalize w-fit py-[10px] px-[30px]`}
        onClick={() => {
          setOpenModal(true);
        }}
      >
        Enroll Now
      </button>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header className="bg-white">
          <div className="flex flex-col p-2 gap-[10px]">
            <Image src={companyLogo2} alt="Maxx hair extentions" />
            <span className="body-small leading-5">
              Maxx Hair Extensions is the #1 most requested hand-tied method by
              clients.Maxx Hair Extensions is the only extension method
              protected by a U.S. Patent.See for yourself what the hype is about
              and join the growing community of certified stylists worldwide.
            </span>
            <span className="title-small">
              Start your certification journey today!
            </span>
          </div>
        </Modal.Header>
        <Modal.Body className="bg-[#F9F6F3]">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className=" flex flex-col py-[20px] px-[20px] gap-[20px]"
          >
            <span
              className={`${firaSans.className} lg:title-larg font-[500] title-small`}
            >
              Personal Information
            </span>
            <div className="flex gap-[10px] w-full">
              <div className="w-1/2">
                <label htmlFor="firstname" className=" font-[500] label-small">
                  First Name*
                </label>
                <input
                  type="text"
                  required
                  name="firstName"
                  id="firstname"
                  className="w-full border-[1px] border-[#D1D1D1] focus:border-[#A47252] focus:ring-0 mt-[5px]"
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="lastname" className=" font-[500] label-small">
                  Last Name*
                </label>
                <input
                  type="text"
                  required
                  name="lastName"
                  id="lastname"
                  className="w-full border-[1px] border-[#D1D1D1] focus:border-[#A47252] focus:ring-0 mt-[5px]"
                />
              </div>
            </div>
            <div>
              <label htmlFor="phoneno" className=" font-[500] label-small">
                Phone Number*
              </label>
              <PhoneInput
                enableSearch
                countryCodeEditable={false}
                country={"us"}
                inputProps={{
                  name: "phoneNo",
                  id: "phoneno",
                  required: true,
                  className:
                    "w-full border-[1px] border-[#D1D1D1] focus:border-[#A47252] focus:ring-0 pl-12",
                }}
              />
            </div>
            <div className="w-full">
              <label htmlFor="email" className=" font-[500] label-small ">
                Email*
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full border-[1px] border-[#D1D1D1] focus:border-[#A47252] focus:ring-0 mt-[5px]"
              />
            </div>
            <div>
              <label htmlFor="instaHandle" className=" font-[500] label-small">
                Instagram Handle*
              </label>
              <input
                type="text"
                required
                name="instaHandle"
                id="instaHandle"
                className="w-full border-[1px] border-[#D1D1D1] focus:border-[#A47252] focus:ring-0 mt-[5px]"
              />
            </div>
            <div>
              <label htmlFor="hand" className=" font-[500] label-small">
                Are you right or left handed?*
              </label>
              <select
                defaultValue=""
                name="activeHand"
                id="hand"
                required
                className="w-full border-[1px] border-[#D1D1D1] focus:border-[#A47252] focus:ring-0 mt-[5px]"
              >
                <option value="" disabled>
                  Select an option
                </option>
                <option value="Left">Left</option>
                <option value="Right">Right</option>
              </select>
            </div>
            <div>
              <label htmlFor="address" className=" font-[500] label-small">
                Shipping Address*
              </label>
              <input
                type="text"
                required
                name="shippingAddress"
                id="address"
                className="w-full border-[1px] border-[#D1D1D1] focus:border-[#A47252] focus:ring-0 mt-[5px]"
              />
            </div>
            <div className="flex gap-[10px] w-full">
              <div className="w-1/2">
                <label htmlFor="city" className=" font-[500] label-small">
                  City*
                </label>
                <input
                  type="text"
                  required
                  name="city"
                  id="city"
                  className="w-full border-[1px] border-[#D1D1D1] focus:border-[#A47252] focus:ring-0 mt-[5px]"
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="postalcode" className=" font-[500] label-small">
                  Postal Code*
                </label>
                <input
                  type="tel"
                  pattern="\d{6}"
                  id="postalcode"
                  name="postalCode"
                  required
                  className="w-full border-[1px] border-[#D1D1D1] focus:border-[#A47252] focus:ring-0 mt-[5px]"
                />
              </div>
            </div>
            <div>
              <label htmlFor="country" className=" font-[500] label-small">
                Country*
              </label>
              <select
                defaultValue=""
                name="country"
                id="country"
                required
                className="w-full border-[1px] border-[#D1D1D1] focus:border-[#A47252] focus:ring-0 mt-[5px]"
              >
                <option value="" disabled>
                  Select an option
                </option>
                {countries.map((ele, index) => {
                  return (
                    <option key={index} value={`${ele}`}>
                      {ele}
                    </option>
                  );
                })}
              </select>
            </div>
            <span
              className={`${firaSans.className} lg:title-large font-[500] title-small`}
            >
              Personal Information
            </span>
            <div className="flex flex-col gap-[20px]">
              <span className=" font-[500] label-small">
                What type of stylist are you?*
              </span>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="typeOfStylist"
                  id="salonOwner"
                  value="salon owner"
                  required
                />
                <label htmlFor="salonOwner" className=" font-[500] label-small">
                  Salon Owner
                </label>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="typeOfStylist"
                  id="boothRenter"
                  value="booth renter"
                  required
                />
                <label
                  htmlFor="boothRenter"
                  className=" font-[500] label-small"
                >
                  Booth Renter
                </label>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="typeOfStylist"
                  id="salonSuite"
                  value="salon suite"
                  required
                />
                <label htmlFor="salonSuite" className=" font-[500] label-small">
                  Salon Suite
                </label>
              </div>
              <div className="flex items-center gap-[10px] ">
                <input
                  type="radio"
                  name="typeOfStylist"
                  id="otherStylist"
                  value="other"
                  required
                />
                <label
                  htmlFor="otherStylist"
                  className=" font-[500] label-small"
                >
                  Other
                </label>
              </div>
            </div>
            <div className="flex flex-col gap-[20px]">
              <span className=" font-[500] label-small">
                Are you certified in other extension method(s)*
              </span>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="certified"
                  id="certifiedYes"
                  value="yes"
                  required
                />
                <label
                  htmlFor="certifiedYes"
                  className=" font-[500] label-small"
                >
                  Yes
                </label>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="certified"
                  id="certifiedNo"
                  value="no"
                  required
                />
                <label
                  htmlFor="certifiedNo"
                  className=" font-[500] label-small"
                >
                  No
                </label>
              </div>
            </div>
            <div className="flex flex-col gap-[20px]">
              <span className=" font-[500] label-small">
                Is it more important to you to finish on time but with mediocre
                work, or a bit late with incredible work?*
              </span>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="deliveryOpinion"
                  id="fastDelivery"
                  value="on time"
                  required
                />
                <label
                  htmlFor="fastDelivery"
                  className=" font-[500] label-small"
                >
                  On time
                </label>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="deliveryOpinion"
                  id="lateDelivery"
                  value="a bit late"
                  required
                />
                <label
                  htmlFor="lateDelivery"
                  className=" font-[500] label-small"
                >
                  A bit late
                </label>
              </div>
            </div>
            <div className="flex flex-col gap-[20px]">
              <span className=" font-[500] label-small">
                Would you consider yourself a coachable person?*
              </span>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="coachable"
                  id="coachableYes"
                  value="yes"
                  required
                />
                <label
                  htmlFor="coachableYes"
                  className=" font-[500] label-small"
                >
                  Yes
                </label>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="coachable"
                  id="coachableNo"
                  value="no"
                  required
                />
                <label
                  htmlFor="coachableNo"
                  className=" font-[500] label-small"
                >
                  No
                </label>
              </div>
            </div>
            <div>
              <label htmlFor="licenseYrs" className=" font-[500] label-small">
                Approximately how many years have you been licensed*
              </label>
              <select
                defaultValue=""
                name="licenseYrs"
                id="licenseYrs"
                required
                className="w-full border-[1px] border-[#D1D1D1] focus:border-[#A47252] focus:ring-0 mt-[5px]"
              >
                <option value="" disabled>
                  Select an option
                </option>
                {Array(10)
                  .fill(0)
                  .map((_, index) => {
                    return (
                      <option
                        key={index + "yrs"}
                        value={`${index !== 9 ? index + 1 : "10+ years"}`}
                      >
                        {index === 9 ? "10+ years" : index + 1}
                      </option>
                    );
                  })}
              </select>
            </div>
            <div>
              <label
                htmlFor="LastCareerAsStylist"
                className=" font-[500] label-small"
              >
                What is the last thing you did to elevate your career as a
                stylist?*
              </label>
              <input
                type="text"
                required
                name="lastCareerAsStylist"
                id="LastCareerAsStylist"
                className="w-full border-[1px] border-[#D1D1D1] focus:border-[#A47252] focus:ring-0 mt-[5px]"
              />
            </div>
            <div>
              <label htmlFor="salonAddress" className=" font-[500] label-small">
                What is your salon address?*
              </label>
              <input
                type="text"
                required
                name="salonAddress"
                id="salonAddress"
                className="w-full border-[1px] border-[#D1D1D1] focus:border-[#A47252] focus:ring-0 mt-[5px]"
              />
            </div>
            <div className="flex gap-[10px] w-full">
              <div className="w-1/2">
                <label htmlFor="salonCity" className=" font-[500] label-small">
                  Salon City*
                </label>
                <input
                  type="text"
                  required
                  name="salonCity"
                  id="salonCity"
                  className="w-full border-[1px] border-[#D1D1D1] focus:border-[#A47252] focus:ring-0 mt-[5px]"
                />
              </div>
              <div className="w-1/2">
                <label
                  htmlFor="salonpostalcode"
                  className=" font-[500] label-small"
                >
                  Salon Postal Code*
                </label>
                <input
                  type="tel"
                  pattern="\d{6}"
                  id="salonpostalcode"
                  name="salonPostalCode"
                  required
                  className="w-full border-[1px] border-[#D1D1D1] focus:border-[#A47252] focus:ring-0 mt-[5px]"
                />
              </div>
            </div>
            <div>
              <label htmlFor="saloncountry" className=" font-[500] label-small">
                Country*
              </label>
              <select
                defaultValue=""
                name="salonCountry"
                id="saloncountry"
                required
                className="w-full border-[1px] border-[#D1D1D1] focus:border-[#A47252] focus:ring-0 mt-[5px]"
              >
                <option value="" disabled>
                  Select an option
                </option>
                {countries.map((ele, index) => {
                  return (
                    <option key={index + "salon"} value={`${ele}`}>
                      {ele}
                    </option>
                  );
                })}
              </select>
            </div>
            <span
              className={`${firaSans.className} lg:title-larg font-[500] title-small`}
            >
              Financial Information
            </span>
            <div className="flex flex-col gap-[20px]">
              <span className=" font-[500] label-small">
                Are you currently in a financial position to invest in your
                education and elevate your career?*
              </span>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="canInvest"
                  id="canInvestYes"
                  value="yes"
                  required
                />
                <label
                  htmlFor="canInvestYes"
                  className=" font-[500] label-small"
                >
                  Yes
                </label>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="canInvest"
                  id="canInvestNo"
                  value="no"
                  required
                />
                <label
                  htmlFor="canInvestNo"
                  className=" font-[500] label-small"
                >
                  No
                </label>
              </div>
            </div>
            <div className="flex flex-col gap-[20px]">
              <span className=" font-[500] label-small">
                Which of the following options would you like to select for the
                training session.
              </span>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="chosenProgram"
                  id="chosenProgramFull"
                  value="pay in full $3500"
                  required
                />
                <label
                  htmlFor="chosenProgramFull"
                  className=" font-[500] label-small"
                >
                  Pay in full $3500
                </label>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="chosenProgram"
                  id="chosenProgram3months"
                  value="payment plan 3-months $1500/month"
                  required
                />
                <label
                  htmlFor="chosenProgram3months"
                  className=" font-[500] label-small"
                >
                  Payment Plan 3-Months $1200/month
                </label>
              </div>
            </div>
            <div>
              <label
                htmlFor="expectedIncomeNextYear"
                className=" font-[500] label-small"
              >
                If you set an income goal for the next year as a stylist… what
                would that number be?*
              </label>
              <input
                type="number"
                id="expectedIncomeNextYear"
                name="expectedIncomeNextYear"
                required
                className="w-full border-[1px] border-[#D1D1D1] focus:border-[#A47252] focus:ring-0 mt-[5px]"
              />
            </div>
            <div className="flex w-full justify-center">
              <input
                type="submit"
                value="submit application"
                className={`text-[#FAFAFA] cursor-pointer bg-[#242424] lg:label-large md:label-medium label-small capitalize w-[50%] py-[15px] px-[15px] `}
              />
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default EnrollNow;
