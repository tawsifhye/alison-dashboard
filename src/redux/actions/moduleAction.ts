import { Data, UpdateModule } from "./../../interface/interface";
import { FinishedModule } from "interface/interface";

export const getSelectedModule = (payload: string) => {
  return {
    type: "SELECT_MODULE",
    payload,
  };
};
export const getSelectedModuleItem = (payload: number) => {
  return {
    type: "SELECT_INDEX",
    payload,
  };
};
export const getFinishedModules = (payload: FinishedModule[]) => {
  return {
    type: "GET_FINISHED_MODULES",
    payload,
  };
};
export const fetchApiModules = (payload: Data[]) => {
  return {
    type: "FETCH_API_DATA",
    payload,
  };
};
