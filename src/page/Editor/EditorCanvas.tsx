import React from 'react'
import { Spin } from 'antd'
import { useDispatch } from 'react-redux'
import { LoadingOutlined } from '@ant-design/icons'
import classNames from 'classnames'
import { getComponentConfByType } from '@/components'
import { SortableContainer, SortableItem } from '@/common'
import useGetComponentInfo from '@/hooks/useGetComponentInfo'
import useBindCanvasKeyPress from '@/hooks/useBindCanvasKeyPress'
import { ComponentInfoType, changeSelectedId, moveComponent } from '@/store/question'
import styles from './EditorCanvas.module.scss'

type EditorCanvasPropsType = {
	loading: boolean
}

// 生成组件
const genComponent = (componentInfo: ComponentInfoType) => {
	const { type, props } = componentInfo
	const componentConf = getComponentConfByType(type)
	if (!componentConf) return null
	const { Component } = componentConf
	return <Component {...props} />
}

const EditorCanvas: React.FC<EditorCanvasPropsType> = props => {
	const { loading } = props
	const { componentList, selectedId } = useGetComponentInfo()
	const dispatch = useDispatch()

	// 快捷键
	useBindCanvasKeyPress()

	// 修改selectedId
	const handleChangeSelectedId = (event: React.MouseEvent<HTMLDivElement>, fe_id: string) => {
		event.stopPropagation() // 阻止冒泡
		dispatch(changeSelectedId(fe_id))
	}

	// 添加ID
	const componentListWithId = componentList.map(item => ({ ...item, id: item.fe_id }))

	// 拖拽结束触发
	const handleDragEnd = (oldIndex: number, newIndex: number) => {
		dispatch(moveComponent({ oldIndex, newIndex }))
	}

	if (loading) {
		return (
			<div style={{ height: '100%', background: '#fff', textAlign: 'center', paddingTop: 150 }}>
				<Spin indicator={<LoadingOutlined style={{ fontSize: 32 }} spin />} />
			</div>
		)
	}

	return (
		<SortableContainer items={componentListWithId} onDragEnd={handleDragEnd}>
			<div className={styles['editor-canvas']}>
				{componentList
					.filter(c => !c.isHidden)
					.map(c => {
						const { fe_id, isLocked } = c
						// 控制className
						const classes = classNames({
							[styles['editor-component-wrapper']]: true,
							[styles['editor-selected']]: selectedId === fe_id,
							[styles['editor-locked']]: isLocked,
						})
						return (
							<SortableItem key={fe_id} id={fe_id}>
								<div className={classes} onClick={event => handleChangeSelectedId(event, fe_id)}>
									<div className={styles['editor-component']}>{genComponent(c)}</div>
								</div>
							</SortableItem>
						)
					})}
			</div>
		</SortableContainer>
	)
}

export default EditorCanvas
