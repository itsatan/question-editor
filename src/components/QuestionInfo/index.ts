/**
 * @description 问卷编辑器 - Info组件入口
 * @author ITSATAN
 */

import Component from './Component'
import AttributeComponent from './AttributeComponent'
import { QuestionInfoDefaultProps } from './interface'

export * from './interface'

// Info组件配置
export default {
	title: '问卷信息',
	type: 'QuestionInfo',
	Component,
	AttributeComponent,
	defaultProps: QuestionInfoDefaultProps,
}
