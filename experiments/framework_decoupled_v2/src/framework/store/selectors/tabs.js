// import {createSelector} from 'reselect'
const getScene=(state,id)=>{
    return state.global.scenes.find((scene)=> scene.id ===id)
}
export const getActiveTab=(state,props) =>{
    return state.global.activeTab
}
export const getTabs = (state,props) => {
    //TODO: Get the tabs from the scene.name passed in props

    var tabs = getScene(state,props.id)
    console.log(props, 'TabsSelector')
    return tabs ? tabs.tabs : []
    /*return state.global.scenes[props.id].tabs*/}
