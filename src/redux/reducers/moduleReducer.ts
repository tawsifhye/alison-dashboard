const initialState = {
    moduleId: '1',
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
        default:
            return state;
    }

}