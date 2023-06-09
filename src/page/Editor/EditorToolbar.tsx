import React, { useMemo } from 'react'
import { Button, Space, Tooltip } from 'antd'
import { DeleteOutlined, EyeInvisibleOutlined } from '@ant-design/icons'
import { useDispatch } from 'react-redux'
import { changeComponentHidden, deleteSelectedComponent } from '@/store/question'
import useGetComponentInfo from '@/hooks/useGetComponentInfo'

const EditorToolbar: React.FC = () => {
	const { selectedId, componentList } = useGetComponentInfo()
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
	// 隐藏
	const handleHidden = () => {
		dispatch(changeComponentHidden({ fe_id: selectedId, isHidden: true }))
	}
	return (
		<Space>
			<Tooltip title="删除">
				<Button icon={<DeleteOutlined />} onClick={handleDelete} disabled={!componentList.length} />
			</Tooltip>
			<Tooltip title="隐藏">
				<Button icon={<EyeInvisibleOutlined />} onClick={handleHidden} disabled={!noHiddenCount} />
			</Tooltip>
		</Space>
	)
}

export default EditorToolbar
