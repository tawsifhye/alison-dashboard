import { FinishedModule } from 'interface/interface';
const initialState :InitialState = {
    moduleResourceIndex: 0,
    finishedModules: [],
}

interface InitialState {
    moduleResourceIndex: number;
    finishedModules: FinishedModule[],
}

interface Action {
    type: string;
    payload: string;
}
export const moduleReducer = (state=initialState ,action:Action)=>{

    switch(action.type){
        case 'SELECT_MODULE':{
            return{
                ...state,
                moduleId: action.payload
            }
        }

        case 'SELECT_INDEX':{
            return{
                ...state,
                moduleResourceIndex: action.payload
            }
        }
        case 'FETCH_API_DATA':{
            return{
                ...state,
                moduleData: action.payload
            }
        }
        case 'GET_FINISHED_MODULES':{
            return{
                ...state,
                finishedModules:  action.payload
            }
        }
       
        default:
            return state;
    }

}