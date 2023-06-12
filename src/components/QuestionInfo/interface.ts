/**
 * title 标题内容
 * desc 描述
 */
export type QuestionInfoPropsType = {
	title?: string
	desc?: string

	onChange?: (newProps: QuestionInfoPropsType) => void
	disabled?: boolean
}

/**
 * QuestionInfo默认值
 */
export const QuestionInfoDefaultProps: QuestionInfoPropsType = {
	title: '问卷标题',
	desc: '问卷描述...',
}
