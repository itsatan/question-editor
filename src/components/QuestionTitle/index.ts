/**
 * @description 问卷编辑器 - Title组件入口
 * @author ITSATAN
 */

import Component from './Component'
import { QuestionTitleDefaultProps } from './interface'

export * from './interface'

// Title组件配置
export default {
	title: '标题',
	type: 'QuestionTitle',
	Component,
	defaultProps: QuestionTitleDefaultProps,
}
