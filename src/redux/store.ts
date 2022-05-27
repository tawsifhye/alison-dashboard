import { createWrapper } from "next-redux-wrapper";
import { applyMiddleware, createStore, } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import reducers from "./reducers";
import thunk from "redux-thunk";


const store = () => createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export const wrapper = createWrapper(store);