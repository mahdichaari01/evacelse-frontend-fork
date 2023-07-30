import { getPackDetails } from "@/app/store/[packId]/fakeData";
import {
  ChevronLeftIcon,
  EvaluationIcon,
  SessionIcon,
} from "@/components/icons";

export default async function Page({ params }: { params: { packId: string } }) {
  const data = await getPackDetails(params.packId);

  return <>{JSON.stringify(data)}</>;
}
