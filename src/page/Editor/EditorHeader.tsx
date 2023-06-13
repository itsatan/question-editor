import React, { ChangeEvent, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Input, InputRef, Space, Typography } from 'antd'
import { LeftOutlined, CheckOutlined, CloudUploadOutlined, EditOutlined } from '@ant-design/icons'
import { useDebounceEffect, useKeyPress, useRequest } from 'ahooks'
import { useDispatch } from 'react-redux'
import useGetPageInfo from '@/hooks/useGetPageInfo'
import useGetComponentInfo from '@/hooks/useGetComponentInfo'
import { ComponentInfoType } from '@/store/question'
import { PAGE_INFO_INIT_STATE_TYPE, changePageTitle } from '@/store/pageInfo'
import EditorToolbar from './EditorToolbar'
import styles from './EditorHeader.module.scss'

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
// 手动保存
function manualSave(
	componentList: Array<ComponentInfoType>,
	pageInfo: PAGE_INFO_INIT_STATE_TYPE
): Promise<{ componentList: Array<ComponentInfoType>; pageInfo: PAGE_INFO_INIT_STATE_TYPE }> {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve({ componentList, pageInfo })
		}, 666)
	})
}
const ManualSaveButton: React.FC = () => {
	const { componentList } = useGetComponentInfo()
	const pageInfo = useGetPageInfo()
	const { loading, run: save } = useRequest(() => manualSave(componentList, pageInfo), {
		manual: true,
	})
	// 快捷键手动保存
	useKeyPress(['ctrl.s', 'meta.s'], (event: KeyboardEvent) => {
		event.preventDefault() // 阻止默认行为
		if (loading) return
		save()
	})
	// 自动保存（不是定时器）
	useDebounceEffect(
		() => {
			save()
		},
		[componentList, pageInfo], // 监测数据变化
		{ wait: 1000 } // 防抖延迟执行时间
	)
	return (
		<Button
			type="default"
			disabled={loading}
			loading={loading}
			icon={<CheckOutlined />}
			onClick={save}
		>
			保存
		</Button>
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
						<ManualSaveButton />
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
