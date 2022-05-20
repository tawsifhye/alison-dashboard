import { moduleReducer } from './moduleReducer';
import { combineReducers } from "redux";
import { quizReducer } from "./quizReducer";

const reducers = combineReducers({
  answers: quizReducer,
  moduleId: moduleReducer
});

export default reducers;

export type State = ReturnType<typeof reducers>;