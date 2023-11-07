export interface QCM {
  choices: {
    [key: string]: string;
  };
  evaluation_id: string;
  question_date: string;
  question_number: string;
  question_responses: string[];
  question_text: string;
}
