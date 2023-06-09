/**
 * @description Mock问卷编辑器数据
 */
import { nanoid } from 'nanoid'

export default {
	id: nanoid(),
	title: '测试问卷编辑器',
	componentList: [
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
				isCenter: true,
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
	],
}
