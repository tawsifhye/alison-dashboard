export interface SubmittedAnswer {
    questionId: string;
    selectedAnswer: string;
    rightAnswer: string;
}

export const submitAnswer = (payload: SubmittedAnswer) => {
    return {
      type: "SUBMIT_QUIZ",
      payload,
    };
  };