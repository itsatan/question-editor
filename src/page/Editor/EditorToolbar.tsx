import React from 'react'
import { Button, Space, Tooltip } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import { useDispatch } from 'react-redux'
import { deleteSelectedComponent } from '@/store/question'
import useGetComponentInfo from '@/hooks/useGetComponentInfo'

const EditorToolbar: React.FC = () => {
	const { componentList } = useGetComponentInfo()
	const dispatch = useDispatch()
	// 删除
	const handleDelete = () => {
		dispatch(deleteSelectedComponent())
	}
	return (
		<Space>
			<Tooltip title="删除">
				<Button
					shape="circle"
					icon={<DeleteOutlined />}
					onClick={handleDelete}
					disabled={!componentList.length}
				/>
			</Tooltip>
		</Space>
	)
}

export default EditorToolbar
