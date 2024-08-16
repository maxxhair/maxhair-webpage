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

export const getProductReviews = async (productId: string) => {
  try {
    const response = await axios.get(`${baseUrl}reviews/${productId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching variant reviews:", error);
    throw error;
  }
};

export const reviewAverage = (productReviews: any) => {
  let sum = 0;
  let count = 0;
  for (const review of productReviews) {
    if (review?.rating) {
      sum += review.rating;
      count++;
    }
  }
  return (sum / count).toFixed(1);
};

export const fetchBlogs = async () => {
  try {
    const response = await axios.get(`${baseUrl}blog`);
    return response.data.data;
  } catch (error) {
    throw error;
  }
};

export const fetchIndividualBlog = async (id: string) => {
  try {
    const res = await axios.get(`${baseUrl}blog/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};
