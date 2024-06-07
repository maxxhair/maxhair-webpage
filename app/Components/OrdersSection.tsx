"use client";

import React, { useEffect, useState } from "react";
import MyOrders from "./MyOrders";
import axiosInstance from "../util/axiosInstance";
import toast from "react-hot-toast";

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
    <div className="w-[70%]">
      {orders &&
        orders?.map((order: any) => <MyOrders order={order} key={order._id} />)}
    </div>
  );
};

export default OrdersSection;
