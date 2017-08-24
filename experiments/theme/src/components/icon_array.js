import React from 'react'
import * as Icons from 'react-icons/lib/md'



// Framework icons
const ICON_SEARCH = 'search'
const ICON_MENU = 'menu'
const ICON_ASSIGNMENT_TURNED_IN = 'assignment_turned_in'

export function createTagName(iconname) {
	const tagprefix = 'Md'
	let combined = ''
	let arr = iconname.split('_')
	arr = arr.map((a) => {
		return a.charAt(0).toUpperCase() + a.slice(1)
	})
	combined = tagprefix + arr.join('')
	return <Icons.combined />

}

export const iconArr = [
	{
		name: 'ICON_SEARCH', 
		value: ICON_SEARCH,
		component: () => { return createTagName(ICON_SEARCH)}
	},
	{
		name: 'ICON_MENU',
		value: ICON_MENU,
		component: () => { return createTagName(ICON_MENU) }
	},
	{
		name: 'ICON_ASSIGNMENT_TURNED_IN',
		value: ICON_ASSIGNMENT_TURNED_IN,
		component() { return createTagName(ICON_ASSIGNMENT_TURNED_IN) }
	}
]

// console.log(iconArr[2].name) // ICON_ASSIGNMENT_TURNED_IN
// console.log(iconArr[2].component()) // MdAssignmentTurnedIn
// console.log(Object.keys(iconArr[2])) // [ 'name', 'value', 'component' ]


/* 
render() {
    const TagName = createTagName(iconname)
    return <TagName />
}


components = {
    foo: FooComponent,
    bar: BarComponent
}
render() {
    const TagName = this.components[this.props.tag || 'foo']
    return <TagName />
}


*/

