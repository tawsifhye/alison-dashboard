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

export const fetchApiData = () => {
    return async (dispatch:any) => {
        const response = await fetch('https://alison-dashboard.vercel.app/fakeData.json')
            .then(res => res.json());
        dispatch({
            type: 'FETCH_API_DATA',
            payload: response
        })
    }
}