const initialState = {
    activeLabel: 'General'
}
const tabs =(state=initialState, action) =>{
    switch(action.type)
    {
        case 'CHANGE_TAB':
        { console.log(action.payload)
        return {...state,
        activeLabel:action.payload}}
        default:
        return state;
    }
}
export default tabs