import PropTypes from 'prop-types'
import {Scenes,getSceneId} from 'framework/store/selectors/scenes'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Menu from 'framework/components/Menu/Menu'
import {loadTabs} from 'framework/store/modules/globalReducer'
const mapStateToProps= (state,props) =>{
    return ({
scenes: Scenes(state),
id:getSceneId(state,props)
})}

function mapDispatchToProps(dispatch){
    return bindActionCreators({loadTabs},dispatch)
}
Menu.propTypes={
scenes:PropTypes.array.isRequired,
id:PropTypes.string.isRequired
}
export default connect(mapStateToProps, mapDispatchToProps)(Menu)