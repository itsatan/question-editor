/**
 * @description 问卷编辑器 - Checkbox属性组件
 * @author ITSATAN
 */

import React, { useEffect } from 'react'
import { Button, Checkbox, Form, Input, Space } from 'antd'
import { PlusOutlined, MinusCircleOutlined } from '@ant-design/icons'
import { OptionType, QuestionCheckboxPropsType } from './interface'
import { nanoid } from 'nanoid'

const QuestionCheckboxAttributeComponent: React.FC<QuestionCheckboxPropsType> = props => {
	const { title, checkbox_options, isVertical, onChange, disabled } = props

	const [form] = Form.useForm()

	// 监测属性变化重新赋值
	useEffect(() => {
		form.setFieldsValue({ title, checkbox_options, isVertical })
	}, [title, isVertical, form, checkbox_options])

	// 同步数据变化
	const handleValuesChange = () => {
		onChange && onChange(form.getFieldsValue())
	}
	return (
		<Form
			form={form}
			layout="vertical"
			initialValues={{ title, checkbox_options, isVertical }}
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
			<Form.List name="checkbox_options">
				{(fields, { add, remove }) => (
					<>
						{/* 遍历所有可选项 可删除 */}
						{fields.map(({ name, key }, index) => {
							return (
								<Space key={key} align="baseline">
									{/* 当前选项 是否选中 */}
									<Form.Item name={[name, 'checked']} valuePropName="checked">
										<Checkbox />
									</Form.Item>
									{/* 当前选项 输入框 */}
									<Form.Item
										name={[name, 'label']}
										rules={[
											{ required: true, message: '请输入选项文字' },
											{
												// 校验重复项
												validator: (_, label) => {
													const { checkbox_options = [] } = form.getFieldsValue()
													let count = 0
													checkbox_options.forEach((opt: OptionType) => {
														if (opt.label === label) count++
													})
													if (count === 1) return Promise.resolve()
													return Promise.reject(new Error('存在重复选项'))
												},
											},
										]}
									>
										<Input />
									</Form.Item>
									{/* 当前选项 删除按钮(保留几个随意) */}
									{index > 0 && <MinusCircleOutlined onClick={() => remove(name)} />}
								</Space>
							)
						})}
						{/* 添加选项 */}
						<Form.Item>
							<Button
								type="link"
								block
								icon={<PlusOutlined />}
								onClick={() => add({ label: '', value: nanoid(), checked: false })}
							>
								添加选项
							</Button>
						</Form.Item>
					</>
				)}
			</Form.List>
			<Form.Item name="isVertical" valuePropName="checked">
				<Checkbox>竖向排列</Checkbox>
			</Form.Item>
		</Form>
	)
}

export default QuestionCheckboxAttributeComponent
