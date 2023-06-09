import React, { useMemo } from 'react'
import { Button, Space, Tooltip } from 'antd'
import {
	DeleteOutlined,
	EyeInvisibleOutlined,
	LockOutlined,
	CopyOutlined,
	BlockOutlined,
} from '@ant-design/icons'
import { useDispatch } from 'react-redux'
import {
	changeComponentHidden,
	toggleComponentLocked,
	deleteSelectedComponent,
	copyCurrentSelectedComponent,
	pasteCopiedComponent,
} from '@/store/question'
import useGetComponentInfo from '@/hooks/useGetComponentInfo'

const EditorToolbar: React.FC = () => {
	const { selectedId, componentList, selectedComponent, copiedComponent } = useGetComponentInfo()
	const { isLocked } = selectedComponent || {}
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
		</Space>
	)
}

export default EditorToolbar
