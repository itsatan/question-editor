/**
 * @description 问卷编辑器 - Input组件
 * @author ITSATAN
 */

import React from 'react'
import { QuestionInputPropsType } from './interface'
import { Input, Typography } from 'antd'

const { Paragraph } = Typography

const QuestionInputComponent: React.FC<QuestionInputPropsType> = props => {
	const { title = '输入框标题', placeholder = '请输入...' } = props
	return (
		<div>
			<Paragraph strong>{title}</Paragraph>
			<Input placeholder={placeholder} />
		</div>
	)
}

export default QuestionInputComponent
