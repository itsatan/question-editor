export type OptionType = {
	label: string
	value: string | undefined
}
/**
 * title 标题内容
 * value 当前选中项
 * options 单选按钮组
 * isVertical 竖向排列
 */
export type QuestionRadioPropsType = {
	title?: string
	value?: string | undefined
	radio_options?: Array<OptionType>
	isVertical?: boolean

	onChange?: (newProps: QuestionRadioPropsType) => void
	disabled?: boolean
}

/**
 * Radio默认值
 */
export const QuestionRadioDefaultProps: QuestionRadioPropsType = {
	title: '单选标题',
	value: '',
	radio_options: [
		{ label: '选项1', value: '1' },
		{ label: '选项2', value: '2' },
		{ label: '选项3', value: '3' },
	],
	isVertical: false,
}
