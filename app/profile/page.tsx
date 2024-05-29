"use client";

import React, { useState } from "react";
import ProfileHeader from "../Components/ProfileHeader";
import ProfileSideNavbar from "../Components/ProfileSideNavbar";
import MyOrders from "../Components/MyOrders";
import Wishlist from "../Components/Wishlist";
import ProfileSettings from "../Components/ProfileSettings";
import AddressBox from "../Components/AddressBox";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const Profile = () => {
  const [navOption, setNavOption] = useState("orders");
  const wishlist = useSelector(
    (state: RootState) => state.wishlist.wishListItems
  );

  const getComponent = (option: string) => {
    switch (option) {
      case "orders":
        return (
          <div className="w-[70%]">
            <MyOrders />
            <MyOrders />
          </div>
        );
      case "wishlists":
        return (
          <div className="w-[70%]">
            {wishlist.map((wishlistItem: any) => (
              <Wishlist key={wishlistItem.id} wishListItem={wishlistItem} />
            ))}
          </div>
        );
      case "addresses":
        return (
          <div className="w-[70%]">
            {/* {addresses.map((address: any, index: number) => (
              <AddressBox key={index} address={address} />
            ))} */}
            Addresses
          </div>
        );
      case "account settings":
        return (
          <div className="w-[70%]">
            <ProfileSettings />
          </div>
        );
      default:
        return <div>Something went wrong</div>;
    }
  };
  return (
    <section className="mt-36 w-3/4 mx-auto">
      <ProfileHeader activeOption={navOption} />
      <div className="w-full flex items-start justify-between my-20">
        <ProfileSideNavbar
          activeOption={navOption}
          setNavOption={setNavOption}
        />
        {getComponent(navOption)}
      </div>
    </section>
  );
};

export default Profile;
