/**
 * title 输入框标题
 * placeholder 占位符
 */
export type QuestionInputPropsType = {
	title?: string
	placeholder?: string

	onChange?: (newProps: QuestionInputPropsType) => void
	disabled?: boolean
}

/**
 * QuestionInput默认值
 */
export const QuestionInputDefaultProps: QuestionInputPropsType = {
	title: '输入框标题',
	placeholder: '请输入...',
}
