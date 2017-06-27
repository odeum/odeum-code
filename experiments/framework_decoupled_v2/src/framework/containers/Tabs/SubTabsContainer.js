import {connect} from 'react-redux'
import {getActiveTab} from 'framework/store/selectors/tabs'
import SubTabs from 'framework/components/Tabs/SubTabs'



const makeMapStateToProps = () =>{
    const mapStateToProps = (state,props) =>
    {   
        return {
            activeTab: getActiveTab(state,props),
            tabs: props.tabs
        }
    }
    return mapStateToProps
}

//TODO:Change to own function
function mapDispatchToProps(dispatch) {
    return {
        onTabClick:(id,label)=>{
            alert("Not implemented "+label)
        }
    }
    
}
const SubTabsContainer = connect(makeMapStateToProps,mapDispatchToProps)(SubTabs)

export default SubTabsContainer