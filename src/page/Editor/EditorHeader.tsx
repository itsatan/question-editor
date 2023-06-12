import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Space, Typography } from 'antd'
import { LeftOutlined, CheckOutlined, CloudUploadOutlined } from '@ant-design/icons'
import EditorToolbar from './EditorToolbar'
import styles from './EditorHeader.module.scss'

const { Title } = Typography

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
						<Title level={5}>问卷标题</Title>
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
