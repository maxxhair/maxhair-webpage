"use client";

import React from "react";
import { firaSans } from "../util/fonts";
import { Breadcrumb, BreadcrumbItem } from "flowbite-react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { userLogout } from "../store/redux/userSlice";
import { useRouter } from "next/navigation";
import { BiExit } from "react-icons/bi";
import { removeCouponCode } from "../store/redux/cartSlice";
import { emptyAddress } from "../store/redux/addressesSlice";

interface Props {
  activeOption: string;
}

const ProfileHeader: React.FC<Props> = ({ activeOption }) => {
  const { push } = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const handleLogout = () => {
    dispatch(userLogout());
    dispatch(removeCouponCode());
    dispatch(emptyAddress());
    push("/");
  };

  return (
    <div className="w-full flex flex-col gap-7 lg:gap-0 lg:flex-row items-start lg:items-center justify-between">
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-5 lg:gap-36">
        <p className={`${firaSans.className} headline-medium`}>My Account</p>
        <Breadcrumb>
          <BreadcrumbItem href="/">Home</BreadcrumbItem>
          <BreadcrumbItem href="profile">Your Account</BreadcrumbItem>
          <BreadcrumbItem className="capitalize">
            Your {activeOption}
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="flex items-center gap-1">
        <p
          className="label-medium cursor-pointer hover:underline hover:underline-offset-4"
          onClick={handleLogout}
        >
          Signout
        </p>
        <BiExit />
      </div>
    </div>
  );
};

export default ProfileHeader;
