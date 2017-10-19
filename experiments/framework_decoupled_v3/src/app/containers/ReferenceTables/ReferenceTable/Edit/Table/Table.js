
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { deleteReferenceTableData } from 'app/store/modules/eplan'

import Immutable, { List, Map } from 'immutable'

import { Table, SortDirection, SortIndicator, Column, AutoSizer } from 'react-virtualized'
import { NoRows, HeaderCell, HeaderRow, AutoSizerDiv, ContentBox, Cell } from 'app/styles/TableStyles'

import Icon from 'framework/assets/Icon'
import { ListAction, ToastContainerStyled } from 'app/styles/EplanStyles'
import * as iconname from 'framework/assets/icons'
import * as colors from 'framework/assets/colors'
import RowRenderer from './_rowRender'
import { toast } from 'react-toastify'

class ReferenceTableEditList extends Component {
	static propTypes = {
		list: PropTypes.instanceOf(Immutable.List).isRequired,
		data: PropTypes.object.isRequired,
	};

	constructor(props, context) {
		super(props, context)

		this.state = {
			disableExtraRows: false,
			disableHeader: false,
			hideIndexRow: true,
			hideValue2: this.props.data !== null ? (this.props.data.field2Type === 0) : 0,
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
			hideValue2,
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
								ref='Table'
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
										cellRenderer={this._cellRenderer_default}
										width={width}
										flexgrow={1}
									/>
								}

								<Column
									width={width}
									minWidth={100}
									label='Relationsværdi'
									dataKey='valueKey'
									disableSort={!this._isSortEnabled()}
									headerRenderer={this._headerRenderer}
									cellRenderer={this._cellRenderer_click}
									flexgrow={1}
								/>

								<Column
									width={width}
									minWidth={300}
									label='Tekst værdi 1'
									dataKey='value'
									disableSort={!this._isSortEnabled()}
									headerRenderer={this._headerRenderer}
									cellRenderer={this._cellRenderer_click}
									flexgrow={1}
								/>
								{!hideValue2 &&
									<Column
										width={width}
										minWidth={300}
										label='Tekst værdi 2'
										dataKey='value2'
										disableSort={!this._isSortEnabled()}
										headerRenderer={this._headerRenderer}
										cellRenderer={this._cellRenderer_value2}
										flexgrow={1}
									/>
								}
								<Column
									width={width}
									minWidth={20}
									label='Handlinger'
									dataKey=''
									disableSort={!this._isSortEnabled()}
									headerRenderer={this._headerRenderer}
									cellRenderer={this._cellRenderer_actions}
									flexgrow={1}
								/>
							</Table>
						)}
					</AutoSizer>
				</AutoSizerDiv>
				<ToastContainerStyled
					position="top-right"
					autoClose={5000}
					hideProgressBar={true}
					newestOnTop={true}
					closeOnClick
					pauseOnHover
				/>
			</div>
		)
	}

	_cellClicked = (rowData) => (e) => {
		e.preventDefault()
		this.props.onClickButton(rowData)
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

	_cellRenderer_default = ({ cellData }) => {
		return (<Cell>{cellData}</Cell>)
	}
	_cellRenderer_click = ({ cellData, rowData }) => {
		return (<Cell onClick={this._cellClicked(rowData)}>{cellData}</Cell>)
	}
	_cellRenderer_value2 = ({ cellData, columnData, dataKey, rowData }) => {
		return (<Cell>{cellData.replace(/<\/?[^>]+(>|$)/g, "")}</Cell>)
	}
	_cellRenderer_actions = ({ rowData }) => {
		return (<Cell>
			<ListAction><Cell onClick={this._deleteReferenceTableValue(rowData)}><Icon icon={iconname.ICON_DELETE} size={20} color={colors.ICON_DEFAULT_COLOR} /></Cell></ListAction>
		</Cell>)
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

	_deleteReferenceTableValue = (data) => (e) => {
		e.preventDefault()
		if (window.confirm('Er du sikker på du vil slette: ' + data.valueKey + ' ' + data.value)) {
			this.props.deleteReferenceTableValue(this.props.referenceTableId, data.id)
			toast.success('Værdien er hermed slettet')
		}
	}
}

const mapStateToProps = (state, ownProps) => ({
	list: state.eplan.referenceTableValues[ownProps.referenceTableId] ? Map(state.eplan.referenceTableValues[ownProps.referenceTableId].data).toList() :  List(),
	data: state.eplan.referenceTables[ownProps.referenceTableId] || null,
	referenceTableId: ownProps.referenceTableId
})

function mapDispatchToProps(dispatch) {
	return {
		deleteReferenceTableValue: (referenceTableId, id) => {
			dispatch(deleteReferenceTableData(referenceTableId, id))
		},
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ReferenceTableEditList)