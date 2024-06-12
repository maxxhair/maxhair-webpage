"use client";

import React, { useEffect, useState } from "react";
import MyOrders from "./MyOrders";
import axiosInstance from "../util/axiosInstance";

const OrdersSection = () => {
  const [orders, setOrders] = useState<any[]>();

  const getUserOrders = async () => {
    try {
      const res = await axiosInstance.get("orders");
      setOrders(res?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserOrders();
  }, []);

  return (
    <div className="w-full">
      {orders && orders.length > 0 ? (
        orders?.map((order: any) => <MyOrders order={order} key={order._id} />)
      ) : (
        <div className="w-full min-h-[30vh] grid place-items-center">
          <p className="headline-small xl:headline-medium text-center">
            No Orders
          </p>
        </div>
      )}
    </div>
  );
};

export default OrdersSection;
