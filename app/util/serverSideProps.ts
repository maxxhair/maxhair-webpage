import axiosInstance from "./axiosInstance";

export const getProducts = async () => {
  try {
    const response = await axiosInstance.get("products");
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

export const getProduct = async (id: string) => {
  try {
    const response = await axiosInstance.get(`variants/filter?products=${id}`);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

export const getVariantsByProductId = async (productId: string) => {
  try {
    const response = await axiosInstance.get(
      `variants/filter?products=${productId}`
    );
    return response.data.data;
  } catch (error) {}
};
