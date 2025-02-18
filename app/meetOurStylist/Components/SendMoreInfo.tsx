"use client";
import React, { useRef, useState } from "react";
import { Modal } from "flowbite-react";
import { countries } from "../../util/staticData";
const serialize = require("form-serialize");

function SendMoreInfo() {
  const [openModal, setOpenModal] = useState(false);
  const formRef = useRef(null);
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const obj = serialize(event.target, { hash: true });
    formRef.current.reset();
    setOpenModal(false);
  };
  return (
    <>
      <button
        className="text-[#FAFAFA] bg-[#242424] font-[500] lg:label-large md:label-medium label-small capitalize w-fit py-[10px] px-[30px]"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        Contact
      </button>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header className="bg-white">
          <div className="flex flex-col py-[20px] px-[20px] gap-[10px]">
            <span className="lg:Headline-medium md:headline-small title-medium">
              Send me more info.
            </span>
            <span className="body-small leading-5">
              No problem! Complete this contact form and we’ll send you more
              information by email. If and when you’re ready to apply, we’ll be
              here for you!
            </span>
          </div>
        </Modal.Header>
        <Modal.Body className="bg-[#F9F6F3]">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col py-[20px] px-[20px] gap-[20px]"
          >
            <div className="flex gap-[10px] w-full">
              <div className="w-1/2">
                <label
                  htmlFor="firstnameMoreInfo"
                  className="font-[500] label-small"
                >
                  First Name*
                </label>
                <input
                  type="text"
                  required
                  name="firstName"
                  id="firstnameMoreInfo"
                  className="w-full border-[1px] border-[#D1D1D1] focus:border-[#A47252] focus:ring-0 mt-[5px]"
                />
              </div>
              <div className="w-1/2">
                <label
                  htmlFor="lastnameMoreInfo"
                  className="font-[500] label-small"
                >
                  Last Name*
                </label>
                <input
                  type="text"
                  required
                  name="lastName"
                  id="lastnameMoreInfo"
                  className="w-full border-[1px] border-[#D1D1D1] focus:border-[#A47252] focus:ring-0 mt-[5px]"
                />
              </div>
            </div>
            <div className="w-full">
              <label htmlFor="email" className=" font-[500] label-small">
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
              <label
                htmlFor="countryMoreInfo"
                className="font-[500] label-small"
              >
                Country*
              </label>
              <select
                name="country"
                id="countryMoreInfo"
                required
                defaultValue=""
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
            <div className="flex flex-col gap-[20px]">
              <span className=" font-[500] label-small">
                Are you certified in other extension method(s)*
              </span>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="certified"
                  id="certifiedYesMoreInfo"
                  value="yes"
                  required
                />
                <label
                  htmlFor="certifiedYesMoreInfo"
                  className="font-[500] label-small"
                >
                  Yes
                </label>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="certified"
                  id="certifiedNoMoreInfo"
                  value="no"
                  required
                />
                <label
                  htmlFor="certifiedNoMoreInfo"
                  className="font-[500] label-small"
                >
                  No
                </label>
              </div>
            </div>
            <div className="flex w-full justify-center">
              <input
                type="submit"
                value="submit"
                className="text-[#FAFAFA] cursor-pointer bg-[#242424] lg:label-large md:label-medium label-small capitalize w-[50%] py-[10px] px-[5px]"
              />
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default SendMoreInfo;
