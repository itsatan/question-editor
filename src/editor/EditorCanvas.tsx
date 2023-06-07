import React from 'react'
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import styles from './EditorCanvas.module.scss'
import useGetComponentInfo from '@/hooks/useGetComponentInfo'
import { getComponentConfByType } from '@/components'
import { ComponentInfoType } from '@/store/question'

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
				return (
					<div key={fe_id} className={styles['editor-component-wrapper']}>
						<div className={styles['editor-component']}>{genComponent(c)}</div>
					</div>
				)
			})}
		</div>
	)
}

export default EditorCanvas
