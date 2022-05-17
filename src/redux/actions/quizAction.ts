import { SubmittedAnswer } from "interface/interface";


export const submitAnswer = (payload: SubmittedAnswer) => {
    return {
      type: "SUBMIT_QUIZ",
      payload,
    };
  };