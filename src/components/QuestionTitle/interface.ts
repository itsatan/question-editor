/**
 * text 标题内容
 * level 层级
 * isCenter 居中显示
 */
export type QuestionTitlePropsType = {
	text?: string
	level?: 1 | 2 | 3 | 4 | 5
	isCenter?: false

	onChange?: (newProps: QuestionTitlePropsType) => void
}

/**
 * QuestionTitle默认值
 */
export const QuestionTitleDefaultProps: QuestionTitlePropsType = {
	text: '一行标题',
	level: 1,
	isCenter: false,
}
