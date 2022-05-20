const initialState = {
    moduleId: '1',
    moduleResourceIndex: 0,
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
        default:
            return state;
    }

}