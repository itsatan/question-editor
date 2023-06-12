/**
 * @description 问卷编辑器 - Info属性组件
 * @author ITSATAN
 */

import React, { useEffect } from 'react'
import { Form, Input } from 'antd'
import { QuestionInfoPropsType } from './interface'

const { TextArea } = Input

const QuestionInfoAttributeComponent: React.FC<QuestionInfoPropsType> = props => {
	const { title, desc, onChange, disabled } = props

	const [form] = Form.useForm()

	// 监测属性变化重新赋值
	useEffect(() => {
		form.setFieldsValue({ title, desc })
	}, [title, desc, form])

	// 同步数据变化
	const handleValuesChange = () => {
		onChange && onChange(form.getFieldsValue())
	}

	return (
		<Form
			layout="vertical"
			initialValues={{ title, desc }}
			onValuesChange={handleValuesChange}
			form={form}
			disabled={disabled}
		>
			<Form.Item
				label="标题内容"
				name="title"
				rules={[{ required: true, message: '请输入标题内容' }]}
			>
				<Input />
			</Form.Item>
			<Form.Item label="描述" name="desc">
				<TextArea style={{ height: 150 }} />
			</Form.Item>
		</Form>
	)
}

export default QuestionInfoAttributeComponent
