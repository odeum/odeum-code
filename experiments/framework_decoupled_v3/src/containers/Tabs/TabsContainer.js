import { connect } from 'react-redux'
// import { getActiveTab, getTabs} from '../selectors/tabsSelectors'
import {getInstance} from 'store/selectors/tabsSelectors'
import Tabs from 'components/Tabs/Tabs'
import {tabChange,tabClose,navBack} from 'store/modules/tabs'
import {push} from 'react-router-redux'

const makeMapStateToProps = () => {
    const mapStateToProps = (state,props) => {
        return {
            id: props.id ,
            instance: getInstance(state,props),
            activeTab: getInstance(state,props).activeTab
        }
    }
   return mapStateToProps
}
function mapDispatchToProps(dispatch) {
    return {
        onTabClick: (id,label)=>{
            dispatch(tabChange(id,label))
        },
        OnCloseClick: (id,tab)=>{
            dispatch(tabClose(id,tab))
            dispatch(tabChange(id))//REFACTOR
            dispatch(push('/'))
        }
    }
    
}
const TabsContainer = connect(makeMapStateToProps, mapDispatchToProps)(Tabs)

export default TabsContainer