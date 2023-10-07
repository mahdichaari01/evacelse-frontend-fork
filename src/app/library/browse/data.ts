import axiosInstance from "@/lib/axios";
import { cache } from "react";

export interface Pack {
  id: string;
  subscription_id: string;
  name: string;
}

interface Chapter {
  id: string;
  name: string;
  pack_id: string;
}

interface Evaluation {
  id: string;
  name: string;
  chapter_id: string;
}

const getPacks = cache(async () => {
  try {
    const response = await axiosInstance.get<Pack[]>(`/packs`);
    return response.data;
  } catch (error) {
    return [];
  }
});

const getChapters = cache(async (pack_id: string) => {
  try {
    const response = await axiosInstance.get<Chapter[]>(
      `/packs/${pack_id}/chapters`,
    );
    const counts = await Promise.all(
      response.data.map(async (chapter) => getEvalsCount(chapter.id)),
    );
    const result = response.data.map((chapter, index) => ({
      ...chapter,
      evaluationsCount: counts[index],
    }));
    return result;
  } catch (error) {
    return [];
  }
});

const getEvalsCount = cache(async (chapter_id: string) => {
  try {
    const response = await axiosInstance.get<Evaluation[]>(
      `/chapters/${chapter_id}/evaluations`,
    );

    return response.data.length;
  } catch (error) {
    return 0;
  }
});

export { getPacks, getChapters };
