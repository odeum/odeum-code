
import Immutable from 'immutable'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {Table,SortDirection,SortIndicator,Column,AutoSizer} from 'react-virtualized'
import {Col,ColId,ColName,ColStatus,InputRow,LabeledInput,HeaderCell} from 'app/styles/TableStyles'
import './Table.css'
export default class TableExample extends Component {
  static propTypes = {
    list: PropTypes.instanceOf(Immutable.List).isRequired
  };

  constructor (props, context) {
    super(props, context)
    console.log(props)
    this.state = {
      disableExtraRows:true,
      disableHeader: false,
      headerHeight: 30,
      height: 270,
      hideIndexRow: false,
      overscanRowCount: 10,
      rowHeight: 40,
      rowCount: this.props.list.size,
      scrollToIndex: undefined,
      sortBy: '',
      sortDirection: SortDirection.ASC,
      useDynamicRowHeight: false
    }
    this._linkRowRenderer = this._linkRowRenderer.bind(this)
    this._getRowHeight = this._getRowHeight.bind(this)
    this._headerRenderer = this._headerRenderer.bind(this)
    this._noRowsRenderer = this._noRowsRenderer.bind(this)
    this._onRowCountChange = this._onRowCountChange.bind(this)
    this._onScrollToRowChange = this._onScrollToRowChange.bind(this)
    this._rowClassName = this._rowClassName.bind(this)
    this._sort = this._sort.bind(this)
  }

  render () {
    const {
      disableExtraRows,
      disableHeader,
      headerHeight,
      height,
      hideIndexRow,
      overscanRowCount,
      rowHeight,
      rowCount,
      scrollToIndex,
      sortBy,
      sortDirection,
      useDynamicRowHeight
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

        <div className={'ContentBox'}>
                    {/*<label className={'checkboxLabel'}>
            <input
              aria-label='Use dynamic row heights?'
              checked={useDynamicRowHeight}
              className={'checkbox'}
              type='checkbox'
              onChange={event => this._updateUseDynamicRowHeight(event.target.checked)}
            />
            Use dynamic row heights?
          </label>*/}

          <label className={'checkboxLabel'}>
            <input
              aria-label='Hide index?'
              checked={hideIndexRow}
              className={'checkbox'}
              type='checkbox'
              onChange={event => this.setState({ hideIndexRow: event.target.checked })}
            />
            Hide index?
          </label>

          <label className={'checkboxLabel'}>
            <input
              aria-label='Hide header?'
              checked={disableHeader}
              className={'checkbox'}
              type='checkbox'
              onChange={event => this.setState({ disableHeader: event.target.checked })}
            />
            Hide header?
          </label>
          <label>
            <input
             aria-label='Hide header?'
              checked={disableExtraRows}
              className={'checkbox'}
              type='checkbox'
              onChange={event => this.setState({ disableExtraRows: event.target.checked })}
              />
              Hide debug options?
          </label>
          {!disableExtraRows &&
        <InputRow>
        <div>
        <label>Row Numbers</label> <br/>
          <LabeledInput
            label='Num rows'
            name='rowCount'
            onChange={this._onRowCountChange}
            value={rowCount}
          />
          </div>
          <div>
          <label>Scroll to:</label> <br/>
          <LabeledInput
            label='Scroll to'
            name='onScrollToRow'
            placeholder='Index...'
            onChange={this._onScrollToRowChange}
            value={scrollToIndex || ''}
          /></div>
          <div>
            <label>List height</label> <br/>
            <LabeledInput
            label='List height'
            name='height'
            onChange={event => this.setState({ height: parseInt(event.target.value, 10) || 1 })}
            value={height}
            />
          </div>
          <div><label>Row Height</label><br/>
          <LabeledInput
            disabled={useDynamicRowHeight}
            label='Row height'
            name='rowHeight'
            onChange={event => this.setState({ rowHeight: parseInt(event.target.value, 10) || 1 })}
            value={rowHeight}
          />
          </div>
           
          <div><label>Header Height</label><br/>
          <LabeledInput
            label='Header height'
            name='headerHeight'
            onChange={event => this.setState({ headerHeight: parseInt(event.target.value, 10) || 1 })}
            value={headerHeight}
          />
          </div>
            <div><label>Header Height</label><br/>
          <LabeledInput
            label='Overscan'
            name='overscanRowCount'
            onChange={event => this.setState({ overscanRowCount: parseInt(event.target.value, 10) || 0 })}
            value={overscanRowCount}
          />
          </div>
        </InputRow>}
          <AutoSizer disableHeight>
            {({ width }) => (
              <Table
                ref='Table'
                disableHeader={disableHeader}
                headerClassName={'Header'}
                headerHeight={headerHeight}
                height={height}
                noRowsRenderer={this._noRowsRenderer}
                overscanRowCount={overscanRowCount}
                rowClassName={this._rowClassName}
                rowHeight={useDynamicRowHeight ? this._getRowHeight : rowHeight}
                rowGetter={rowGetter}
                rowCount={rowCount}
                scrollToIndex={scrollToIndex}
                sort={this._sort}
                sortBy={sortBy}
                sortDirection={sortDirection}
                width={width}
              >
                {!hideIndexRow &&
                  <Column
                    className={'headerColumn'}
                    label='ID'
                    headerRenderer={this._headerRenderer}
                    cellRenderer={
                      ({cellData, columnData, dataKey, rowData }) => (<ColId>{cellData}</ColId>)
                    }
                    dataKey='appendixid'
                    disableSort={!this._isSortEnabled()}
                    width={50}
                  />
                }
                <Column
                  label='Name'
                  dataKey='name'
                  className='nameRow'
                  disableSort={!this._isSortEnabled()}
                  headerRenderer={this._headerRenderer}
                  cellRenderer={
                    ({cellData,columnData, dataKey, rowData})=>(<ColName>{cellData}</ColName>)
                  }
                  width={130}
                  
                />
                <Column
                  width={60}
                  label='UserID'
                  dataKey='authorAppendixId'
                  disableSort={!this._isSortEnabled()}
                  cellRenderer={
                    ({ cellData, columnData, dataKey, rowData, rowIndex }) => 
                    (<Col>{cellData}</Col>)
                  }
                />
                <Column
                  width={50}
                  label="Link"
                  dataKey='appendixid'
                  disableSort
                  cellRenderer={
                  this._linkRowRenderer}
                  />
                <Column
                  width={60}
                  label='Status'
                  dataKey='status'
                  cellRenderer={
                     ({cellData,columnData,dataKey,rowData,rowIndex})=> 
                     (<ColStatus done={cellData==='Klar'? true:false}>{cellData}</ColStatus>)
                  }
                />
                <Column 
                  width={100}
                  label='Date'
                  dataKey='created'
                   cellRenderer={
                     ({cellData,columnData,dataKey,rowData,rowIndex})=> (<ColId>{cellData}</ColId>)
                  }
                  flexgrow={1}
                  />
              </Table>
            )}
          </AutoSizer>
        </div>
  
    )
  }

  _getDatum (list, index) {
    return list.get(index % list.size)
  }

  _getRowHeight ({ index }) {
    const { list } = this.props

    return this._getDatum(list, index).size
  }

  _linkRowRenderer({ cellData, 
    columnData, 
    dataKey, 
    rowData, rowIndex 
    }) {
    return <Col onClick={(e)=>
                    { e.preventDefault()
                      this.props.onClickButton(cellData)
                      console.log(cellData)}}>
                      <a href={"#"+cellData}>{cellData}</a>
           </Col>
    }

  _headerRenderer ({
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

  _isSortEnabled () {
    const { list } = this.props
    const { rowCount } = this.state

    return rowCount <= list.size
  }

  _noRowsRenderer () {
    return (
      <div className={'noRows'}>
        No rows
      </div>
    )
  }

  _onRowCountChange (event) {
    const rowCount = parseInt(event.target.value, 10) || 0

    this.setState({ rowCount })
  }

  _onScrollToRowChange (event) {
    const { rowCount } = this.state
    let scrollToIndex = Math.min(rowCount - 1, parseInt(event.target.value, 10))

    if (isNaN(scrollToIndex)) {
      scrollToIndex = undefined
    }

    this.setState({ scrollToIndex })
  }

  _rowClassName ({ index }) {
    if (index < 0) {
      return 'Header'
    } else {
      return index % 2 === 0 ? 'evenRow' : 'oddRow'
    }
  }

  _sort ({ sortBy, sortDirection }) {
    this.setState({ sortBy, sortDirection })
  }

  _updateUseDynamicRowHeight (value) {
    this.setState({
      useDynamicRowHeight: value
    })
  }
}