import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { ImageBrowserModalWindow, ModalHeader, ModalContent, ModalHeaderIcon, ModalHeaderTitle, ModalHeaderClose } from 'app/styles/EplanStyles'
import { Table, SortDirection, SortIndicator, Column, AutoSizer } from 'react-virtualized'
import { NoRows, HeaderCell, HeaderRow, Cell } from 'app/styles/TableStyles' //InputRow
import RowRenderer from 'app/containers/eplan-appendix/AppendixList/Table/_rowRender'
import moment from 'moment'
import 'moment/locale/da'

import * as colors from 'framework/assets/colors'
import Icon from 'framework/assets/Icon'
import * as iconname from 'framework/assets/icons'

class ImageBrowser extends Component {
	constructor(props) {
		super(props)

		this.state = {
			disableExtraRows: false,
			disableHeader: false,
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
		this._rowClicked = this._rowClicked.bind(this)
	}

	render() {
		const {
			disableHeader,
			headerHeight,
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
			<ImageBrowserModalWindow isOpen={this.props.imageBrowserModalIsOpen} onRequestClose={this.props.closeImageBrowserModal} contentLabel="Billeder">
				<ModalHeader>
					<ModalHeaderIcon>
						<Icon icon={iconname.ICON_ADD_CIRCLE} size={30} color={colors.MODAL_HEADER_ICON} active={true} />
					</ModalHeaderIcon>
					<ModalHeaderTitle>Billeder</ModalHeaderTitle>
					<ModalHeaderClose onClick={(e) => { e.preventDefault(); this.props.closeImageBrowserModal() }}>
						<Icon icon={iconname.ICON_CLOSE} size={30} color={colors.MODAL_HEADER_ICON} active={true} />
					</ModalHeaderClose>
				</ModalHeader>
				<ModalContent>
					<AutoSizer style={{ overflow: 'hidden', border: 'solid 1px red' }}>
						{({ width }) => (
							<Table
								ref="Table"
								disableHeader={disableHeader}
								headerRowRenderer={this._defaultHeaderRowRenderer}
								headerHeight={headerHeight}
								noRowsRenderer={this._noRowsRenderer}
								overscanRowCount={overscanRowCount}
								rowHeight={rowHeight}
								rowGetter={rowGetter}
								rowCount={rowCount}
								scrollToIndex={scrollToIndex}
								sort={this._sort}
								sortBy={sortBy}
								sortDirection={sortDirection}
								width={width}
								height={480}
								rowRenderer={RowRenderer}
								onRowClick={this._rowClicked}
							>
								<Column
									dataKey="name"
									label="Filnavn"
									disableSort={!this._isSortEnabled()}
									headerRenderer={this._headerRenderer}
									width={width}
									maxWidth={(width / 4)}
									cellRenderer={
										({ cellData, columnData, dataKey, rowData, rowIndex }) =>
											(<Cell>{cellData}</Cell>)
									}
								/>
								<Column
									dataKey="size"
									label="Størrelse"
									disableSort={!this._isSortEnabled()}
									headerRenderer={this._headerRenderer}
									width={width}
									maxWidth={(width / 4)}
									cellRenderer={
										({ cellData, columnData, dataKey, rowData, rowIndex }) =>
											(<Cell>{cellData}</Cell>)
									}
								/>
								<Column
									dataKey="type"
									label="Type"
									disableSort={!this._isSortEnabled()}
									headerRenderer={this._headerRenderer}
									width={width}
									maxWidth={(width / 4)}
									cellRenderer={
										({ cellData, columnData, dataKey, rowData, rowIndex }) =>
											(<Cell>{cellData}</Cell>)
									}
								/>
								<Column
									dataKey="lastmod"
									label="Sidst ændret"
									disableSort={!this._isSortEnabled()}
									headerRenderer={this._headerRenderer}
									width={width}
									maxWidth={(width / 4)}
									cellRenderer={
										({ cellData, columnData, dataKey, rowData, rowIndex }) =>
											(<Cell>{ (cellData) ? moment(cellData).format('LL') : "" }</Cell>)
									}
								/>
							</Table>
						)}
					</AutoSizer>
				</ModalContent>
			</ImageBrowserModalWindow>
		)
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
	_noRowsRenderer() {
		return (
			<NoRows>
				No rows
			</NoRows>
		)
	}
	_onRowCountChange(event) {
		const rowCount = parseInt(event.target.value, 10) || 0

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
	_isSortEnabled() {
		const { rowCount } = this.state
		const { list } = this.props

		return rowCount <= list.size
	}
	_sort({ sortBy, sortDirection }) {
		this.setState({ sortBy, sortDirection })
	}
	_getDatum(list, index) {
		return list.get(index % list.size)
	}

	_getRowHeight({ index }) {
		const { list } = this.props

		return this._getDatum(list, index).size
	}
	_rowClicked({
		event,
		index,
		rowData
	}) {
		if (rowData.type === 'dir') {
			console.log('is dir')
		} else {
			console.log(' is file')
		}

		this.props.insertImage()
		//console.log(rowData)
		// this.props.onClickButton(rowData.appendixId)
	}
}

ImageBrowser.propTypes = {
	imageBrowserModalIsOpen: PropTypes.bool.isRequired,
	closeImageBrowserModal: PropTypes.func.isRequired,
	insertImage: PropTypes.func.isRequired
}

export default ImageBrowser
