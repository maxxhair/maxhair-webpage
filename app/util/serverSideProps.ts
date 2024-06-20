import axios from "axios";
import axiosInstance, { baseUrl } from "./axiosInstance";

export const getProducts = async () => {
  try {
    const response = await axios.get(`${baseUrl}products`);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

export const getProduct = async (id: string) => {
  try {
    const response = await axios.get(
      `${baseUrl}variants/filter?products=${id}`
    );
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

export const getVariantsByProductId = async (productId: string) => {
  try {
    const response = await axios.get(
      `${baseUrl}variants/filter?products=${productId}`
    );
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

export const getUserOrders = async () => {
  try {
    const response = await axiosInstance.get("orders");
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};
