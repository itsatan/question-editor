/**
 * @description 问卷编辑器 - Checkbox组件
 * @author ITSATAN
 */

import React from 'react'
import { Typography, Space, Checkbox } from 'antd'
import { QuestionCheckboxPropsType } from './interface'

const { Paragraph } = Typography

const QuestionCheckboxComponent: React.FC<QuestionCheckboxPropsType> = props => {
	const {
		title = '多选标题',
		checkbox_options = [
			{ label: '选项1', value: '1', checked: false },
			{ label: '选项2', value: '2', checked: false },
			{ label: '选项3', value: '3', checked: false },
		],
		isVertical = false,
	} = props

	return (
		<>
			<Paragraph strong>{title}</Paragraph>
			<Space direction={isVertical ? 'vertical' : 'horizontal'}>
				{checkbox_options
					.filter(opt => Boolean(opt.label)) // 没有填写label 不显示到画布Checkbox组件中
					.map(opt => {
						const { label, value, checked } = opt
						return (
							<Checkbox key={value} value={value} checked={checked}>
								{label}
							</Checkbox>
						)
					})}
			</Space>
		</>
	)
}

export default QuestionCheckboxComponent
