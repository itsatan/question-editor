/**
 * @description Mock问卷编辑器数据
 */
import { nanoid } from 'nanoid'

export default {
	id: nanoid(),
	title: '测试问卷编辑器',
	description: '问卷描述',
	css: undefined,
	js: undefined,
	componentList: [
		// Info
		{
			fe_id: nanoid(),
			type: 'QuestionInfo',
			title: '问卷信息',
			isHidden: false,
			isLocked: false,
			props: {
				title: '测试问卷标题',
				desc: '描述...',
			},
		},
		// Title
		{
			fe_id: nanoid(),
			type: 'QuestionTitle',
			title: '标题',
			isHidden: false,
			isLocked: false,
			props: {
				text: '个人信息调研',
				level: 1,
				isCenter: false,
			},
		},
		// Input
		{
			fe_id: nanoid(),
			type: 'QuestionInput',
			title: '输入框',
			isHidden: false,
			isLocked: false,
			props: {
				title: '你的姓名',
				placeholder: '请输入你的姓名',
			},
		},
		// Paragraph
		{
			fe_id: nanoid(),
			type: 'QuestionParagraph',
			title: '段落',
			isHidden: false,
			isLocked: false,
			props: {
				text: '这是一行段落',
				isCenter: false,
			},
		},
		// TextArea
		{
			fe_id: nanoid(),
			type: 'QuestionTextArea',
			title: '多行输入框',
			isHidden: false,
			isLocked: false,
			props: {
				title: '多行输入标题',
				placeholder: '请输入...',
			},
		},
		// Radio
		{
			fe_id: nanoid(),
			type: 'QuestionRadio',
			title: '单选',
			isHidden: false,
			isLocked: false,
			props: {
				title: '单选标题',
				value: undefined,
				radio_options: [
					{ label: '选项1', value: '1' },
					{ label: '选项2', value: '2' },
					{ label: '选项3', value: '3' },
				],
				isVertical: false,
			},
		},
		// Checkbox
		{
			fe_id: nanoid(),
			type: 'QuestionCheckbox',
			title: '复选',
			isHidden: false,
			isLocked: false,
			props: {
				title: '复选标题',
				value: undefined,
				checkbox_options: [
					{ label: '选项1', value: '1', checked: false },
					{ label: '选项2', value: '2', checked: false },
					{ label: '选项3', value: '3', checked: false },
					{ label: '选项4', value: '4', checked: false },
				],
				isVertical: false,
			},
		},
	],
}
