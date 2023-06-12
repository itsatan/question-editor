import React, { ChangeEvent, useRef, useState } from 'react'
import classNames from 'classnames'
import { useDispatch } from 'react-redux'
import { Button, Input, InputRef, Space, message } from 'antd'
import { EyeInvisibleOutlined, LockOutlined } from '@ant-design/icons'
import useGetComponentInfo from '@/hooks/useGetComponentInfo'
import {
	changeComponentHidden,
	changeComponentTitle,
	changeSelectedId,
	toggleComponentLocked,
} from '@/store/question'
import styles from './Layers.module.scss'

const Layers: React.FC = () => {
	const { selectedId, componentList } = useGetComponentInfo()

	const dispatch = useDispatch()

	const [changingTitle, setChangingTitle] = useState('')
	const inputRef = useRef<InputRef>(null)

	// 点击选中组件
	const handleTitleClick = async (fe_id: string) => {
		// 获取当前点击组件
		const currentComponent = componentList.find(c => c.fe_id === fe_id)
		if (currentComponent === undefined) return
		if (currentComponent.isHidden) return message.warning('不能选中隐藏的组件')

		// 防止重复点击无效调用dispatch
		if (fe_id !== selectedId) {
			dispatch(changeSelectedId(fe_id))
			setChangingTitle('') // 重置
			return
		}
		// 点击触发修改标题 显示Input
		await setChangingTitle(fe_id)
		inputRef.current && inputRef.current.focus()
	}

	// 修改标题
	const changeTitle = (event: ChangeEvent<HTMLInputElement>) => {
		const newTitle = event.target.value.trim()
		if (!newTitle) return
		if (!selectedId) return
		dispatch(changeComponentTitle({ fe_id: selectedId, title: newTitle }))
	}

	// 切换 隐藏/显示
	const toggleHidden = (fe_id: string, isHidden: boolean) => {
		dispatch(changeComponentHidden({ fe_id, isHidden }))
	}

	// 切换 锁定/解锁
	const toggleLocked = (fe_id: string) => {
		dispatch(toggleComponentLocked({ fe_id }))
	}

	return (
		<>
			{componentList.map(c => {
				const { fe_id, title, isHidden, isLocked } = c
				// 控制className
				const classes = classNames({
					[styles.title]: true,
					[styles.selected]: fe_id === selectedId,
				})
				return (
					<div key={fe_id} className={styles['editor-layers-wrapper']}>
						<div className={classes} onClick={() => handleTitleClick(fe_id)}>
							{fe_id === changingTitle && (
								<Input
									ref={inputRef}
									value={title}
									onChange={changeTitle}
									onPressEnter={() => setChangingTitle('')}
									onBlur={() => setChangingTitle('')}
								/>
							)}
							{fe_id !== changingTitle && title}
						</div>
						<div className={styles.handler}>
							<Space>
								<Button
									size="small"
									shape="circle"
									className={!isHidden ? styles.btn : ''}
									type={isHidden ? 'primary' : 'text'}
									icon={<EyeInvisibleOutlined />}
									onClick={() => toggleHidden(fe_id, !isHidden)}
								/>
								<Button
									size="small"
									shape="circle"
									className={!isLocked ? styles.btn : ''}
									type={isLocked ? 'primary' : 'text'}
									icon={<LockOutlined />}
									onClick={() => toggleLocked(fe_id)}
								/>
							</Space>
						</div>
					</div>
				)
			})}
		</>
	)
}

export default Layers
