export const getSelectedModule =(payload: string)=>{
    return{
        type: 'SELECT_MODULE',
        payload
    }
}
export const getSelectedModuleItem =(payload: number)=>{
    return{
        type: 'SELECT_INDEX',
        payload
    }
}