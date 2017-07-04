//Theme and Styling
// import * as colors from 'assets/colors'
// import { ICON_CLOSE } from 'assets/icons'
// import Icon from 'assets/Icon'
// import * as styled from '../styles/TabStyles'
/*class TabsContainer extends Component {
    icoColor(className) {
        if (className.includes('active'))
        { return (colors.ICON_ACTIVE_COLOR) }
        else {
            return (colors.ICON_DEFAULT_COLOR)
        }
    }

    render() {
        let active = (tab) => (tab.label === this.props.activeTab ? 'active' : '')
        const act = (tab) => { return active(tab).includes('active') ? true : false }
        var _this = this.props
        function isFixed(tab) {
            if (tab.fixed === undefined)
            { return null }
            if (!tab.fixed) {
                return <styled.TabCloseLink to="/"><styled.TabClose className={active(tab)} onClick={e => {
                    e.preventDefault()
                    _this.closeTab(tab)
                }}><Icon icon={ICON_CLOSE} active={act(tab)} size={12} /></styled.TabClose></styled.TabCloseLink>
            }
        }
        return (
            <styled.TabList>
                {_this.children.map((tab, index) => (
                    <styled.TabLabel key={index} className={active(tab)}>
                        <div onClick={(e) => { e.preventDefault(); this.props.setActive(tab) }}>
                            <styled.TabLink to={tab.location} className={active(tab)}>
                                <styled.TabDiv>
                                    <styled.TabIconDiv> <styled.TabIcon icon={tab.icon} active={act(tab)} /> </styled.TabIconDiv>
                                    {tab.label}
                                </styled.TabDiv>

                            </styled.TabLink>
                        </div>

                        {isFixed(tab)}

                    </styled.TabLabel>))}
            </styled.TabList>
        )
    }
}*/