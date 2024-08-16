"use client";

import React, { useState } from "react";
import ProfileHeader from "../Components/ProfileHeader";
import ProfileSideNavbar from "../Components/ProfileSideNavbar";
import Wishlist from "../Components/Wishlist";
import ProfileSettings from "../Components/ProfileSettings";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Tabs } from "flowbite-react";
import OrdersSection from "../Components/OrdersSection";
import WishlistSection from "../Components/WishlistSection";
import AddressesSection from "../Components/AddressesSection";

const Profile = () => {
  const [navOption, setNavOption] = useState("orders");

  const wishlist = useSelector(
    (state: RootState) => state.wishlist.wishListItems
  );

  const getComponent = (option: string) => {
    switch (option) {
      case "orders":
        return <OrdersSection />;
      case "wishlists":
        return <WishlistSection />;
      case "addresses":
        return <AddressesSection />;
      case "account":
        return <ProfileSettings />;
      default:
        return <div>Something went wrong</div>;
    }
  };

  return (
    <section className="mt-36 w-[90%] lg:w-3/4 mx-auto">
      <ProfileHeader activeOption={navOption} />
      <div className="w-full hidden lg:flex items-start justify-between my-20">
        <ProfileSideNavbar
          activeOption={navOption}
          setNavOption={setNavOption}
        />
        <div className="w-[70%]">{getComponent(navOption)}</div>
      </div>

      <Tabs className="mt-7 focus:ring-0 lg:hidden">
        <Tabs.Item
          active
          title="Orders"
          className="!ring-0 focus:ring-0 outline-none focus:ring-transparent"
        >
          <OrdersSection />
        </Tabs.Item>
        <Tabs.Item
          title="Addresses"
          className="!ring-0 outline-none !focus:ring-transparent"
        >
          <AddressesSection />
        </Tabs.Item>
        <Tabs.Item
          title="Wishlists"
          className="!ring-0 outline-none !focus:ring-transparent"
        >
          {wishlist.map((wishlistItem: any) => (
            <Wishlist key={wishlistItem.id} wishListItem={wishlistItem} />
          ))}
        </Tabs.Item>
        <Tabs.Item
          title="Account"
          className="ring-0 outline-none focus:ring-transparent"
        >
          <ProfileSettings />
        </Tabs.Item>
      </Tabs>
    </section>
  );
};

export default Profile;
