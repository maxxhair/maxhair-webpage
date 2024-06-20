import React, { useEffect, useState } from "react";
import MyOrders from "./MyOrders";
import axiosInstance from "../util/axiosInstance";
import { getUserOrders } from "../util/serverSideProps";
import { Spinner } from "flowbite-react";

const OrdersSection = () => {
  const [orders, setOrders] = useState<any[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const [showMore, setShowMore] = useState<boolean>(false);

  const getUserOrders = async () => {
    try {
      setLoading(true);
      const res = await axiosInstance.get("orders");
      setOrders(res?.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserOrders();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <Spinner size={"xl"} />
      </div>
    );
  }

  return (
    <div className="w-full">
      {orders && orders.length > 0 ? (
        orders
          ?.slice(0, showMore ? orders.length : 4)
          .map((order: any) => <MyOrders order={order} key={order._id} />)
      ) : (
        <div className="w-full min-h-[30vh] grid place-items-center">
          <p className="headline-small xl:headline-medium text-center">
            No Orders
          </p>
        </div>
      )}
      {!showMore ? (
        <p
          className="text-center text-blue-500 hover:underline cursor-pointer"
          onClick={() => setShowMore(true)}
        >
          {orders.length > 4 && "show more"}
        </p>
      ) : (
        <p
          className="text-center text-blue-500 hover:underline cursor-pointer"
          onClick={() => setShowMore(false)}
        >
          show less
        </p>
      )}
    </div>
  );
};

export default OrdersSection;
