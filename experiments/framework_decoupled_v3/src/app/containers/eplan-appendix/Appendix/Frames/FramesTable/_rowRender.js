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
	const a11yProps = {}

	if (
		onRowClick ||
				onRowDoubleClick ||
				onRowMouseOver ||
				onRowMouseOut
	) {
		a11yProps['aria-label'] = 'row'
		a11yProps.tabIndex = 0

		if (onRowClick) {
			a11yProps.onClick = (event) => onRowClick({ event, index, rowData })
		}
		if (onRowDoubleClick) {
			a11yProps.onDoubleClick = (event) => onRowDoubleClick({ event, index, rowData })
		}
		if (onRowMouseOut) {
			a11yProps.onMouseOut = (event) => onRowMouseOut({ event, index, rowData })
		}
		if (onRowMouseOver) {
			a11yProps.onMouseOver = (event) => onRowMouseOver({ event, index, rowData })
		}
	}

	return (
		<Row
			{...a11yProps}
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