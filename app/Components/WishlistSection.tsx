import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import Wishlist from "./Wishlist";

const WishlistSection = () => {
  const wishlist = useSelector(
    (state: RootState) => state.wishlist.wishListItems
  );

  return (
    <div className="w-[70%]">
      {wishlist.map((wishlistItem: any) => (
        <Wishlist key={wishlistItem.id} wishListItem={wishlistItem} />
      ))}
    </div>
  );
};

export default WishlistSection;
