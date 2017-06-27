// import {createSelector} from 'reselect'

export const getSceneId = (state,props) => {
    console.log(state,props)
    return state.global.activeSceneId
}
export const Scenes = (state) => state.global.scenes
export const getSceneTabs = (state,props) => state.scenes.find(scene => scene.name === props.label)
// export const scenesSelector = createSelector(
//     Scenes, 
//     (label) => Scenes.find(scene => scene.name === label) || Scenes[0]
// )