"use client";

import QuestionLayout from "@/components/Question/QuestionLayout";
import { QCMAnswer, QuestionStatement } from "@/components/Question";
import { QCM } from "@/types";
import { useState } from "react";
import { isAnswered, setAnswered, useIsAnswered } from "@/lib/isAnswered";

export function Question({
  qcms,
  questionIndex,
}: {
  qcms: QCM[];
  questionIndex: number;
}) {
  const userAnswersManager = useIsAnswered(qcms[questionIndex].question_number);
  const questionIsAnswered = userAnswersManager.isAnswered(
    qcms[questionIndex].question_number,
  );
  const [reveal, setReveal] = useState(questionIsAnswered);
  return (
    <>
      <QuestionLayout
        number_of_questions={qcms.length}
        index={questionIndex}
        is_favorite={false}
        verify={() => {
          if (!questionIsAnswered)
            userAnswersManager.setAnswered(qcms[questionIndex].question_number);
          setReveal((p) => !p);
        }}
        previous={
          questionIndex === 0
            ? undefined
            : qcms[questionIndex - 1].question_number
        }
        next={
          questionIndex + 1 >= qcms.length
            ? undefined
            : qcms[questionIndex + 1].question_number
        }
      >
        <QuestionStatement content={qcms[questionIndex].question_text} />
        <QCMAnswer
          answers={Object.entries(qcms[questionIndex].choices)
            .sort()
            .map((e) => e[1])}
          correct_answers={qcms[questionIndex].question_responses.map((c) =>
            alphabetToIndex(c),
          )}
          reveal={reveal}
          questionID={qcms[questionIndex].question_number}
        />
      </QuestionLayout>
    </>
  );
}

function alphabetToIndex(s: string) {
  s = s.toUpperCase();
  const index = s.charCodeAt(0);
  return (index - 65) % 26;
}
