
const initialState = {
    submittedAnswer: [],
    showResult: false,
}

interface Action {
    type: string;
    payload: {}| boolean;
}


export const quizReducer = (state = initialState, action:Action) => {
    switch (action.type) {
      case "SUBMIT_QUIZ":
        return {
          ...state,
          submittedAnswer: [...state.submittedAnswer, action.payload]
        };
      case "SHOW_RESULT":
        return {
          ...state,
          showResult: action.payload,
        };
      
      default:
        return state;
    }
  };