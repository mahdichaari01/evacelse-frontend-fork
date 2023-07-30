import { getChapters } from "@/app/library/fakeData";
import { LibraryItem } from "@/app/library/components/LibraryItem";

export default async function Library() {
  const data = await getChapters();
  return (
    <>
      {data?.map((chapter) => (
        <LibraryItem
          {...chapter}
          key={chapter.id}
          SessionsLink={`${chapter.id}/sessions`}
          EvaluationsLink={`${chapter.id}/evaluations`}
        />
      ))}
    </>
  );
}
