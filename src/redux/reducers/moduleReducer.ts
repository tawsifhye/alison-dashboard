import { Data, FinishedModule } from "interface/interface";
const initialState: InitialState = {
  moduleResourceIndex: 0,
  finishedModules: [],
  moduleData: [],
};

interface InitialState {
  moduleResourceIndex: number;
  finishedModules: FinishedModule[];
  moduleData: Data[];
}

interface Action {
  type: string;
  payload: string;
}
export const moduleReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "SELECT_MODULE": {
      return {
        ...state,
        moduleId: action.payload,
      };
    }

    case "SELECT_INDEX": {
      return {
        ...state,
        moduleResourceIndex: action.payload,
      };
    }
    case "GET_FINISHED_MODULES": {
      return {
        ...state,
        finishedModules: action.payload,
      };
    }
    case "FETCH_API_DATA": {
      return {
        ...state,
        moduleData: action.payload,
      };
    }
    default:
      return state;
  }
};
