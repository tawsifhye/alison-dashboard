export const getSelectedModule =(payload: string)=>{
    return{
        type: 'SELECT_MODULE',
        payload
    }
}