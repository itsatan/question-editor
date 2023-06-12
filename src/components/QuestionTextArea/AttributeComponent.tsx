/**
 * @description 问卷编辑器 - TextArea属性组件
 * @author ITSATAN
 */

import React, { useEffect } from 'react'
import { QuestionTextAreaPropsType } from '.'
import { Form, Input } from 'antd'

const QuestionTextAreaAttributeComponent: React.FC<QuestionTextAreaPropsType> = props => {
	const { title, placeholder, onChange, disabled } = props

	const [form] = Form.useForm()

	// 监测属性变化重新赋值
	useEffect(() => {
		form.setFieldsValue({ title, placeholder })
	}, [title, placeholder, form])

	// 同步数据变化
	const handleValuesChange = () => {
		onChange && onChange(form.getFieldsValue())
	}

	return (
		<Form
			layout="vertical"
			initialValues={{ title, placeholder }}
			form={form}
			onValuesChange={handleValuesChange}
			disabled={disabled}
		>
			<Form.Item
				label="标题内容"
				name="title"
				rules={[{ required: true, message: '请输入标题内容' }]}
			>
				<Input />
			</Form.Item>
			<Form.Item label="Placeholder" name="placeholder">
				<Input />
			</Form.Item>
		</Form>
	)
}

export default QuestionTextAreaAttributeComponent
