import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// import { getActiveTab, getTabs} from '../selectors/tabsSelectors'
import {getInstance,getTabs} from 'framework/store/selectors/tabsSelectors'
import Tabs from 'framework/components/Tabs/Tabs'
import {tabClose,tabChange} from 'framework/store/modules/tabs'


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
TabsContainer.propTypes = {
    tabs: PropTypes.array,
    id: PropTypes.string.isRequired,
    activeTab: PropTypes.string
}
export default TabsContainer