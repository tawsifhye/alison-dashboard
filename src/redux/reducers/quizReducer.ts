const initialState = {
    submittedAnswer: []
}

interface Action {
    type: string;
    payload: {};
}


export const quizReducer = (state = initialState, action:Action) => {
    switch (action.type) {
      case "SUBMIT_QUIZ":
        return {
          ...state,
          submittedAnswer: [...state.submittedAnswer, action.payload]
        };
      
      default:
        return state;
    }
  };