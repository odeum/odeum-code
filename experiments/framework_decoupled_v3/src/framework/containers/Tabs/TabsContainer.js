import { connect } from 'react-redux'
// import { getActiveTab, getTabs} from '../selectors/tabsSelectors'
import {getInstance} from 'framework/store/selectors/tabsSelectors'
import Tabs from 'framework/components/Tabs/Tabs'
import {tabChange,tabClose} from 'framework/store/modules/tabs'


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
            
        }
    }
    
}
const TabsContainer = connect(makeMapStateToProps, mapDispatchToProps)(Tabs)

export default TabsContainer