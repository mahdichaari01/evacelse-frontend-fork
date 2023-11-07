import axiosInstance from "@/lib/axios";
import { cache } from "react";

export interface Evaluation {
  chapter_id: string;
  id: string;
  name: string;
}

export const getEvaluations = cache(async (chapter_id: string) => {
  try {
    const response = await axiosInstance.get<Evaluation[]>(
      `/chapters/${chapter_id}/evaluations`,
    );
    return response.data;
  } catch (error) {
    return [];
  }
});
