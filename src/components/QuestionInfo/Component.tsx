/**
 * @description 问卷编辑器 - Info组件
 * @author ITSATAN
 */

import React from 'react'
import { Typography } from 'antd'
import { QuestionInfoPropsType } from './interface'

const { Title, Paragraph } = Typography

const QuestionInfoComponent: React.FC<QuestionInfoPropsType> = props => {
	const { title = '问卷标题', desc = '问卷描述...' } = props

	const descList = desc.split('\n')

	return (
		<div style={{ textAlign: 'center' }}>
			<Title level={1} style={{ fontSize: 24 }}>
				{title}
			</Title>
			<Paragraph style={{ marginBottom: 0 }}>
				{descList.map((d, i) => (
					<span key={i}>
						{i > 0 && <br />}
						{d}
					</span>
				))}
			</Paragraph>
		</div>
	)
}

export default QuestionInfoComponent
