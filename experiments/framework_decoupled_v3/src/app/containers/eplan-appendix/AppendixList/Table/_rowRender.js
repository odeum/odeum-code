import React from 'react'
import { Row } from 'app/styles/TableStyles'

export default function RowRenderer ({
	className,
	columns,
	index,
	isScrolling,
	key,
	onRowClick,
	onRowDoubleClick,
	onRowMouseOver,
	onRowMouseOut,
	rowData,
	style
}) {
	const Props = {}

	if (
		onRowClick ||
				onRowDoubleClick ||
				onRowMouseOver ||
				onRowMouseOut
	) {
		Props['aria-label'] = 'row'
		Props.tabIndex = 0

		if (onRowClick) {
			Props.onClick = (event) => onRowClick({ event, index, rowData })
		}
		if (onRowDoubleClick) {
			Props.onDoubleClick = (event) => onRowDoubleClick({ event, index, rowData })
		}
		if (onRowMouseOut) {
			Props.onMouseOut = (event) => onRowMouseOut({ event, index, rowData })
		}
		if (onRowMouseOver) {
			Props.onMouseOver = (event) => onRowMouseOver({ event, index, rowData })
		}
	}

	return (
		<Row
			{...Props}
			className={className}
			key={key}
			role='row'
			style={style}
			index = {index}
		>
			{columns}
		</Row>
	)
}