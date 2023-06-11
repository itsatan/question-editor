/**
 * text 段落内容
 * isCenter 居中显示
 */
export type QuestionParagraphPropsType = {
	text?: string
	isCenter?: boolean

	onChange?: (newProps: QuestionParagraphPropsType) => void
	disabled?: boolean
}

/**
 * Paragraph默认值
 */
export const QuestionParagraphDefaultProps: QuestionParagraphPropsType = {
	text: '一行段落',
	isCenter: false,
}
