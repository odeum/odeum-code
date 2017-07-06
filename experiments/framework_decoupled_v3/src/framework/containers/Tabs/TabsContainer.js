import { connect } from 'react-redux'
// import { getActiveTab, getTabs} from '../selectors/tabsSelectors'
import {getInstance,getTabs} from 'framework/store/selectors/tabsSelectors'
import Tabs from 'framework/components/Tabs/Tabs'
import {tabClose,tabChange} from 'framework/store/modules/tabs'

//REFACTOR each prop to own function
/*
id: getInstanceId(),
activeTab:getInstanceActiveTab()
*/
const mapStateToProps = (state,props) => {
        return {
            tabs: getTabs(state,props),
            id: getInstance(state,props).id,
            activeTab: getInstance(state,props).activeTab
        }
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
const TabsContainer = connect(mapStateToProps, mapDispatchToProps)(Tabs)

export default TabsContainer