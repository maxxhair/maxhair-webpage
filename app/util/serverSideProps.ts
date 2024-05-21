import axiosInstance from "./axiosInstance";

export const getProducts = async () => {
  try {
    const response = await axiosInstance.get("/variants/filter");
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};
