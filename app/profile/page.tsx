"use client";

import React, { useState } from "react";
import ProfileHeader from "../Components/ProfileHeader";
import ProfileSideNavbar from "../Components/ProfileSideNavbar";
import MyOrders from "../Components/MyOrders";
import Wishlist from "../Components/Wishlist";
import ProfileSettings from "../Components/ProfileSettings";
import AddressBox from "../Components/AddressBox";

export const addresses = [
  {
    _id: "1",
    name: "Laxman Balla",
    contact: "+919490723391",
    email: "laxman@wielabs.com",
    address:
      "Flat no -3, Sumadhura Ruchulu Curyy point Building, Megha Hills Road no -2",
    landmark: "Ayyappa Society",
    zipCode: "500081"
  },
  {
    _id: "2",
    name: "Laxman Balla",
    contact: "+919490723391",
    email: "ballalaxmanrao987@gmail.com",
    address: "Sri Venkatesware Mens PG, Vittalrao nagar, Hitech City",
    landmark: "Ayyappa Society",
    zipCode: "500081"
  }
];

const Profile = () => {
  const [navOption, setNavOption] = useState("orders");

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
            <Wishlist />
            <Wishlist />
          </div>
        );
      case "addresses":
        return (
          <div className="w-[70%]">
            {addresses.map((address: any, index: number) => (
              <AddressBox key={index} address={address} />
            ))}
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
