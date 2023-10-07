import { randBoolean, randLine, randNumber } from "@ngneat/falso";
import { Activity } from "@/components/QuestionsViewComponents";

function getUnitType(p: number): "QCM" | "QROC" | "Cas Clinique" {
  if (p < 0.3) {
    return "QCM";
  } else if (p < 0.6) {
    return "QROC";
  } else {
    return "Cas Clinique";
  }
}

const FakeQuestions = Array.from({ length: 100 }, (_, i) => i + 1).map(
  (id) => ({
    id: id.toString(),
    questionStatement: randLine({ lineCount: randNumber({ min: 1, max: 4 }) }),
    answers: Array.from(
      { length: randNumber({ min: 3, max: 7 }) },
      (_, i) => i + 1,
    ).map((id) => ({
      id,
      answerStatement: randLine({ lineCount: randNumber({ min: 1, max: 2 }) })
        .split("\n")
        .join(),
      isCorrect: randBoolean(),
    })),
    isAnswered: randBoolean(),
    // generate type which can be QCM QROC or Cas Clinique
    type: getUnitType(Math.random()),
  }),
);

export const getQuestions = (id?: string) => {
  if (!id) throw Error("Evaluation ID is required");
  return new Promise<Activity[]>((resolve) => {
    setTimeout(() => {
      resolve(
        FakeQuestions.map((q) => {
          const { id, isAnswered, type } = q;
          return { id, isAnswered, type };
        }),
      );
    }, 1000);
  });
};
