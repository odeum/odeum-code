import PropTypes from 'prop-types'
import Tabs from 'components/Tabs/Tabs'
//Redux
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { closeTab, updateTab, setActive } from 'store/modules/tabs'


const mapStateToProps = (state) => ({
    activeTab: state.tabs.activeTab
})

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        updateTab,
        setActive,
        closeTab
    }, dispatch)
}
const TabsContainer = connect(mapStateToProps, mapDispatchToProps)(Tabs)

TabsContainer.propTypes = {
    children: PropTypes.array,
    activeTab: PropTypes.string,
}
export default TabsContainer