/**
 * @description 问卷编辑器 - Title属性组件
 * @author ITSATAN
 */

import React, { useEffect } from 'react'
import { Form, Input, Select, Checkbox } from 'antd'
import { QuestionTitlePropsType } from './interface'

const QuestionTitleAttributeComponent: React.FC<QuestionTitlePropsType> = props => {
	const { text, level, isCenter, onChange } = props

	const [form] = Form.useForm()

	// 监测属性变化重新赋值
	useEffect(() => {
		form.setFieldsValue({ text, level, isCenter })
	}, [text, level, isCenter, form])

	// 同步数据变化
	const handleValuesChange = () => {
		onChange && onChange(form.getFieldsValue())
	}

	return (
		<Form
			layout="vertical"
			initialValues={{ text, level, isCenter }}
			form={form}
			onValuesChange={handleValuesChange}
		>
			<Form.Item
				label="标题内容"
				name="text"
				rules={[{ required: true, message: '请输入标题内容' }]}
			>
				<Input />
			</Form.Item>
			<Form.Item label="层级" name="level">
				<Select
					options={[
						{ label: 'Level 1', value: 1 },
						{ label: 'Level 2', value: 2 },
						{ label: 'Level 3', value: 3 },
						{ label: 'Level 4', value: 4 },
						{ label: 'Level 5', value: 5 },
					]}
				/>
			</Form.Item>
			<Form.Item name="isCenter" valuePropName="checked">
				<Checkbox>居中显示</Checkbox>
			</Form.Item>
		</Form>
	)
}

export default QuestionTitleAttributeComponent
