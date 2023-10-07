"use client";

import { LibraryItem } from "@/app/library/browse/components/LibraryItem";
import { useMemo, useState } from "react";
import { Input, Select } from "@chakra-ui/react";
import { Pack } from "@/app/library/browse/data";

interface CourseListProps {
  courses: {
    id: string;
    name: string;
    evaluationsCount: number;
    pack: Pack;
  }[];
}
export const CourseList = ({ courses }: CourseListProps) => {
  const [currentPack, setCurrentPack] = useState("all");
  const PacksList = useMemo(() => {
    let map = new Map<string, Pack>();
    courses.forEach((course) => {
      map.set(course.pack.id, course.pack);
    });
    return Array.from(map.values());
  }, [courses]);
  const [search, setSearch] = useState("");
  return (
    <>
      <div
        className={
          "w-full h-fit flex flex-row justify-between pt-[2rem] px-7 sm:px-20"
        }
      >
        <Input
          placeholder={"recherche"}
          variant="outline"
          colorScheme={"teal"}
          bg={"white"}
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          // borderColor={"#009e96"}
          // borderWidth={"2px"}
          fontWeight={"medium"}
          width={"200px"}
          sx={{
            "&:focus": {
              borderColor: "#009e96",
              borderWidth: "2px",
              boxShadow: "none",
            },
          }}
        ></Input>
        <Select
          onChange={(e) => {
            setCurrentPack(e.target.value);
          }}
          variant="outline"
          colorScheme={"teal"}
          bg={"white"}
          // borderColor={"#009e96"}
          // borderWidth={"2px"}
          fontWeight={"medium"}
          width={"200px"}
          sx={{
            "&:focus": {
              borderColor: "#009e96",
              borderWidth: "2px",
              boxShadow: "none",
            },
          }}
        >
          <option value="all">Tous les packs</option>
          {PacksList.map((pack) => (
            <option key={pack.id} value={pack.id}>
              {pack.id}
            </option>
          ))}
        </Select>
      </div>
      <div className=" py-11 px-7 sm:px-20 grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] justify-items-center gap-12">
        {courses
          ?.filter(
            (course) =>
              (currentPack === "all" ? true : course.pack.id === currentPack) &&
              course.name.toLowerCase().includes(search.toLowerCase()),
          )
          .map((course) => (
            <LibraryItem
              {...course}
              key={course.id}
              EvaluationsLink={`course/${course.id}/evaluations`}
            />
          ))}
      </div>
    </>
  );
};
