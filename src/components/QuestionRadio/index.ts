/**
 * @description 问卷编辑器 - Radio组件入口
 * @author ITSATAN
 */

import Component from './Component'
import AttributeComponent from './AttributeComponent'
import { QuestionRadioDefaultProps } from './interface'

export * from './interface'

export default {
	title: '单选框',
	type: 'QuestionRadio',
	Component,
	AttributeComponent,
	defaultProps: QuestionRadioDefaultProps,
}
