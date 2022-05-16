interface Payload  {
    id: string;
    rightAnswer: string;
}

export const submitQuiz = (payload: Payload) => {
    return {
      type: "SUBMIT_QUIZ",
      payload,
    };
  };