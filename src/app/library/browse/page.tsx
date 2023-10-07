import { getChapters } from "@/app/library/fakeData";
import { LibraryItem } from "@/app/library/components/LibraryItem";
import { ScrollableBox } from "@/components";

export default async function Library() {
  const data = await getChapters();
  return (
    <ScrollableBox className="w-full h-full ui-part">
      <div className=" py-11 px-7 sm:px-20 grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] justify-items-center gap-12">
        {data?.map((chapter) => (
          <LibraryItem
            {...chapter}
            key={chapter.id}
            SessionsLink={`${chapter.id}/sessions`}
            EvaluationsLink={`${chapter.id}/evaluations`}
          />
        ))}
      </div>
    </ScrollableBox>
  );
}
