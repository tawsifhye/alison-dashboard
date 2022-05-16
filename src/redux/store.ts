import { createWrapper } from "next-redux-wrapper";
import { applyMiddleware, createStore, } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import reducers from "./reducers";


const store = () => createStore(reducers, composeWithDevTools());

export const wrapper = createWrapper(store);