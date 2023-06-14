import React from 'react'
import {
	DndContext,
	closestCenter,
	MouseSensor,
	DragEndEvent,
	useSensor,
	useSensors,
} from '@dnd-kit/core'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'

type SortableContainerPropsType = {
	children: JSX.Element | JSX.Element[]
	items: Array<{ id: string | number; [key: string]: any }>
	onDragEnd: (oldIndex: number, newIndex: number) => void
}

const SortableContainer: React.FC<SortableContainerPropsType> = props => {
	const { children, items, onDragEnd } = props

	// 传感器
	const sensors = useSensors(
		useSensor(MouseSensor, {
			// 鼠标检测
			activationConstraint: {
				// 约束
				distance: 10, // 偏移误差
			},
		})
	)

	// 拖拽结束
	function handleDragEnd(event: DragEndEvent) {
		const { active, over } = event
		if (!over) return
		if (active.id !== over.id) {
			const oldIndex = items.findIndex(c => c.id === active.id)
			const newIndex = items.findIndex(c => c.id === over.id)
			onDragEnd(oldIndex, newIndex)
		}
	}

	return (
		<DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
			<SortableContext items={items} strategy={verticalListSortingStrategy}>
				{children}
			</SortableContext>
		</DndContext>
	)
}

export default SortableContainer
