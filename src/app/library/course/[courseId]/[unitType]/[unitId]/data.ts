import axiosInstance from "@/lib/axios";
import { cache } from "react";
import { QCM } from "@/types";

export const getQCMs = cache(async (evaluation_id: string) => {
  try {
    const response = await axiosInstance.get<QCM[]>(
      `/evaluations/${evaluation_id}/qcms`,
    );
    return response.data;
  } catch (error) {
    return [];
  }
});
