import { SubmittedAnswer } from "interface/interface";


export const submitAnswer = (payload: SubmittedAnswer) => {
    return {
      type: "SUBMIT_QUIZ",
      payload,
    };
  };
export const showResult = (payload:boolean) => {
    return {
      type: "SHOW_RESULT",
      payload,
    };
  };