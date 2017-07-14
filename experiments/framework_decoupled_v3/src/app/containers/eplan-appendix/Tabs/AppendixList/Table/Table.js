
import Immutable from 'immutable'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {Table,SortDirection,SortIndicator,Column,AutoSizer} from 'react-virtualized'
import {NoRows,InputRow,LabeledInput,HeaderCell,HeaderRow,AutoSizerDiv,ContentBox,Cell,CellStatus} from 'app/styles/TableStyles'
import RowRenderer from './_rowRender'

export default class AppendixTable extends Component {
  static propTypes = {
    list: PropTypes.instanceOf(Immutable.List).isRequired
  };

  constructor (props, context) {
    super(props, context)
    this.state = {
      disableExtraRows:true,
      disableHeader: false,
      headerHeight: 30,
  
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
    this._rowClicked = this._rowClicked.bind(this)
  }

  render () {
    const {

      disableExtraRows,
      disableHeader,
      headerHeight,
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
  <div style={{width:'100%',height:'100%'}}>
        <ContentBox>
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
          <div>
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
            Hide header?&nbsp;
          </label>
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
        </InputRow></div>}
          
        </ContentBox>
            <AutoSizerDiv>
              <AutoSizer >
               {({ height,width }) => (
              <Table
                ref='Table'
                disableHeader={disableHeader}
                headerHeight={headerHeight}
                height={height}
                headerRowRenderer={this._defaultHeaderRowRenderer}
                noRowsRenderer={this._noRowsRenderer}
                overscanRowCount={overscanRowCount}
                rowRenderer = {RowRenderer}
                onRowClick = {this._rowClicked}
                rowHeight={rowHeight}
                rowGetter={rowGetter}
                rowCount={rowCount}
                scrollToIndex={scrollToIndex}
                sort={this._sort}
                sortBy={sortBy}
                sortDirection={sortDirection}
                width={width}
                style={{width:'100%'}}
              >
                {!hideIndexRow &&
                 
                  <Column
                    label='ID'
                    dataKey='appendixId'
                    disableSort={!this._isSortEnabled()}
                    headerRenderer={this._headerRenderer}
                    cellRenderer={
                      ({cellData, columnData, dataKey, rowData }) => (<Cell>{cellData}</Cell>)
                    }
                    width={width}
                    flexgrow={1}
                  />
                }
                <Column
                  label='Name'
                  dataKey='name'
                  disableSort={!this._isSortEnabled()}
                  headerRenderer={this._headerRenderer}
                  cellRenderer={
                    ({cellData,columnData, dataKey, rowData})=>(<Cell>{cellData}</Cell>)
                  }
                  width={width}
                  flexgrow={1}
                />
                <Column
                  width={width}
                  label='UserID'
                  dataKey='authorAppendixId'
                  headerRenderer={this._headerRenderer}
                  disableSort={!this._isSortEnabled()}
                  cellRenderer={
                    ({ cellData, columnData, dataKey, rowData, rowIndex }) => 
                    (<Cell>{cellData}</Cell>)
                  }
                />
                <Column
                  width={width}
                  label="Link"
                  dataKey='appendixId'
                  headerRenderer={this._headerRenderer}
                  disableSort
                  cellRenderer={
                  this._linkRowRenderer}
                  />
                <Column
                  width={width}
                  label='Status'
                  dataKey='status'
                  headerRenderer={this._headerRenderer}
                  cellRenderer={
                     ({cellData,columnData,dataKey,rowData,rowIndex})=> 
                     (<CellStatus done={cellData==='Klar'? true:false}>{cellData}</CellStatus>)
                  }
                />
                <Column 
                  width={width}
                  label='Date'
                  dataKey='created'
                  headerRenderer={this._headerRenderer}
                   cellRenderer={
                     ({cellData,columnData,dataKey,rowData,rowIndex})=> (<Cell>{cellData}</Cell>)
                  }
                  flexgrow={1}
                  />
              </Table>
            )}
          </AutoSizer>
          </AutoSizerDiv>
  </div>
    )
  }
  _rowClicked({
    event,
    index,
    rowData
  })
  {
  this.props.onClickButton(rowData.appendixId)
  }
  _defaultHeaderRowRenderer ({
    className,
    columns,
    style
  }) {
  return <HeaderRow width={style.width}>
    {columns}
  </HeaderRow>
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
    return <Cell onClick={(e)=>
                    { e.preventDefault()
                      this.props.onClickButton(cellData)
                     }}>
                      <a href={"#"+cellData}>{cellData}</a>
           </Cell>
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
      <NoRows>
        No rows
      </NoRows>
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
      return 'evenRow'
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