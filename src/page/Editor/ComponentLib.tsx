import React from 'react'
import { Typography } from 'antd'
import { ComponentConfType, componentConfGroup } from '@/components'
import styles from './ComponentLib.module.scss'
import { useDispatch } from 'react-redux'
import { addComponent } from '@/store/question'
import { nanoid } from 'nanoid'

const { Title } = Typography

const ComponentLib: React.FC = () => {
	const dispatch = useDispatch()

	// 生成组件
	const genComponent = (componentConf: ComponentConfType) => {
		const { type, title, Component, defaultProps } = componentConf
		// 添加到画布并默认选中该组件
		const addToCanvas = () => {
			dispatch(
				addComponent({
					fe_id: nanoid(),
					title,
					type,
					props: defaultProps,
				})
			)
		}
		return (
			<div key={type} className={styles['editor-wrapper']} onClick={addToCanvas}>
				<div className={styles['editor-component']}>
					<Component />
				</div>
			</div>
		)
	}

	return (
		<div>
			{componentConfGroup.map((group, index) => {
				const { groupId, groupName, components } = group
				return (
					<div key={groupId}>
						<Title level={5} style={{ marginTop: index > 0 ? 16 : '' }}>
							{groupName}
						</Title>
						<div>{components.map(c => genComponent(c))}</div>
					</div>
				)
			})}
		</div>
	)
}

export default ComponentLib
