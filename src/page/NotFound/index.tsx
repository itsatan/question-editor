import React from 'react'
import { Button, Result } from 'antd'
import { useNavigate } from 'react-router-dom'
import { HOME_PATH } from '@/routers'

const NotFound: React.FC = () => {
	const navigate = useNavigate()
	return (
		<Result
			status="warning"
			title="There are some problems with your operation."
			extra={
				<Button type="primary" key="home" onClick={() => navigate(HOME_PATH)}>
					Go Home
				</Button>
			}
		/>
	)
}

export default NotFound
