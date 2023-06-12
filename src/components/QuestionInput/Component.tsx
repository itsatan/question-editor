/**
 * @description 问卷编辑器 - Input组件
 * @author ITSATAN
 */

import React from 'react'
import { Input, Typography } from 'antd'
import { QuestionInputPropsType } from './interface'

const { Paragraph } = Typography

const QuestionInputComponent: React.FC<QuestionInputPropsType> = props => {
	const { title = '输入框标题', placeholder = '请输入...' } = props
	return (
		<>
			<Paragraph strong>{title}</Paragraph>
			<Input placeholder={placeholder} />
		</>
	)
}

export default QuestionInputComponent
