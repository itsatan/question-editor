/**
 * @description 问卷编辑器 - Paragraph属性组件
 * @author ITSATAN
 */

import React, { useEffect } from 'react'
import { Checkbox, Form, Input } from 'antd'
import { QuestionParagraphPropsType } from './interface'

const { TextArea } = Input

const QuestionParagraphAttributeComponent: React.FC<QuestionParagraphPropsType> = props => {
	const { text, isCenter, onChange, disabled } = props

	const [form] = Form.useForm()

	// 监测属性变化重新赋值
	useEffect(() => {
		form.setFieldsValue({ text, isCenter })
	}, [text, isCenter, form])

	// 同步数据变化
	const handleValuesChange = () => {
		onChange && onChange(form.getFieldsValue())
	}

	return (
		<Form
			layout="vertical"
			initialValues={{ text, isCenter }}
			form={form}
			onValuesChange={handleValuesChange}
			disabled={disabled}
		>
			<Form.Item
				label="段落内容"
				name="text"
				rules={[{ required: true, message: '请输入段落内容' }]}
			>
				<TextArea style={{ height: 150 }} />
			</Form.Item>
			<Form.Item name="isCenter" valuePropName="checked">
				<Checkbox>居中显示</Checkbox>
			</Form.Item>
		</Form>
	)
}

export default QuestionParagraphAttributeComponent
