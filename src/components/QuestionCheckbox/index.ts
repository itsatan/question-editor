/**
 * @description 问卷编辑器 - Checkbox组件入口
 * @author ITSATAN
 */

import Component from './Component'
import AttributeComponent from './AttributeComponent'
import { QuestionCheckboxDefaultProps } from './interface'

export * from './interface'

// Checkbox组件配置
export default {
	title: '复选框',
	type: 'QuestionCheckbox',
	Component,
	AttributeComponent,
	defaultProps: QuestionCheckboxDefaultProps,
}
