/**
 * @description 问卷编辑器 - TextArea组件
 * @author ITSATAN
 */

import React from 'react'
import { Typography, Input } from 'antd'
import { QuestionTextAreaPropsType } from './interface'

const { Paragraph } = Typography
const { TextArea } = Input

const QuestionTextAreaComponent: React.FC<QuestionTextAreaPropsType> = props => {
	const { title = '多行输入标题', placeholder = '请输入...' } = props
	return (
		<>
			<Paragraph strong>{title}</Paragraph>
			<TextArea placeholder={placeholder} />
		</>
	)
}

export default QuestionTextAreaComponent
