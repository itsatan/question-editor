import React, { ChangeEvent, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Input, InputRef, Space, Typography } from 'antd'
import { LeftOutlined, CheckOutlined, CloudUploadOutlined, EditOutlined } from '@ant-design/icons'
import useGetPageInfo from '@/hooks/useGetPageInfo'
import EditorToolbar from './EditorToolbar'
import styles from './EditorHeader.module.scss'
import { useDispatch } from 'react-redux'
import { changePageTitle } from '@/store/pageInfo'

const { Title } = Typography

// 显示和修改标题
const TitleElem: React.FC = () => {
	const { title } = useGetPageInfo()
	const dispatch = useDispatch()
	const inputRef = useRef<InputRef>(null)
	const [editTitle, setEditTitle] = useState(false)
	const handleEditTitleClick = async () => {
		await setEditTitle(true)
		inputRef.current && inputRef.current.focus()
	}
	const titleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const newTitle = event.target.value.trim()
		if (!newTitle) return
		dispatch(changePageTitle(newTitle))
	}
	if (editTitle) {
		return (
			<Input
				ref={inputRef}
				value={title}
				style={{ width: 200 }}
				onPressEnter={() => setEditTitle(false)}
				onBlur={() => setEditTitle(false)}
				onChange={titleChange}
			/>
		)
	}
	return (
		<Space align="baseline">
			<Title level={5}>{title}</Title>
			<Button type="text" icon={<EditOutlined />} onClick={handleEditTitleClick} />
		</Space>
	)
}

const EditorHeader: React.FC = () => {
	const navigate = useNavigate()
	return (
		<div className={styles['editor-header-wrapper']}>
			<div className={styles['editor-header']}>
				<div className={styles.left}>
					<Space>
						<Button type="link" icon={<LeftOutlined />} onClick={() => navigate(-1)}>
							返回
						</Button>
						<TitleElem />
					</Space>
				</div>
				<div className={styles.main}>
					<EditorToolbar />
				</div>
				<div className={styles.right}>
					<Space>
						<Button type="default" icon={<CheckOutlined />}>
							保存
						</Button>
						<Button type="primary" icon={<CloudUploadOutlined />}>
							发布
						</Button>
					</Space>
				</div>
			</div>
		</div>
	)
}

export default EditorHeader
