import { moduleReducer } from './moduleReducer';
import { combineReducers } from "redux";
import { quizReducer } from "./quizReducer";

const reducers = combineReducers({
  answers: quizReducer,
  moduleInfo: moduleReducer
});

export default reducers;

export type State = ReturnType<typeof reducers>;