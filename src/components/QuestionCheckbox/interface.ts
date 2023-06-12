export type OptionType = {
	label: string
	value: string
	checked: boolean
}
/**
 * title 标题内容
 * options 多选按钮配置
 * isVertical 竖向排列
 */
export type QuestionCheckboxPropsType = {
	title?: string
	checkbox_options?: Array<OptionType>
	isVertical?: boolean

	onChange?: (newProps: QuestionCheckboxPropsType) => void
	disabled?: boolean
}

/**
 * Checkbox默认值
 */
export const QuestionCheckboxDefaultProps: QuestionCheckboxPropsType = {
	title: '多选标题',
	checkbox_options: [
		{ label: '选项1', value: '1', checked: false },
		{ label: '选项2', value: '2', checked: false },
		{ label: '选项3', value: '3', checked: false },
	],
	isVertical: false,
}
