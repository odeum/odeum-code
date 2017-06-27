import config from 'custom_apps/config'

const LOAD_DEFAULT_TABS = '@@SCENES/LOAD_SCENE_TABS'
const CHANGE_TAB = "@@TAB_SYSTEM/CHANGE_TAB"
// const INIT_INSTANCE = "@@TAB_SYSTEM/INIT_TAB_INSTANCE"

export function tabChange(id, label) {
  return {
    type: CHANGE_TAB,
    payload: { id: id, label: label }
  }
}
export function loadTabs(label) {
  //TODO: Load tabs in a new instance with a new ID
  return { type: LOAD_DEFAULT_TABS, payload: label }
}

const initialState = {
  scenes: config.scenes,
  activeSceneId: '',
  activeTab: ''
}
var _ = require('lodash')
export default function global(state = initialState, action = {}) {
  switch (action.type) {
    // case INIT_INSTANCE:
    //   {
    //     return {
    //       ...state,
    //       tabInstance: state.tabInstance.concat(action.payload)
    //     }
    //   }
    case LOAD_DEFAULT_TABS:
      {
        let sceneFind = state.scenes.find((scene) => scene.name === action.payload)
        return { ...state, activeSceneId: sceneFind.id }
      }
    case CHANGE_TAB:
      {
        let findscene = _.find(state.scenes, (scene) => (scene.id === action.payload.id))
        findscene.activeTab = action.payload.label
        let newscenes = _(state.scenes).keyBy('id').set(findscene.id, findscene).values().value()
        console.log('New Scenes: ',newscenes)
        return {
          ...state,
          activeTab: action.payload.label
        }
      }
    default: return state
  }
};
