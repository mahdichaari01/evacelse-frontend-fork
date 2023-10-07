import { LibraryItem } from "@/app/library/browse/components/LibraryItem";
import { ScrollableBox } from "@/components";
import { getChapters, getPacks } from "@/app/library/browse/data";
import Image from "next/image";
import NoPacks from "./assets/404.png";
import { CourseList } from "@/app/library/browse/components/CoursesList";
export default async function Library() {
  const packs = await getPacks();
  console.log(packs);
  if (packs.length <= 0)
    return (
      <div className={"h-[90%] w-full flex justify-center items-center"}>
        <Image
          src={NoPacks}
          alt={"No Packs Found"}
          className={"object-contain w-1/2 h-1/2 opacity-60 max-w-[400px]"}
        />
      </div>
    );

  const data = await Promise.all(
    packs.map((pack) =>
      getChapters(pack.id).then((chapters) =>
        chapters.map((chapter) => ({ ...chapter, pack })),
      ),
    ),
  );

  return <CourseList courses={data.flat()} />;
}
