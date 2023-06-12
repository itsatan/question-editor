/**
 * @description 问卷编辑器 - Radio属性组件
 * @author ITSATAN
 */

import React, { useEffect } from 'react'
import { nanoid } from 'nanoid'
import { Button, Checkbox, Form, Input, Select, Space } from 'antd'
import { PlusOutlined, MinusCircleOutlined } from '@ant-design/icons'
import { OptionType, QuestionRadioPropsType } from './interface'

const QuestionRadioAttributeComponent: React.FC<QuestionRadioPropsType> = props => {
	const { title, value, options = [], isVertical, onChange, disabled } = props

	const [form] = Form.useForm()

	// 监测属性变化重新赋值
	useEffect(() => {
		const values = options.map(opt => opt.value)
		form.setFieldsValue({
			title,
			// 如果默认选中了该选项并删除了它 重置value
			value: values.includes(value) ? value : undefined,
			options,
			isVertical,
		})
	}, [title, value, options, isVertical, form])

	// 同步数据变化
	const handleValuesChange = () => {
		onChange && onChange(form.getFieldsValue())
	}

	return (
		<Form
			form={form}
			layout="vertical"
			initialValues={{ title, value, options, isVertical }}
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
			<Form.Item label="选项">
				<Form.List name="options">
					{(fields, { add, remove }) => (
						<>
							{fields.map(({ key, name }, index) => {
								return (
									<Space key={key} align="baseline">
										{/* 当前选项 输入框 */}
										<Form.Item
											name={[name, 'label']}
											rules={[
												{ required: true, message: '请输入选项文字' },
												{
													// 校验重复项
													validator: (_, label) => {
														const { options } = form.getFieldsValue()
														let count = 0
														options.forEach((opt: OptionType) => {
															if (opt.label === label) count++
														})
														if (count === 1) return Promise.resolve()
														return Promise.reject(new Error('存在重复选项'))
													},
												},
											]}
										>
											<Input placeholder="请输入选项文字..." />
										</Form.Item>
										{/* 当前选项 删除按钮(最少保留两个) */}
										{index > 1 && <MinusCircleOutlined onClick={() => remove(name)} />}
									</Space>
								)
							})}
							{/* 添加选项 */}
							<Form.Item>
								<Button
									type="link"
									block
									icon={<PlusOutlined />}
									onClick={() => add({ label: '', value: nanoid() })}
								>
									添加选项
								</Button>
							</Form.Item>
						</>
					)}
				</Form.List>
			</Form.Item>
			<Form.Item label="默认选中" name="value" initialValue={value}>
				{/* 没有填写label 不显示到默认选中列表中 */}
				<Select options={options.filter(opt => Boolean(opt.label))} />
			</Form.Item>
			<Form.Item name="isVertical" valuePropName="checked">
				<Checkbox>竖向排列</Checkbox>
			</Form.Item>
		</Form>
	)
}

export default QuestionRadioAttributeComponent
