/**
 * @description 问卷编辑器 - Radio组件
 * @author ITSATAN
 */

import React from 'react'
import { Typography, Radio, Space } from 'antd'
import { QuestionRadioPropsType } from './interface'

const { Paragraph } = Typography

const QuestionRadioComponent: React.FC<QuestionRadioPropsType> = props => {
	const {
		title = '单选标题',
		value = '',
		options = [
			{ label: '选项1', value: '1' },
			{ label: '选项2', value: '2' },
			{ label: '选项3', value: '3' },
		],
		isVertical = false,
	} = props

	return (
		<>
			<Paragraph strong>{title}</Paragraph>
			<Radio.Group value={value}>
				<Space direction={isVertical ? 'vertical' : 'horizontal'}>
					{options
						.filter(opt => Boolean(opt.label)) // 没有填写label 不显示到画布Radio组件中
						.map(opt => {
							const { label, value } = opt
							return (
								<Radio key={value} value={value}>
									{label}
								</Radio>
							)
						})}
				</Space>
			</Radio.Group>
		</>
	)
}

export default QuestionRadioComponent
