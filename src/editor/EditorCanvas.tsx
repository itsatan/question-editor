import React from 'react'
import { Spin } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { LoadingOutlined } from '@ant-design/icons'
import classNames from 'classnames'
import useGetComponentInfo from '@/hooks/useGetComponentInfo'
import { getComponentConfByType } from '@/components'
import { ComponentInfoType, changeSelectedId } from '@/store/question'
import styles from './EditorCanvas.module.scss'
import { STATE_TYPE } from '@/store'

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
	const { componentList } = useGetComponentInfo()
	const { selectedId } = useSelector((state: STATE_TYPE) => state.question)
	const dispatch = useDispatch()

	// 修改selectedId
	const handleChangeSelectedId = (event: React.MouseEvent<HTMLDivElement>, fe_id: string) => {
		event.stopPropagation() // 阻止冒泡
		dispatch(changeSelectedId(fe_id))
	}

	if (loading) {
		return (
			<div style={{ height: '100%', background: '#fff', textAlign: 'center', paddingTop: 150 }}>
				<Spin indicator={<LoadingOutlined style={{ fontSize: 32 }} spin />} />
			</div>
		)
	}

	return (
		<div className={styles['editor-canvas']}>
			{componentList.map(c => {
				const { fe_id } = c
				// 控制className
				const classes = classNames({
					[styles['editor-component-wrapper']]: true,
					[styles['editor-selected']]: selectedId === fe_id,
				})
				return (
					<div
						key={fe_id}
						className={classes}
						onClick={event => handleChangeSelectedId(event, fe_id)}
					>
						<div className={styles['editor-component']}>{genComponent(c)}</div>
					</div>
				)
			})}
		</div>
	)
}

export default EditorCanvas
