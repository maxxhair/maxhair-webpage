import React from "react";
import { firaSans } from "../util/fonts";
import { prodimg } from "../util/images";
import Image from "next/image";

const MyOrders = () => {
  return (
    <div className="w-full border-2 mb-10 border-pink-200">
      <div className="w-full p-5 flex flex-col items-start gap-5 md:flex-row md:items-end justify-between bg-pink-50">
        <div className="flex flex-col gap-3">
          <p className={`${firaSans.className} headline-small`}>
            Order no: #123456789
          </p>
          <p className="body-medium text-gray-400">
            Order Date : <span className="text-black">22 May 2024 2:40 PM</span>
          </p>
          <p className="body-medium text-gray-400">
            Estimated Delivery Date :{" "}
            <span className="text-black">28 May 2024</span>
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="body-medium text-gray-400">
            Order Status : <span className="text-black">Inprogress</span>
          </p>
          <p className="body-medium text-gray-400">
            Payment Method :{" "}
            <span className="text-black">Cash on delivery</span>
          </p>
        </div>
      </div>
      <div className="w-full p-5 flex items-center gap-5 ">
        <Image src={prodimg} alt="cartProduct" width={115} height={180} />
        <div className="flex flex-col gap-2 w-full items-start">
          <p className="lg:headline-small md:title-medium title-small flex lg:flex-row justify-center gap-2 flex-col flex-wrap">
            <span>Machine Weft - Curly</span>
          </p>
          <div className="flex items-center gap-5">
            <p className="lg:label-medium md:body-medium body-small">
              Single drawn
            </p>
            <p className="lg:label-small md:body-medium body-small text-gray-500">
              Size: 32
            </p>
            <p className="lg:label-small md:body-medium body-small text-gray-500">
              Color: Natural
            </p>
          </div>
          <p className="lg:label-small md:body-medium body-small text-gray-500">
            Qty: 1
          </p>
          <p className="lg:label-medium md:body-medium body-small">
            Total: $440
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
