import {connect} from 'react-redux'
import {getActiveTab,getTabs} from 'framework/store/selectors/tabs'
import Tabs from 'framework/components/Tabs/Tabs'
import {tabChange} from 'framework/store/modules/globalReducer'

const makeMapStateToProps = () =>{
    const mapStateToProps = (state,props) =>
    {   
        return {
            activeTab: getActiveTab(state,props),
            tabs: getTabs(state,props)
        }
    }
    return mapStateToProps
}

function mapDispatchToProps(dispatch) {
    return {
        onTabClick:(id,label)=>{
            dispatch(tabChange(id,label))
        }
    }
    
}
const TabsContainer = connect(makeMapStateToProps,mapDispatchToProps)(Tabs)

export default TabsContainer