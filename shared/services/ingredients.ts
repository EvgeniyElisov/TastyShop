import { Ingredient } from "@prisma/client";
import { axiosInstance } from "shared/services/instance";
import { ApiRoutes } from "shared/services/constants";

export const getIngredients = async (): Promise<Ingredient[]> => {
  const { data } = await axiosInstance.get<Ingredient[]>(ApiRoutes.INGREDIENTS);
  return data;
};
