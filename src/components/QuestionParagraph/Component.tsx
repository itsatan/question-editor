/**
 * @description 问卷编辑器 - Paragraph组件
 * @author ITSATAN
 */

import React from 'react'
import { Typography } from 'antd'
import { QuestionParagraphPropsType } from './interface'

const { Paragraph } = Typography

const QuestionParagraphComponent: React.FC<QuestionParagraphPropsType> = props => {
	const { text = '一行段落', isCenter = false } = props
	const textList = text.split('\n')
	return (
		<Paragraph style={{ textAlign: isCenter ? 'center' : 'start', marginBottom: 0 }}>
			{textList.map((t, i) => (
				<span key={i}>
					{i > 0 && <br />}
					{t}
				</span>
			))}
		</Paragraph>
	)
}

export default QuestionParagraphComponent
