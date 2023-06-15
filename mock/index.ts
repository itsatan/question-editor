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
				title: 'Github调查问卷',
				desc: 'https://github.com/itsatan',
			},
		},
		// Title
		// {
		// 	fe_id: nanoid(),
		// 	type: 'QuestionTitle',
		// 	title: '标题',
		// 	isHidden: false,
		// 	isLocked: false,
		// 	props: {
		// 		text: '个人基本信息',
		// 		level: 3,
		// 		isCenter: true,
		// 	},
		// },
		// Paragraph
		// {
		// 	fe_id: nanoid(),
		// 	type: 'QuestionParagraph',
		// 	title: '段落',
		// 	isHidden: false,
		// 	isLocked: false,
		// 	props: {
		// 		text: '曾像夜那么黑 每个清晨\n曾阻挡每个梦 每一道门',
		// 		isCenter: false,
		// 	},
		// },
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
		// Input
		{
			fe_id: nanoid(),
			type: 'QuestionInput',
			title: '输入框',
			isHidden: false,
			isLocked: false,
			props: {
				title: '你的年龄',
				placeholder: '请输入你的年龄',
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
				title: '你最喜欢使用哪个框架？',
				value: 'react',
				radio_options: [
					{ label: 'React', value: 'react' },
					{ label: 'Vue', value: 'vue' },
					{ label: 'Angular', value: 'angular' },
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
				title: '你期望在哪个城市工作？',
				checkbox_options: [
					{ label: '北京', value: 'beijing', checked: true },
					{ label: '上海', value: 'shanghai', checked: false },
					{ label: '深圳', value: 'shenzhen', checked: false },
					{ label: '杭州', value: 'hangzhou', checked: true },
				],
				isVertical: false,
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
				title: '自我评价',
				placeholder: '请输入自我评价',
			},
		},
	],
}
