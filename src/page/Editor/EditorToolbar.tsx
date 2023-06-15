import React, { useMemo } from 'react'
import { Button, Space, Tooltip } from 'antd'
import {
	DeleteOutlined,
	EyeInvisibleOutlined,
	LockOutlined,
	CopyOutlined,
	BlockOutlined,
	UpOutlined,
	DownOutlined,
	UndoOutlined,
	RedoOutlined,
} from '@ant-design/icons'
import { useDispatch } from 'react-redux'
import { ActionCreators } from 'redux-undo'
import {
	changeComponentHidden,
	toggleComponentLocked,
	deleteSelectedComponent,
	copyCurrentSelectedComponent,
	pasteCopiedComponent,
	moveComponent,
} from '@/store/question'
import { getCurrentSelectedComponentIndex } from '@/store/question/utils'
import useGetComponentInfo from '@/hooks/useGetComponentInfo'

const EditorToolbar: React.FC = () => {
	const { selectedId, componentList, selectedComponent, copiedComponent } = useGetComponentInfo()
	const { isLocked } = selectedComponent || {}

	// 上移/下移 控制禁用按钮
	const length = componentList.length
	const selectedIndex = getCurrentSelectedComponentIndex(componentList, selectedId)
	const isFirst = selectedIndex <= 0 // 当前选中组件为第一个，无法上移
	const isLast = selectedIndex + 1 >= length // 当前选中组件为最后一个，无法下移

	const dispatch = useDispatch()
	// 计算非隐藏组件的数量（控制隐藏按钮是否可用）
	const noHiddenCount = useMemo(
		() => componentList.filter(c => !c.isHidden).length,
		[componentList]
	)
	// 删除
	const handleDelete = () => {
		dispatch(deleteSelectedComponent())
	}
	// 隐藏/显示
	const handleHidden = () => {
		dispatch(changeComponentHidden({ fe_id: selectedId, isHidden: true }))
	}
	// 上锁/解锁
	const handleLocked = () => {
		dispatch(toggleComponentLocked({ fe_id: selectedId }))
	}
	// 复制
	const handleCopy = () => {
		dispatch(copyCurrentSelectedComponent())
	}
	// 粘贴
	const handlePaste = () => {
		dispatch(pasteCopiedComponent())
	}
	// 上移
	const moveUp = () => {
		if (isFirst) return
		dispatch(moveComponent({ oldIndex: selectedIndex, newIndex: selectedIndex - 1 }))
	}
	// 下移
	const moveDown = () => {
		if (isLast) return
		dispatch(moveComponent({ oldIndex: selectedIndex, newIndex: selectedIndex + 1 }))
	}
	// 撤销
	const undo = () => {
		dispatch(ActionCreators.undo())
	}
	// 重做
	const redo = () => {
		dispatch(ActionCreators.redo())
	}
	return (
		<Space size="middle">
			<Tooltip title="删除">
				<Button
					icon={<DeleteOutlined />}
					onClick={handleDelete}
					disabled={!componentList.length || !selectedId || isLocked}
				/>
			</Tooltip>
			<Tooltip title="隐藏">
				<Button
					icon={<EyeInvisibleOutlined />}
					onClick={handleHidden}
					disabled={!noHiddenCount || !selectedId}
				/>
			</Tooltip>
			<Tooltip title={isLocked ? '解锁' : '锁定'}>
				<Button
					type={isLocked ? 'primary' : 'default'}
					icon={<LockOutlined />}
					onClick={handleLocked}
					disabled={!selectedId}
				/>
			</Tooltip>
			<Tooltip title="复制">
				<Button icon={<CopyOutlined />} onClick={handleCopy} disabled={!selectedId} />
			</Tooltip>
			<Tooltip title="粘贴">
				<Button
					icon={<BlockOutlined />}
					onClick={handlePaste}
					disabled={copiedComponent === null}
				/>
			</Tooltip>
			<Tooltip title="上移">
				<Button icon={<UpOutlined />} onClick={moveUp} disabled={!selectedId || isFirst} />
			</Tooltip>
			<Tooltip title="下移">
				<Button icon={<DownOutlined />} onClick={moveDown} disabled={!selectedId || isLast} />
			</Tooltip>
			<Tooltip title="撤销">
				<Button icon={<UndoOutlined />} onClick={undo} />
			</Tooltip>
			<Tooltip title="重做">
				<Button icon={<RedoOutlined />} onClick={redo} />
			</Tooltip>
		</Space>
	)
}

export default EditorToolbar
