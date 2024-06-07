import React from "react";
import { firaSans } from "../util/fonts";
import { prodimg } from "../util/images";
import Image from "next/image";

interface Item {
  _id: string;
  count: number;
  price: number;
  type: string;
  texture: string;
  color: string;
  size: string;
  image: string;
  name: string;
}
interface Props {
  order: {
    _id: string;
    createdAt: string;
    items: Item[];
    transactionId: string;
  };
}

const MyOrders: React.FC<Props> = ({ order }) => {
  const date = new Date(order.createdAt);
  const EstimatedDate = new Date(
    date.getTime() + 5 * 24 * 60 * 60 * 1000
  ).toDateString();

  return (
    <div className="w-full border-2 mb-10 border-pink-200">
      <div className="w-full p-5 flex flex-col items-start gap-5 md:flex-row md:items-end justify-between bg-pink-50">
        <div className="flex flex-col gap-3">
          <p className={`${firaSans.className} headline-small`}>
            Order no: {order._id.slice(-10).toUpperCase()}
          </p>
          <p className="body-medium text-gray-400">
            Order Date :{" "}
            <span className="text-black">
              {new Date(order.createdAt).toDateString()}
            </span>
          </p>
          <p className="body-medium text-gray-400">
            Estimated Delivery Date :
            <span className="text-black">{EstimatedDate}</span>
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="body-medium text-gray-400">
            Order Status : <span className="text-black">Inprogress</span>
          </p>
          {/* <p className="body-medium text-gray-400">
            Payment Method :
            <span className="text-black">
              {order.transactionId ? "Pay through Card" : "Pay through Cash"}
            </span>
          </p> */}
        </div>
      </div>
      {order.items &&
        order.items.map((item) => (
          <div className="w-full p-5 flex items-center gap-5 ">
            <Image
              src={item.image || prodimg}
              alt="cartProduct"
              width={115}
              height={180}
            />
            <div className="flex flex-col gap-2 w-full items-start">
              <p className="lg:headline-small md:title-medium title-small flex lg:flex-row justify-center gap-2 flex-col flex-wrap">
                <span>
                  {item.name} - {item.texture}
                </span>
              </p>
              <div className="flex items-center gap-5">
                <p className="lg:label-medium md:body-medium body-small">
                  {item.type}
                </p>
                <p className="lg:label-small md:body-medium body-small text-gray-500">
                  Size: {item.size}
                </p>
                <p className="lg:label-small md:body-medium body-small text-gray-500">
                  Color: {item.color}
                </p>
              </div>
              <p className="lg:label-small md:body-medium body-small text-gray-500">
                Qty: {item.count}
              </p>
              <p className="lg:label-medium md:body-medium body-small">
                Total: ${(item.price * item.count).toFixed(2)}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default MyOrders;
