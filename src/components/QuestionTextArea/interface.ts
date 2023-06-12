/**
 * title 多行输入标题
 * placeholder 占位符
 */
export type QuestionTextAreaPropsType = {
	title?: string
	placeholder?: string

	onChange?: (newProps: QuestionTextAreaPropsType) => void
	disabled?: boolean
}

/**
 * TextArea默认值
 */
export const QuestionTextAreaDefaultProps = {
	title: '多行输入标题',
	placeholder: '请输入...',
}
