import React from 'react'
import { Form, Input } from 'antd'

const { TextArea } = Input

const PageSettings: React.FC = () => {
	return (
		<Form layout="vertical">
			<Form.Item
				label="页面标题"
				name="title"
				rules={[{ required: true, message: '请输入页面标题' }]}
			>
				<Input placeholder="请输入页面标题" />
			</Form.Item>
			<Form.Item label="页面描述" name="description">
				<TextArea style={{ height: 100 }} placeholder="请输入页面描述" />
			</Form.Item>
			<Form.Item label="样式代码" name="css">
				<TextArea style={{ height: 100 }} placeholder="请输入 CSS 代码..." />
			</Form.Item>
			<Form.Item label="脚本代码" name="js">
				<TextArea style={{ height: 100 }} placeholder="请输入 JS 代码..." />
			</Form.Item>
		</Form>
	)
}

export default PageSettings
