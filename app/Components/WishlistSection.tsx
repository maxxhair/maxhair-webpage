import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import Wishlist from "./Wishlist";

const WishlistSection = () => {
  const wishlist = useSelector(
    (state: RootState) => state.wishlist.wishListItems
  );

  return (
    <div className="w-full">
      {wishlist?.length > 0 ? (
        wishlist.map((wishlistItem: any) => (
          <Wishlist key={wishlistItem.id} wishListItem={wishlistItem} />
        ))
      ) : (
        <div className="w-full min-h-[30vh] grid place-items-center">
          <p className="headline-small xl:headline-medium text-center">
            Empty WishLists
          </p>
        </div>
      )}
    </div>
  );
};

export default WishlistSection;
