import { Product } from "@prisma/client";
import { axiosInstance } from "shared/services/instance";
import { ApiRoutes } from "shared/services/constants";

export const search = async (query: string): Promise<Product[]> => {
  const { data } = await axiosInstance.get<Product[]>(ApiRoutes.PRODUCTS_SEARCH, { params: { query } });
  return data;
};
