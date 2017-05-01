const initialState = {
    activeLabel: 'General'
}
const tabs =(state=initialState, action) =>{
    switch(action.type)
    {
        // case 'CHANGE_TAB':
        // { console.log(action.payload)
        //     //@Move tabs reducer inside global as we do not need a separate reducer for tabs
        //     // if(action.payload==='')
        //     // return {...state,activeLabel:state.global.tabChildren[0].label}
        // return {...state,
        // activeLabel:action.payload}}
        default:
        return state;
    }
}
export default tabs