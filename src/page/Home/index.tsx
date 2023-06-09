import React from 'react'
import { Button, Typography } from 'antd'
import { useNavigate } from 'react-router-dom'
import { EDITOR_PATH } from '@/routers'
import styles from './index.module.scss'

const { Title, Paragraph } = Typography

const Home: React.FC = () => {
	const navigate = useNavigate()
	return (
		<div className={styles['editor-home-container']}>
			<div className={styles.info}>
				<Title>问卷调查 ｜ 在线投票</Title>
				<Paragraph>已累计创建问卷 100 份，发布问卷 90 份，收到答卷 888 份</Paragraph>
				<Button type="primary" onClick={() => navigate(EDITOR_PATH)}>
					开始使用
				</Button>
			</div>
		</div>
	)
}

export default Home
