import React, { useEffect } from 'react'
import { Form, Input } from 'antd'
import useGetPageInfo from '@/hooks/useGetPageInfo'
import { useDispatch } from 'react-redux'
import { resetPageInfo } from '@/store/pageInfo'

const { TextArea } = Input

const PageSettings: React.FC = () => {
	const pageInfo = useGetPageInfo()
	const dispatch = useDispatch()
	const [form] = Form.useForm()
	// 实时更新表达数据
	useEffect(() => {
		form.setFieldsValue(pageInfo)
	}, [form, pageInfo])
	// 更新数据到redux
	const handleValuesChange = () => {
		const newValues = form.getFieldsValue()
		dispatch(resetPageInfo(newValues))
	}
	return (
		<Form
			layout="vertical"
			initialValues={pageInfo}
			form={form}
			onValuesChange={handleValuesChange}
		>
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
