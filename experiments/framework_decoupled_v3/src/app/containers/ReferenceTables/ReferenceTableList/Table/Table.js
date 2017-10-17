
import Immutable from 'immutable'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Table, SortDirection, SortIndicator, Column, AutoSizer } from 'react-virtualized'
import { NoRows, HeaderCell, HeaderRow, AutoSizerDiv, ContentBox, Cell } from 'app/styles/TableStyles' //InputRow
import OnClickCell from 'app/components/eplan-appendix/OnClickCell'

//import { SearchDiv, SearchButtonDiv, SearchInput } from 'app/styles/TableStyles'
//import { SelectRowNr, SpanRowNr, Label } from 'app/styles/EplanStyles'
// import { ListLink } from 'app/styles/EplanStyles'
//import Icon from 'framework/assets/Icon'
//import { ICON_SEARCH } from 'framework/assets/icons'
import RowRenderer from './_rowRender'
// import moment from 'moment'
import { connect } from 'react-redux'
// import { List } from 'immutable'
import { /* getReferences,  */getFilteredRefs } from 'app/store/selectors/eplan'

function CellDataGetter({ dataKey, rowData }) {

	if (rowData !== undefined) {
		if (typeof rowData.get === "function") {
			return rowData.get(dataKey)
		} else {
			return rowData[dataKey]
		}
	}
}
class ReferenceTable extends Component {
	static propTypes = {
		list: PropTypes.instanceOf(Immutable.List).isRequired
	};

	constructor(props, context) {
		super(props, context)
		this.state = {
			disableExtraRows: false,
			disableHeader: false,
			hideIndexRow: true,
			overscanRowCount: 10,
			rowHeight: 40,
			rowCount: this.props.list.size,
			scrollToIndex: undefined,
			sortBy: '',
			sortDirection: SortDirection.ASC,
			useDynamicRowHeight: false
		}
		this._getRowHeight = this._getRowHeight.bind(this)
		this._headerRenderer = this._headerRenderer.bind(this)
		this._noRowsRenderer = this._noRowsRenderer.bind(this)
		this._onRowCountChange = this._onRowCountChange.bind(this)
		this._onScrollToRowChange = this._onScrollToRowChange.bind(this)
		this._rowClassName = this._rowClassName.bind(this)
		this._sort = this._sort.bind(this)
		this._cellClicked = this._cellClicked.bind(this)
	}

	componentWillUpdate = (nextProps, nextState) => {
		if (this.props.list.size !== nextProps.list.size) {
			this._onRowCountChange(nextProps.list.size)
		}
	}

	render() {
		const {
			disableHeader,
			headerHeight,
			hideIndexRow,
			overscanRowCount,
			rowHeight,
			rowCount,
			scrollToIndex,
			sortBy,
			sortDirection
		} = this.state

		const { list } = this.props
		const sortedList = this._isSortEnabled()
			? list
				.sortBy(item => item[sortBy])
				.update(list =>
					sortDirection === SortDirection.DESC
						? list.reverse()
						: list
				)
			: list

		const rowGetter = ({ index }) => this._getDatum(sortedList, index)

		return (
			<div style={{ width: '100%', height: '100%', clear: 'both' }}>
				<ContentBox>
				</ContentBox>
				<AutoSizerDiv>
					<AutoSizer >
						{({ height, width }) => (
							<Table
								ref={'Table'}
								disableHeader={disableHeader}
								headerHeight={headerHeight}
								height={height}
								headerRowRenderer={this._defaultHeaderRowRenderer}
								noRowsRenderer={this._noRowsRenderer}
								overscanRowCount={overscanRowCount}
								rowRenderer={RowRenderer}
								rowHeight={rowHeight}
								rowGetter={rowGetter}
								rowCount={rowCount}
								scrollToIndex={scrollToIndex}
								sort={this._sort}
								sortBy={sortBy}
								sortDirection={sortDirection}
								width={width}>
								{!hideIndexRow &&

									<Column
										label='ID'
										dataKey='id'
										disableSort={!this._isSortEnabled()}
										headerRenderer={this._headerRenderer}
										cellDataGetter={CellDataGetter}
										cellRenderer={this._cellRenderer_default}
										width={width}
										flexgrow={1}
									/>
								}

								<Column
									width={width}
									minWidth={400}
									label='Navn'
									dataKey='name'
									disableSort={!this._isSortEnabled()}
									headerRenderer={this._headerRenderer}
									cellDataGetter={CellDataGetter}
									cellRenderer={this._cellRenderer_click}
									flexgrow={1}
								/>

								<Column
									width={width}
									minWidth={400}
									label='Navn2'
									dataKey='action'
									disableSort={!this._isSortEnabled()}
									headerRenderer={this._headerRenderer}
									cellDataGetter={CellDataGetter}
									cellRenderer={this._cellRenderer_click}
									flexgrow={1}
								/>
							</Table>
						)}
					</AutoSizer>
				</AutoSizerDiv>
			</div>
		)
	}

	_cellClicked(rowData) {
		this.props.onClickButton(rowData.id)
	}
	_defaultHeaderRowRenderer({
		className,
		columns,
		style
	}) {
		return <HeaderRow width={style.width}>
			{columns}
		</HeaderRow>
	}

	_getDatum(list, index) {
		return list.get(index % list.size)
	}

	_getRowHeight({ index }) {
		const { list } = this.props

		return this._getDatum(list, index).size
	}

	_headerRenderer({
		columnData,
		dataKey,
		disableSort,
		label,
		sortBy,
		sortDirection
	}) {
		return (
			<HeaderCell>
				{label}
				{sortBy === dataKey &&
					<SortIndicator sortDirection={sortDirection} />
				}
			</HeaderCell>
		)
	}

	_cellRenderer_default = ({ cellData }) => (<Cell>{cellData}</Cell>)
	_cellRenderer_click = ({ cellData, rowData }) => {
		return (<OnClickCell data={rowData} cellOnClick={this._cellClicked}>{cellData}</OnClickCell>)
	}

	_isSortEnabled() {
		const { list } = this.props
		const { rowCount } = this.state

		return rowCount <= list.size
	}

	_noRowsRenderer() {
		return (
			<NoRows>
				No rows
			</NoRows>
		)
	}

	_onRowCountChange(listSize) {
		const rowCount = parseInt(listSize, 10) || 0

		this.setState({ rowCount })
	}

	_onScrollToRowChange(event) {
		const { rowCount } = this.state
		let scrollToIndex = Math.min(rowCount - 1, parseInt(event.target.value, 10))

		if (isNaN(scrollToIndex)) {
			scrollToIndex = undefined
		}

		this.setState({ scrollToIndex })
	}

	_rowClassName({ index }) {
		if (index < 0) {
			return 'evenRow'
		} else {
			return index % 2 === 0 ? 'evenRow' : 'oddRow'
		}
	}

	_sort({ sortBy, sortDirection }) {
		this.setState({ sortBy, sortDirection })
	}

	_updateUseDynamicRowHeight(value) {
		this.setState({
			useDynamicRowHeight: value
		})
	}
}

const mapStateToProps = (state, ownProps) => ({
	list: getFilteredRefs(state)
})

function mapDispatchToProps(dispatch) {
	return {
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ReferenceTable)