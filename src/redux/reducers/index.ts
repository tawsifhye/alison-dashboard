import { combineReducers } from "redux";
import { quizReducer } from "./quizReducer";

const reducers = combineReducers({
  answer: quizReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;