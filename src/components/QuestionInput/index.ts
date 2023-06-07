/**
 * @description 问卷编辑器 - Input组件入口
 * @author ITSATAN
 */

import Component from './Component'
import { QuestionInputDefaultProps } from './interface'

export * from './interface'

// Input组件配置
export default {
	title: '输入框标题',
	type: 'QuestionInput',
	Component,
	defaultProps: QuestionInputDefaultProps,
}
