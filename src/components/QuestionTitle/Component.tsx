/**
 * @description 问卷编辑器 - Title组件
 * @author ITSATAN
 */
import React from 'react'
import { QuestionTitlePropsType } from './interface'
import { Typography } from 'antd'

const { Title } = Typography

const QuestionTitleComponent: React.FC<QuestionTitlePropsType> = props => {
	const { text = '一行标题', level = 1, isCenter = false } = props
	const size = {
		1: '24px',
		2: '20px',
		3: '16px',
		4: '14px',
		5: '12px',
	}
	return (
		<Title
			level={level}
			style={{ textAlign: isCenter ? 'center' : 'start', marginBottom: 0, fontSize: size[level] }}
		>
			{text}
		</Title>
	)
}

export default QuestionTitleComponent
