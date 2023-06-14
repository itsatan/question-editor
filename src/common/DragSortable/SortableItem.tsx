import React from 'react'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

type SortableItemPropsType = {
	id: string | number
	children: JSX.Element | JSX.Element[]
}

const SortableItem: React.FC<SortableItemPropsType> = props => {
	const { id, children } = props

	const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id })

	const style = {
		transform: CSS.Transform.toString(transform),
		transition,
	}

	return (
		<div ref={setNodeRef} style={style} {...attributes} {...listeners}>
			{children}
		</div>
	)
}

export default SortableItem
