
import Immutable from 'immutable'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table, SortDirection, SortIndicator, Column, AutoSizer } from 'react-virtualized'
import { NoRows, HeaderCell, HeaderRow, AutoSizerDiv, Cell } from 'app/styles/TableStyles'
import { ListLink, ListAction } from 'app/styles/EplanStyles'
import ExportModal from 'app/components/eplan-appendix/Appendix/ExportModal'
import { exportAppendixToPlansystemAsync } from 'app/store/modules/eplan'
import Icon from 'framework/assets/Icon'
import * as iconname from 'framework/assets/icons'
import * as colors from 'framework/assets/colors'
import RowRenderer from './_rowRender'
import moment from 'moment'
import 'moment/locale/da'
import { getFilteredAppdx } from 'app/store/selectors/appendix'

function CellDataGetter({ dataKey, rowData }) {

	if (rowData !== undefined) {
		if (typeof rowData.get === "function") {
			return rowData.get(dataKey)
		} else {
			return rowData[dataKey]
		}
	}
}
class AppendixTable extends Component {
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
			useDynamicRowHeight: false,
			exportModalIsOpen: false,
			exportAppendix: null
		}
		this._actionRowRenderer = this._actionRowRenderer.bind(this)
		this._getRowHeight = this._getRowHeight.bind(this)
		this._headerRenderer = this._headerRenderer.bind(this)
		this._noRowsRenderer = this._noRowsRenderer.bind(this)
		this._onRowCountChange = this._onRowCountChange.bind(this)
		this._onScrollToRowChange = this._onScrollToRowChange.bind(this)
		this._rowClassName = this._rowClassName.bind(this)
		this._sort = this._sort.bind(this)
		this._rowClicked = this._rowClicked.bind(this)
		this._cellClicked = this._cellClicked.bind(this)
		this.openExportModal = this.openExportModal.bind(this)
		this.closeExportModal = this.closeExportModal.bind(this)
		this.onClickExportAppendix = this.onClickExportAppendix.bind(this)
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
			<div style={{ clear: 'both' }}>
{/* 				<ContentBox>
				</ContentBox> */}
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
										dataKey='appendixId'
										disableSort={!this._isSortEnabled()}
										headerRenderer={this._headerRenderer}
										cellDataGetter={CellDataGetter}
										cellRenderer={
											({ cellData }) => (<Cell>{cellData}</Cell>)
										}
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
									cellRenderer={
										({ cellData, columnData, dataKey, rowData }) => (<Cell onClick={() => this._cellClicked(rowData ? rowData : 'error')}>{cellData}</Cell>)
									}
									flexgrow={1}
								/>

								<Column
									width={width}
									maxWidth={100}
									label='Nummer'
									dataKey='number'
									disableSort={!this._isSortEnabled()}
									headerRenderer={this._headerRenderer}
									cellDataGetter={CellDataGetter}
									cellRenderer={
										({ cellData, columnData, dataKey, rowData }) => (<Cell onClick={() => this._cellClicked(rowData)}>{cellData}</Cell>)
									}
									flexgrow={1}
								/>

								<Column
									width={width}
									maxWidth={150}
									label='Oprettelsesdato'
									dataKey='created'
									headerRenderer={this._headerRenderer}
									cellDataGetter={CellDataGetter}
									cellRenderer={
										({ cellData, columnData, dataKey, rowData, rowIndex }) => (<Cell onClick={() => this._cellClicked(rowData)}>{moment(cellData).format('LL')}</Cell>)
									}
									flexgrow={1}
								/>

								<Column
									width={width}
									maxWidth={100}
									label='Status'
									dataKey='status'
									headerRenderer={this._headerRenderer}
									cellDataGetter={CellDataGetter}
									cellRenderer={
										({ cellData, columnData, dataKey, rowData, rowIndex }) =>
											(<Cell onClick={() => this._cellClicked(rowData)}>{cellData}</Cell>)
									}
								/>

								<Column
									width={width}
									maxWidth={300}
									label='Ansvarlig'
									dataKey='responsible'
									headerRenderer={this._headerRenderer}
									disableSort={!this._isSortEnabled()}
									cellDataGetter={CellDataGetter}
									cellRenderer={
										({ cellData, columnData, dataKey, rowData, rowIndex }) =>
											(<Cell onClick={() => this._cellClicked(rowData)}>{cellData}</Cell>)
									}
								/>

								<Column
									width={width}
									maxWidth={110}
									label="Handlinger"
									dataKey='actions'
									headerRenderer={this._headerRenderer}
									cellDataGetter={CellDataGetter}
									disableSort
									cellRenderer={
										this._actionRowRenderer
									}
								/>
							</Table>
						)}
					</AutoSizer>
				</AutoSizerDiv>
				<ExportModal
					exportModalIsOpen={this.state.exportModalIsOpen}
					closeExportModal={this.closeExportModal}
					appendix={this.state.exportAppendix}
					onClickExportAppendix={this.onClickExportAppendix}
				/>
				{/* <div style={{ marginTop: '30px' }}> 1,2,3......</div> */}
			</div>
		)
	}
	_rowClicked({
		event,
		index,
		rowData
	}) {
		this.props.onClickButton(rowData.appendixId)
	}
	_cellClicked(rowData) {
		this.props.onClickButton(rowData.appendixId)
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

	openExportModal(rowData) {
		this.setState({
			exportAppendix: rowData
		})
		this.setState({
			exportModalIsOpen: true
		})
	}

	closeExportModal() {
		this.setState({
			exportModalIsOpen: false
		})
	}
	//REFACTOR: No document.*function* , replace with styled components + state variables passed to the 
	async onClickExportAppendix() {
		document.getElementById('exportStepOne').style.display = 'none'
		document.getElementById('exportButton').style.display = 'none'
		document.getElementById('exportCloseButton').style.display = 'none'
		document.getElementById('exportStepTwo').style.display = 'block'
		document.getElementById('exportLoadingDiv').style.display = 'block'
		try {
			await this.props.exportToPlanSystem(this.state.exportAppendix.appendixId).then((response) => {

				document.getElementById('exportLoadingDiv').style.display = 'none'
				document.getElementById('exportCloseButton').style.display = 'block'

				if (response.errors === 0) {
					document.getElementById('exportStatusText').innerText = 'Tillæget blev indmeldt korrekt'
				} else {
					document.getElementById('exportStatusText').innerText = 'Tillæget blev ikke indmeldt, fik følgende fejl: ' + response.result
				}
			})
		} catch (e) {
			console.log('Error:' + e)
		}
	}

	_actionRowRenderer({ cellData,
		columnData,
		dataKey,
		rowData, rowIndex
	}) {
		if (rowData !== undefined) {
			return <Cell onClick={(e) => { }}>
				<ListAction><ListLink href={rowData.folderUrl} target="_blank"><Icon icon={iconname.ICON_VISIBILITY} size={20} color={colors.ICON_DEFAULT_COLOR} /></ListLink></ListAction>
				<ListAction><div onClick={() => this.openExportModal(rowData)}><Icon icon={iconname.ICON_CLOUD_UPLOAD} size={20} color={colors.ICON_DEFAULT_COLOR} /></div></ListAction>
			</Cell>
		}
		else
			return null
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
	list: getFilteredAppdx(state)
})
function mapDispatchToProps(dispatch) {
	return {
		exportToPlanSystem: async (id) => {
			return dispatch(await exportAppendixToPlansystemAsync(id))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AppendixTable)