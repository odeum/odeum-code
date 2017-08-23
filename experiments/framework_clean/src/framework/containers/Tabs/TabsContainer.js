import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// import { getActiveTab, getTabs} from '../selectors/tabsSelectors'
import { getInstance, getTabs } from 'framework/store/selectors/tabsSelectors'
import Tabs from 'framework/components/Tabs/Tabs'
import { tabClose, tabChange } from 'framework/store/modules/tabs'


const mapStateToProps = (state, props) => {
	return {
		tabs: getTabs(state, props),
		instanceID: getInstance(state, props).instanceID,
		activeTab: getInstance(state, props).activeTab
	}
}
function mapDispatchToProps(dispatch) {
	return {
		onTabClick: (instanceID, label) => {
			dispatch(tabChange(instanceID, label))
		},
		OnCloseClick: (id, tab) => {
			dispatch(tabClose(id, tab))
		}
	}
    
}
const TabsContainer = connect(mapStateToProps, mapDispatchToProps)(Tabs)
TabsContainer.propTypes = {
	tabs: PropTypes.array,
	instanceID: PropTypes.string.isRequired,
	activeTab: PropTypes.string
}
export default TabsContainer