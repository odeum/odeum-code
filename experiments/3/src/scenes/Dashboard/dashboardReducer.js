import * as actions from './dashboardActionTypes'
let nextIntId =0
const initialState={
tabs:[{
       id:nextIntId++,
       label:'Generelt',
       icon:'generelt',
       children:['tasks','settings'],
       fixed:true
    },
        {
       id:nextIntId++,
       label:'Felter',
       icon:'felter',
       children:[],
        fixed:true
    },
        {
       id:nextIntId++,
       label:'Arbejdsgang',
       icon:'arbejdsgang',
       children:[],
       fixed:true
    },
        {
       id:nextIntId++,
       label:'Brugere',
       icon:'brugere',
       children:[],
       fixed:true
    }],
    selected:0
}

const dashboard = (state=initialState,action) =>{
    switch(action.type)
    {
        case actions.OPEN_TAB:
        console.log('------------------------------------');
        console.log('OPEN_TAB');
        console.log('------------------------------------');
        return {...state,
        tabs: state.tabs.concat({id:nextIntId++,label:'text',icon:'add',children:[],fixed:false})}
      
        case actions.CLOSE_TAB:
        console.log('------------------------------------');
        console.log('CLOSE_TAB');
        console.log(action.payload);
        console.log('------------------------------------');
        // if(tabToBeRem.fixed === false)
        // {
        //     state.tabs.splice(5, 1)
        // }
        nextIntId--
        return {...state,
        tabs: state.tabs.filter(item => item.id !== action.payload.id)}
            case actions.CHANGE_TAB:
            {
                console.log('changeTabReducer:' + action.payload)
                return {
                    ...state,
                    selected: action.payload
                }
            }
        default:
        return state;
    }
}

export default dashboard